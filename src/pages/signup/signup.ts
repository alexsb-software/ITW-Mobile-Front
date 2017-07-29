import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupForm: FormGroup;
  submit: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      name: ['', Validators.compose([ Validators.maxLength(15), Validators.pattern('[a-zA-Z]*'), Validators.required ])],
      email: ['', Validators.compose([ Validators.pattern('([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+'), Validators.required ])],
      password: ['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signUp () {
    console.log(this.signupForm.valid);
    this.signupForm.valid ? this.submit = true : this.submit = false;
    if(this.submit) {
      this.navCtrl.pop();
    }
  }

}
