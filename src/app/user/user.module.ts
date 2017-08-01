import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { UserRoutingModule } from './user-routing.module'

import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';

import { UserService } from './_service/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserFormComponent,
  ],
  exports: [
    UserComponent
  ],
  providers: [UserService]
})
export class UserModule { }
