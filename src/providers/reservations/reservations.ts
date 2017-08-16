import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  getReservations(user_id) {
    let url = apiEndPoint + '/users/' + user_id + '/sessions';
    return this.http.get(url).map(data => data.json());
  }

}
