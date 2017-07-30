import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Page} from "ionic-angular/umd/navigation/nav-util";
import {Day1Page} from "./day1/day1";
import {Day2Page} from "./day2/day2";

/**
 * Generated class for the AgendaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage{
  day1: Page;
  day2: Page;

  constructor(public navCtrl: NavController) {
    this.day1 = Day1Page;
    this.day2 = Day2Page;
  }
}
