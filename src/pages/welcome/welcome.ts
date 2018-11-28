import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController ,LoadingController , MenuController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

import { AuthService } from "../../providers/auth-service";

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  resposeData: any;
  userData = { username: "", password: "" };

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public menu: MenuController,
  ) {       this.menu.enable(false);

    
  
    if(localStorage.getItem('userData')){
      

      this.navCtrl.setRoot(HomePage);
    }
  }

  login() 
  
  {
    if (this.userData.username && this.userData.password) {
      this.authService.postData(this.userData, "login").then(
        result => {
          this.resposeData = result;
          console.log(this.resposeData);
          if (this.resposeData.success) {
            localStorage.setItem("userData", JSON.stringify(this.resposeData));
            this.navCtrl.push(HomePage);
          } else if (this.resposeData.statusText) {
            this.presentToast("You subbmited wrong username or password");
          } else {
            this.presentToast("Please give valid username and password");
          }
        },
        err => {
          {
            this.presentToast("Login failed ,Try again later !");
          }
        }
      );
    } else {
      this.presentToast("Username and Password cannot be empty ! ");
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    }); 
    toast.present();
  } 
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }


}
