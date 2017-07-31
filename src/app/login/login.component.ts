import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginUser } from './model/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Prova Delinea';
  userLogin: LoginUser = new LoginUser();
  userLoginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {

    this.userLoginForm = this.formBuilder.group({
      username: [this.userLogin.username, [
        Validators.required, ]
      ],
      password: [this.userLogin.password, [
        Validators.required]
      ],
    });

  }

  login() {
    console.log(this.userLogin)
  }

}
