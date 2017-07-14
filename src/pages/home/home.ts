import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {PostsGetterProvider} from "../../providers/posts-getter/posts-getter";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  posts:any[];

  constructor(public navCtrl: NavController, public postsGetter: PostsGetterProvider) {
  }

  ngOnInit(){
    this.postsGetter.getData().subscribe(
      success => this.posts = success,
      err => console.log(err)
    )
  }

  loadMore(infinteScroll){
    this.postsGetter.getMore().subscribe(
      data => { this.posts.push(...data); infinteScroll.complete() },
      err => { console.log(err); infinteScroll.complete() }
    )
  }

  //TODO:hashtag clickable to new post page with that hashtag


}
