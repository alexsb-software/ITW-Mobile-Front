import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { PostsProvider } from "../../providers/posts/posts";
import { NewPostPage } from "../new-post/new-post";
import { Post } from "../../model/Post.model";
import { AboutPage } from "../about/about";
import {FbProvider} from "../../providers/fb/fb";
import {HashtagSearchPage} from "../hashtag-search/hashtag-search";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  posts:Post[];
  stopRequesting: boolean

  constructor(public navCtrl: NavController, public postsGetter: PostsProvider, public modalCtrl: ModalController,
              private fb: FbProvider,public storage: Storage, public alertCtrl: AlertController) {
    this.posts = []
  }

  ngOnInit(): void{
    this.getPosts(null)
  }

  getPosts (refresher) {
    this.postsGetter.getData().subscribe(
      success => {
        this.posts = success
        this.postsGetter.pagination = 0;
        this.stopRequesting = false;
        if (refresher) refresher.complete()
      },
      err => {
        console.log(err)
        if (refresher) refresher.complete()
      }
    )
  }

  loadMore(infiniteScroll): void {
    if (this.stopRequesting) {
      infiniteScroll.complete()
      return
    }
    this.postsGetter.getMore().subscribe(
      data => {
        if (data.length === 0) {
          this.stopRequesting = true
        }
        this.posts.push(...data); infiniteScroll.complete()
      },
      err => { console.log(err); infiniteScroll.complete() }
    )
  }

  navToNewPost(): void {
    this.storage.get('activated').then(data => {
      if (data) {
        let modal = this.modalCtrl.create(NewPostPage);
        modal.present()
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'Verify',
          subTitle: 'Unverified users are not allowed to add a post.',
          buttons: ['Dismiss']
        });
        alert.present();
      }
    })

  }

  hashtagSearch (hashtag) {
    this.navCtrl.push(HashtagSearchPage, { hashtag: hashtag })
  }

  goToAbout() {
    this.navCtrl.push(AboutPage)
  }
  checkIn(){
    if(!this.fb.logedIn){
      this.fb.onLogin().then(() => {
        this.fb.logedIn = true;
        this.fb.checkIn();
      }).catch(e => {
        let alert = this.alertCtrl.create({
          title: 'Permission Denied',
          subTitle: 'You have canceled our app access!',
          buttons: ['Dismiss']
        });
        alert.present();
      });
    }else{
      this.fb.checkIn();
    }
  }

  share(){
    this.fb.share();
  }
}
