import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

  titulo = '';
  user: User = new User();
  userForm: FormGroup;

  idSubscribe: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();

  }

  ngOnInit() {



    this.idSubscribe = this.route.params.subscribe(params => {
      const id = params['id'];

      this.titulo = id ? 'Edição de Candidatos ' : 'Cadastro de Candidato';

      if (!id) {
        return;
      }


      this.userService.getUser(id)
        .subscribe(
          user => { this.user = user; console.log(this.user)},
          response => {
            if (response.status === 404) {
              this.router.navigate(['/user'])
            }
          });
    });

  }

  ngOnDestroy() {
    this.idSubscribe.unsubscribe()
  }

  buildForm() {

    this.userForm = this.formBuilder.group({
      id: [this.user.id],
      full_name: [this.user.full_name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24)]
      ],
      cpf: [this.user.cpf, [
        Validators.required,
        // Validators.minLength(4),
        // Validators.maxLength(24)
        ]
      ],
      rg: [this.user.rg, [
        Validators.required,
        // Validators.minLength(4),
        // Validators.maxLength(24)
        ]
      ],
      birth_date: [this.user.birth_date, [
        Validators.required,
        // Validators.minLength(4),
        // Validators.maxLength(24)
      ]
      ],
      phone: [this.user.phone, [
        Validators.required,
        // Validators.maxLength(15),
        // Validators.pattern("\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$")
      ]
      ],
      username: [this.user.username, [
        Validators.required,
        // Validators.minLength(4),
        // Validators.maxLength(24)
      ]
      ],
      email: [this.user.email, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
      ],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ]
      ],
    });

  }


  salvar() {

    console.log('salvar')
    console.log(this.user)
    if (this.user.id) {
      this.userService.updateUser(this.user).subscribe(
        res => {
          console.log(res)
        },
        error => {
          console.log(error)
        })
    } else {
      this.userService.addUser(this.user).subscribe(
        res => {
          console.log(res)
          alert('Candidato salvo com sucesso')
        },
          error => {
          console.log(error)
            alert('Error ao salvar')
        })
    }
  }

}
