import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
<<<<<<< HEAD
import {Hashtag} from "../../model/Hashtag.model";
import {apiEndPoint} from "../../app/app.module";
=======
import {apiEndPoint} from "../../app/app.module";
import { Storage } from "@ionic/storage"
>>>>>>> ionic

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostsProvider {
  user: any

<<<<<<< HEAD
  user: any;
  constructor(public http: Http, public storage: Storage) {
      this.storage.get('user').then(data => {
          this.user = JSON.parse(data)
      });
=======
  constructor(public http: Http, public storage: Storage) {
    this.storage.get('user').then(data => {
      this.user = JSON.parse(data)
    })
>>>>>>> ionic
  }

  getData(){
    return this.http.get("assets/API/posts.json").map(data => data.json())
  }

  getMore(){
    return this.http.get("assets/API/posts.json").map(data => data.json())
  }

  sendPost(text:string, hashtagsArr: string[]){
<<<<<<< HEAD
        console.log(this.user)

        return this.http.post(apiEndPoint + '/posts', {
            user: this.user,
            content: text,
            hashtags: hashtagsArr
  }).map(data => data.json())
=======
    console.log(this.user)

    return this.http.post(apiEndPoint + '/posts', {
      user: this.user,
      content: text,
      hashtags: hashtagsArr
    }).map(data => data.json())
>>>>>>> ionic
    //TODO: Authentication
  }

}
