import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Hashtag} from "../../model/Hashtag.model";

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostsProvider {

  constructor(public http: Http) {

  }

  getData(){
    return this.http.get("assets/API/posts.json").map(data => data.json())
  }

  getMore(){
    return this.http.get("assets/API/posts.json").map(data => data.json())
  }

  sendPost(text:string, hashtagsArr:Hashtag[]){
    return this.http.post('', {
      content:text,
      hashtags:hashtagsArr
    }).map(data => data.json())
    //TODO: Authentication
  }

}
