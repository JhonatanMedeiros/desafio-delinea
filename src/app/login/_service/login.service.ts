import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, Request, RequestMethod } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  private url = 'https://delineaapi.herokuapp.com/o/token/';
  private client_id = 'QXBs2sW7qIDTnHpJuFiXQsLWpfyeo9iixK0suvpK';
  private client_secret = 'TmNEOYKR1D5PrNwvGJMyBE2TbZ45OlXLkFgNzdyFsg7FaG3Y7I9njVkWKw4O0IFRRviYzXIDi4ZHem41APoyMDZ4Z1icP1JPEzTxe3uQUFrapy4BLEJXS3hxsqY38ujk';

  constructor(private http: Http) { }


  fazerLogin (user) {
    return this.http.post(this.url, this.setbody(user), this.setHearders())
      .map((response: Response) => {
        const user = response.json();
      });
  }


  private setbody(user) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', user.email);
    urlSearchParams.append('password', user.password);
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('client_id', this.client_id);
    urlSearchParams.append('client_secret',  this.client_secret);
    return urlSearchParams.toString()
  }

  private setHearders() {

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const options = new RequestOptions({ headers: headers });
    return options;
  }

}
