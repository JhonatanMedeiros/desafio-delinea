import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppUtilService } from './util/app-util.service';


@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AppUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
