import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginUser } from './_model/loginUser';
import { LoginService } from './_service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Prova Delinea';
  userLogin: LoginUser = new LoginUser();

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }


  login() {

    this.loginService.fazerLogin(this.userLogin).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
      alert('Error ao fazer o login')
    })

    console.log(this.userLogin)
  }

}
