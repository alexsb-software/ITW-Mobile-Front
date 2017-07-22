import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() pageTitle:string;

  constructor(private navCtrl: NavController) {

  }
  goBack(){
    //just for testing ...
    console.log(this.navCtrl);
     //This line below will be execute
    //this.navCtrl.pop();
  }

}
