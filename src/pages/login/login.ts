import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: Http, public storage: Storage
  , public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([ Validators.pattern('([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+'), Validators.required ])],
      password: [''],
    })
  }

  Login () {
    this.loginForm.valid ? this.submit = true : this.submit = false;
    if (this.loginForm.valid) {
      let loader = this.loadingCtrl.create({
        content: 'Please Wait...'
      })
      loader.present()
      let postParam = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.http.post(apiEndPoint + '/users/login', postParam).map(data => data.json()).subscribe((response) => {
        // this.storage.clear().then(() => {
          // this.storage.get('user').then(data => { console.log("User data before set"); console.log(data);});
          this.storage.set('user', JSON.stringify(response.user));
          this.storage.set('token', JSON.stringify(response.user.token)).then((data) => {
            
          });
        // })
        this.navCtrl.setRoot(AppRoot)
        loader.dismiss()
      }, (error) => {
        loader.dismiss()
        let message = ''
        if (error.status === 401) {
          message = 'Please make sure of your username and password'
        }
        else
          message = 'Sorry something went wrong'
        let toast = this.toastCtrl.create({
          message: message,
          duration: 3500,
          position: 'bottom'
        })
        toast.present()
      })
    }


  }
  gotoSignup () {
    this.navCtrl.push(SignupPage);
  }
}
