import { Injectable } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import 'rxjs/add/operator/map';
import { ToastController } from "ionic-angular";


@Injectable()
export class FbProvider {

  private message: string = '#IEEE #IEEE_AlexSB #ITW #ITW_17';
  private _logedIn: boolean = false;
  private FB_APP_ID = 855905901238851;

  constructor(private fb: Facebook, private toastCtrl: ToastController) {
    this.fb.browserInit(this.FB_APP_ID, "v2.10")
  }
  onLogin() {
    return this.fb.login(['public_profile','user_friends', 'email']);
  }
  checkIn() {
    this.fb.getLoginStatus()
      .then((res) => {
        if (res.status == 'connected') {
          alert("I am connected" + JSON.stringify(res));
          let options={
            method : 'share',
            href: 'https://www.facebook.com/IEEE.AlexSB.ITW/',
            hashtag: this.message
          };
          this.openDialog(options);
        }

      })
      .catch(e => console.log("Error in Check in", e));
  }



  get logedIn(): boolean {
    return this._logedIn;
  }

  set logedIn(value: boolean) {
    this._logedIn = value;
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  share(){
    let options={
      method : 'share'
    }
    this.openDialog(options);
  }

  openDialog(options) {
    this.fb.showDialog(options)
      .then(res => console.log(res))
      .catch(e => console.log("Error in Share ", e));
  }

}
