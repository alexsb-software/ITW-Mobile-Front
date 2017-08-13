import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { apiEndPoint } from "../../app/app.module";

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public storage: Storage, public http: Http) {
    this.signupForm = formBuilder.group({
      username: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$'), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      name: ['', Validators.required]
    })
  }
  // POST users/signup  {alias, name, email, password}
  signUp() {
    this.signupForm.valid ? this.submit = true : this.submit = false;
    if (this.signupForm.valid) {
      let postParam = {
        alias: this.signupForm.value.username,
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      }
      this.http.post(apiEndPoint + '/users/signup', postParam).map(data => data.json()).subscribe((response) => {
        //TODO: show success msg
        this.navCtrl.pop()
      })
    }
    // this.navCtrl.pop()
  }

}
