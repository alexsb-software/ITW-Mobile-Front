import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";


@Component({
  selector: 'filter-page',
  templateUrl: 'filter.html',
})
export class FilterPage{
  sessionCategory:string;

  constructor(public viewCtrl: ViewController){

  }

  selectCategory(event){
    this.viewCtrl.dismiss({ type: event })
  }
}
