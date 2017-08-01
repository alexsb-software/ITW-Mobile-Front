import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";


@Component({
  selector: 'filter-page',
  templateUrl: 'filter.html',
})
export class FilterPage{
  sessionCategory:string;
  sessionType:string;
  types:string[] = ['all', 'lecture', 'workshop', 'gallery'];
  categories:string[] = ['all', 'computer', 'communication', 'civil'];

  constructor(public viewCtrl: ViewController, public navParams: NavParams){
    this.sessionCategory = this.navParams.get('category');
    this.sessionType = this.navParams.get('type');
  }

  dismissFilter(){
    this.viewCtrl.dismiss({ type: this.sessionType, category: this.sessionCategory })
  }
}
