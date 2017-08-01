import { Component, OnInit } from '@angular/core';

import { UserService } from './_service/user.service'
import { User } from './_model/user';


@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: User[] = [];
  public carregando = {
    show: false,
    msg: 'Carregando...'
  };

  constructor(private userSerive: UserService) { }

  ngOnInit() {

    this.carregando.show = true;

    this.userSerive.getUsers()
      .subscribe(data => {
        this.users = data;
        console.log(this.users);
        this.carregando.show = false;
      }, err => {
        console.log(err);
        this.carregando.show = true;
        this.carregando.msg = 'Ocorreu um error no servidor'
      });


  }


  deleteUser(user) {

    let alertConfirm = confirm('Deseja remover ' + user.full_name + '?');

    if (alertConfirm == true) {
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.userSerive.deleteUser(user)
        .subscribe(suss => console.log(suss),
          err => {
            alert('Não foi possivel remover.');
            this.users.splice(index, 0, user);
          });
    }
  }

}
