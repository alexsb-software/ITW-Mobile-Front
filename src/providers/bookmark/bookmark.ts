import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";
import { apiEndPoint } from '../../app/app.module';

/*
  Generated class for the BookmarkProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BookmarkProvider {

  user_id: object;

  constructor(public http: Http, public storage: Storage) {
    this.storage.get('user').then(data => {
      let user = JSON.parse(data)
      this.user_id = user.id
    })
  }

  bookMarkSession(sessionId: Number) {
    let url = apiEndPoint + '/users/' + this.user_id + "/add/session/" + sessionId;
    console.log(url);
    return this.http.post(url, {}).map(data => data.json());
  }

}
