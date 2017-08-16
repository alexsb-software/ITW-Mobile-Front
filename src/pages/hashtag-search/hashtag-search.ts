import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Post} from "../../model/Post.model";
import {Http} from "@angular/http";
import { Storage } from "@ionic/storage";
import {apiEndPoint} from "../../app/app.module";

/**
 * Generated class for the HashtagSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-hashtag-search',
  templateUrl: 'hashtag-search.html',
})
export class HashtagSearchPage implements OnInit{

  hashtag: any;
  posts: Post[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage: Storage
  ,public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.posts = []
  }

  ngOnInit () {
    let loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    })
    loading.present()
    this.hashtag = this.navParams.get('hashtag')
    this.http.get(apiEndPoint + '/hashtags/' + this.hashtag.title).map(data => data.json()).subscribe(success => {
      this.posts = success.posts

      loading.dismiss()
    }, error => {
      let toast = this.toastCtrl.create({
        message: 'Something Wrong happened, Please try again later.',
        duration: 3000,
        position: 'bottom'
      })
      toast.present()
      loading.dismiss()
      this.navCtrl.pop()
      console.log(error)
    })
  }

}
