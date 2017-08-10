import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Session} from "../../model/Session.model";

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

  getData(){
    return this.http.get('assets/API/sessions.json').map(data => data.json())
  }

  getSessionById (id: number) {
    return this.sessions.find((session) => session.id === id)
  }
  //TODO
  // getSessionById (id: number) {
  //   return this.http.get('' + id).map(data => data.json())
  // }


}
