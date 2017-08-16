import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiEndPoint } from "../../app/app.module";
import { Storage } from "@ionic/storage";
import { RequestOptions, Headers, Http } from "@angular/http";

/**
 * Generated class for the VerifyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {

  verifyForm: FormGroup;
  submit: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public storage: Storage, public http: Http
    , public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

    this.verifyForm = formBuilder.group({
      code: ['', Validators.compose([Validators.maxLength(8), Validators.minLength(8), Validators.required])]
    })
  }

  verify() {
    this.storage.get('user').then(data => {
      let user = JSON.parse(data);
      this.verifyForm.valid ? this.submit = true : this.submit = false;

      if (this.verifyForm.valid) {
        let loader = this.loadingCtrl.create({
          content: 'Verifying, please wait...'
        });

        loader.present();

        let postParam = {
          key: this.verifyForm.value.code
        }

        let url = apiEndPoint + '/users/' + user.id + '/verify';

        this.http.post(url, postParam).map(data => data.json()).subscribe((response) => {
          this.storage.set('activated', true)
          let toast = this.toastCtrl.create({
            message: 'Verification successful !',
            duration: 2000,
            position: 'bottom'
          });

          toast.present()
          loader.dismiss();
          this.navCtrl.pop();
        }, (error) => {
          let toast = this.toastCtrl.create({
            message: 'Verification key not valid',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        });
      }
    })
  }

}
