import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupPage } from "../signup/signup";
import { HomePage } from "../home/home";
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([ Validators.pattern('([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+'), Validators.required ])],
      password: [''],
  })
  }

  Login () {
    console.log(this.loginForm.value);
    this.loginForm.valid ? this.submit = true : this.submit = false;
    if ( this.submit) {
      this.navCtrl.setRoot(HomePage);
    }
    
  }
  gotoSignup () {
    this.navCtrl.push(SignupPage);
  }
}
