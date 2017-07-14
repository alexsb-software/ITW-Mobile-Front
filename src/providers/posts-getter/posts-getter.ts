import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostsGetterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostsGetterProvider {

  constructor(public http: Http) {

  }

  getData(){
    return this.http.get("assets/API/posts.json").map(success => success.json())
  }

}
