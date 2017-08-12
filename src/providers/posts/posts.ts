import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage"
import {apiEndPoint} from "../../app/app.module";

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostsProvider {
  user: any
  pagination: number
  constructor(public http: Http, public storage: Storage) {
    this.pagination = 0;
  }

  getData(){
    return this.http.get(apiEndPoint + '/posts').map(data => data.json())
  }

  getMore(){
    return this.http.get(apiEndPoint + '/posts' + `/${++this.pagination}`).map(data => data.json())
  }


}
