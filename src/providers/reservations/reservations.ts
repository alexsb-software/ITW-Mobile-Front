import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Session } from "../../model/Session.model";
import { apiEndPoint } from '../../app/app.module';

/*
  Generated class for the ReservationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReservationsProvider {

  sessions: Session[];

  constructor(public http: Http) {
    this.sessions = [];
  }

  getReservations(user_id, user_token) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + user_token.replace(/"/g, ''))
    headers.append('Access-Control-Allow-Origin', '*')

    let options = new RequestOptions({ headers: headers })

    let url = apiEndPoint + '/users/' + user_id + '/sessions';
    return this.http.get(url, options).map(data => data.json());
  }

}
