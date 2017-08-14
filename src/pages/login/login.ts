import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupPage } from "../signup/signup";
import {Http} from "@angular/http";
import { Storage } from "@ionic/storage";
import {AppRoot} from "../app_root/AppRoot";
import { apiEndPoint } from "../../app/app.module";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm : FormGroup;
  submit: boolean = true;
  user: object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: Http, public storage: Storage) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([ Validators.pattern('([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+'), Validators.required ])],
      password: [''],
  })
  }

  Login () {
    this.loginForm.valid ? this.submit = true : this.submit = false;
    if (this.loginForm.valid) {
      let postParam = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.http.post(apiEndPoint + '/users/login', postParam).map(data => data.json()).subscribe((response) => {
        // this.storage.clear().then(() => {
          this.storage.set('user', JSON.stringify(response.user))
        // })
        this.navCtrl.setRoot(AppRoot)
      })
    }


  }
  gotoSignup () {
    this.navCtrl.push(SignupPage);
  }
}
