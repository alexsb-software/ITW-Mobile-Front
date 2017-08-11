import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { PostsProvider } from "../../providers/posts/posts";
import { NewPostPage } from "../new-post/new-post";
import { Post } from "../../model/Post.model";
import {PostsPage} from "../posts/posts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  posts:Post[];

  constructor(public navCtrl: NavController, public postsGetter: PostsProvider, public modalCtrl: ModalController) {
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

  navToNewPost(param):void{
    this.navCtrl.push(PostsPage,{hashTag: param});
  }

  //TODO: FAB btns
}
