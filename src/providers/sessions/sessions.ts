import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Session } from "../../model/Session.model";
import { apiEndPoint } from "../../app/app.module";

/*
  Generated class for the SessionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SessionsProvider {

  sessions: Session[];

  constructor(public http: Http) {
    this.sessions = [];
  }

  getData() {
    return this.http.get(apiEndPoint + '/sessions').map(data => data.json())
  }

  getSessionById(id: number) {
    return this.http.get(apiEndPoint + '/sessions/' + id).map(data => data.json())
  }

}
