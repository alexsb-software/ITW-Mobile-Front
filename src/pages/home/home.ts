import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { PostsProvider } from "../../providers/posts/posts";
import { NewPostPage } from "../new-post/new-post";
import { Post } from "../../model/Post.model";
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  posts: Post[];
  stopRequesting: boolean

  constructor(public navCtrl: NavController, public postsGetter: PostsProvider, public modalCtrl: ModalController) {
    this.posts = []
  }

  ngOnInit(): void {
    this.postsGetter.getData().subscribe(
      success => { this.posts = success; console.log(success) },
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
}
