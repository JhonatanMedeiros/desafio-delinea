import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service'
import { User } from './model/user';
import { AppUtilService } from '../util/app-util.service';


@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: User[] = [];

  constructor(private userSerive: UserService, public appUtil: AppUtilService) { }

  ngOnInit() {

    this.userSerive.getUsers()
      .subscribe(data => {
        this.users = data;
        console.log(this.users);
        this.appUtil.loader('hide');
      }, err => {
        console.log(err);
        this.appUtil.loader('hide');
      });

    this.appUtil.loader('show');

  }


  deleteUser(user) {
    if (confirm('Deseja remover ' + user.full_name + '?')) {
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.userSerive.deleteUser(user)
        .subscribe(suss => console.log(suss),
          err => {
            alert('Não foi possivel remover.');
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }

}
