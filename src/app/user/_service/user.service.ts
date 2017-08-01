import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  private url = 'https://delineaapi.herokuapp.com/candidate/';


  constructor(private http: Http) {
  }


  getUsers() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getUser(id) {
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(user) {
    return this.http.post(this.url, user, this.getHearders())
      .map(res => res.json());
  }

  updateUser(user) {
    return this.http.put(this.getUserUrl(user.id), user)
      .map(res => res.json())
  }

  deleteUser(user) {
    return this.http.delete(this.getUserUrl(user.id) + '/delete')
      .map(res => res.json());
  }

  private getUserUrl(id) {
    return this.url + id;
  }

  private getHearders() {

    const headers = new Headers({ 'Content-Type': 'application/json' });

    const options = new RequestOptions({ headers: headers });
    return options;
  }

}
