import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import * as jwt_decode from "jwt-decode";

let apiUrl = "http://localhost:3000/";

//let apiUrl = 'http://ef74a3c3.ngrok.io/users/';

@Injectable()
export class AuthService {
  constructor(public http: Http) {
    console.log("Hello AuthService Provider");
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http
        .post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(
          res => {
            resolve(res.json());
          },
          err => {
            if (err.statusText == "Unauthorized") {
              resolve(err);
            } else {
              reject(err);
            }
          }
        );
    });
  }
  getData(token, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", "bearer " + token);
      this.http.get(apiUrl + type, { headers: headers }).subscribe(
        res => {
          resolve(res.json());
        },
        err => {
          reject(err);
        }
      );
    });
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
