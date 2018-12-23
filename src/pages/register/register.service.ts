import { Injectable } from "@angular/core";

import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";
/* const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }; */

@Injectable()
export class RegisterService {
  constructor(private http: Http) {}

  addUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    console.log(user);
    return this.http
      .post("https://localhost:3433/users/signup", user, { headers: headers })
      .pipe(map(response => response.json()))
      .subscribe(data => {
        console.log(data);
      });
  }
}
