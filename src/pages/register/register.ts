import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { AuthService } from "../../providers/auth-service";
import { LoginPage } from "../login/login";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  userData = {
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: ""
  };
  resposeData: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    private toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  register() {
    if (
      this.userData.username &&
      this.userData.password &&
      this.userData.email &&
      this.userData.firstname &&
      this.userData.lastname
    ) {
      this.authService.postData(this.userData, "signup").then(
        result => {
          this.resposeData = result;
          console.log(result);
          if (this.resposeData.success) {
            console.log(this.resposeData);
            localStorage.setItem("userData", JSON.stringify(this.resposeData));
            this.presentToast("Successfully registered");
            this.navCtrl.push(LoginPage);
          } else if (this.resposeData.err.name) {
            this.presentToast(this.resposeData.err.message);
          }
        },
        err => {
          {
            this.presentToast("Register failed ,Try again later !");
          }
        }
      );
    } else {
      this.presentToast("Please Write Valid Information");
    }
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
