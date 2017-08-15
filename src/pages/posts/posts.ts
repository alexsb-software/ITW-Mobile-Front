import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";
import {Post} from "../../model/Post.model";

/**
 * Generated class for the PostsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage implements OnInit{

  private posts:Post[];
  private hashTag;
  constructor(public navCtrl: NavController, public navParams: NavParams,public postsGetter: PostsProvider) {
  }

  ngOnInit(): void{
    this.hashTag = this.navParams.get('hashTag');
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

}
