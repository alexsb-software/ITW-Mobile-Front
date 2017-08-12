import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";
import {apiEndPoint} from "../../app/app.module";
import {RequestOptions, Headers, Http} from "@angular/http";
import {Storage} from "@ionic/storage"

/**
 * Generated class for the NewPostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  hashtags: string[] = [];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public navParams:NavParams, public postsProvider: PostsProvider
  ,public loadingCtrl: LoadingController, public toastCtrl: ToastController, public storage: Storage, public http: Http) {
  }

  ionViewDidLoad() {
    if(this.navParams.get('hashtag')){
      this.hashtags.push(this.navParams.get('hashtag'))
    }
  }

  deleteChip(i:number):void{
    this.hashtags.splice(i, 1)
  }

  addHashtag(input):void{
    if(input.value !== '') {
      this.hashtags.push(input.value);
      input.value = '';
    }
  }



  sendPost(text:string):void{
    let loading = this.loadingCtrl.create({
      spinner:'crescent',
      content:'posting..'
    });
    let toast = this.toastCtrl.create({
      position:'bottom',
      duration:2500
    });

    loading.present();

    this.storage.get('user').then(data => {
      let currentUser = JSON.parse(data)
      // let headers = new Headers()
      //
      // headers.append('Authorization', 'Bearer ' + currentUser.token)
      // headers.append('Access-Control-Allow-Origin', '*')
      //
      // let options = new RequestOptions({ headers: headers, withCredentials: true })

      this.http.post(apiEndPoint + '/posts', {
        user: currentUser,
        content: text,
        hashtags: this.hashtags
      }).map(data => data.json()).subscribe(success =>{

        console.log('post success', success);
        this.viewCtrl.dismiss();

        setTimeout(()=>{
          loading.dismiss();
          toast.setMessage('Your post has been successfully added');
          toast.present()

        }, 500);

      }, err => {
        console.log('post err', err);
        this.viewCtrl.dismiss();

        setTimeout(()=>{
          loading.dismiss();
          toast.setMessage('Unfortunately your post has not been added, Please check your internet connection');
          toast.setDuration(3500);
          toast.present()

        }, 500);
      })
    })

  }

  closeModal(): void{
    this.viewCtrl.dismiss()
  }

}
