import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {PostsGetterProvider} from "../../providers/posts-getter/posts-getter";
import {NewPostPage} from "../new-post/new-post";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  posts:any[];

  constructor(public navCtrl: NavController, public postsGetter: PostsGetterProvider,public modalCtrl: ModalController) {
  }

  ngOnInit(): void{
    this.postsGetter.getData().subscribe(
      success => this.posts = success,
      err => console.log(err)
    )
  }

  loadMore(infiniteScroll): void{
    this.postsGetter.getMore().subscribe(
      data => { this.posts.push(...data); infiniteScroll.complete() },
      err => { console.log(err); infiniteScroll.complete() }
    )
  }

  navToNewPost():void{
    let modal = this.modalCtrl.create(NewPostPage);
    modal.present()
  }

  //TODO:hashtag clickable to new post page with that hashtag
  //TODO: FAB btns


}
