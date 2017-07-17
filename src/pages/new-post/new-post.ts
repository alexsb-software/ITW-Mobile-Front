import {Component, ViewChild} from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';

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

  @ViewChild('hashtagCont') div:any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  delete(chip:Element):void{
    chip.remove();
  }

  addHashtag(input):void{
    //TODO: add chip dynamically
    //TODO: validate input
  }

  closeModal(): void{
    this.viewCtrl.dismiss()
  }

}
