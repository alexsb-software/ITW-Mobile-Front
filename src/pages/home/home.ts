import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { PostsProvider } from "../../providers/posts/posts";
import { NewPostPage } from "../new-post/new-post";
import { Post } from "../../model/Post.model";
import { AboutPage } from "../about/about";
import {FbProvider} from "../../providers/fb/fb";
import {FacebookLoginResponse} from "@ionic-native/facebook";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  posts:Post[];
  stopRequesting: boolean

  constructor(public navCtrl: NavController, public postsGetter: PostsProvider, public modalCtrl: ModalController,
              private fb: FbProvider) {
    this.posts = []
  }

  ngOnInit(): void{
    this.getPosts(null)
  }

  getPosts (refresher) {
    this.postsGetter.getData().subscribe(
      success => {
        this.posts = success
        if (refresher) refresher.complete()
      },
      err => console.log(err)
    )
  }

  loadMore(infiniteScroll): void {
    if (this.stopRequesting) return
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

  navToNewPost(param): void {
    let modal = this.modalCtrl.create(NewPostPage, param ? { hashtag: param } : {});
    modal.present()
  }

  goToAbout() {
    this.navCtrl.push(AboutPage)
  }
  checkIn(){
    if(!this.fb.logedIn){
      this.fb.onLogin().then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);
        alert( "loged in tmam" + JSON.stringify(res));
        this.fb.logedIn = true;
        this.fb.checkIn();
      }).catch(e => {
        console.log('Error logging into Facebook', e);
        alert("Error in login" + JSON.stringify(e));
      });
    }else{
      this.fb.checkIn();
    }
  }

  share(){
    this.fb.share();
  }
}
