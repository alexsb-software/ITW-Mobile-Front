import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";

/*
  Generated class for the BookmarkProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BookmarkProvider {

  constructor(public http: Http, public storage: Storage) {

  }
  bookMarkSession(sessionId: Number){
    let user = this.storage.get('user');
    let url = user+"/add/session/"+sessionId;
    return this.http.post(url,{});
  }

}
