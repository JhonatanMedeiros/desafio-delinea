import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../_service/user.service';
import { User } from '../_model/user';
import { Subscription } from 'rxjs/Subscription';


import 'jquery'
import 'jquery-mask-plugin'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

  title = '';
  breadcrumb = '';
  user: User = new User();

  idSubscribe: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router ) {
  }

  ngOnInit() {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#tel').mask('(00) 00000-0000');

    this.idSubscribe = this.route.params.subscribe(params => {
      const id = params['id'];

      this.title = id ? 'Edição de Candidatos ' : 'Cadastro de Candidato';


      if (id) {
        this.userService.getUser(id)
          .subscribe(
            user => {
              this.user = user;
              this.breadcrumb = id ? (this.user.full_name || 'Usuario sem nome'): '';
            },
            err => { console.log(err)});
      }else {this.breadcrumb = 'Novo'}


    });

  }

  ngOnDestroy() {
    this.idSubscribe.unsubscribe()
  }

  salvar() {
    if (this.user.id) {
      this.userService.updateUser(this.user).subscribe(
        res => {this.router.navigate(['/user'])},
        error => {
          console.log(error);
          alert('Error ao salvar');
        })
    } else {
      this.userService.addUser(this.user).subscribe(
        res => {
          alert('Candidato salvo com sucesso');
          this.router.navigate(['/user']);
        },
          error => {
          console.log(error);
            alert('Error ao salvar')
        })
    }
  }

}
