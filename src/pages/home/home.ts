import { Component } from "@angular/core";
import { RegisterPage } from "../register/register";
import { LoginPage } from "../login/login";
import { AuthService } from "../../providers/auth-service";

import {
  NavController,
  LoadingController,
  MenuController,
  ToastController
} from "ionic-angular";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
import { Camera, CameraOptions } from "@ionic-native/camera";
import * as io from "socket.io-client";
import { Home1Page } from "../home1/home1";
import { Home2Page } from "../home2/home2";
import { Socket } from "ng-socket-io";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public imageURI: any;
  public imageFileName: any;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  Home = {
    WindowsSensors: ""
  };
  loading: any;
  Mono: number = 0;
  Duo: number = 0;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: ""
  };
  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public menu: MenuController,
    private socket: Socket
  ) {
    this.loading = this.loadingCtrl.create({
      spinner: "ios",
      content: "Please wait..."
    });
    this.socket.connect();

    this.menu.enable(true);

    this.socket.on("home_1", msg => {
      this.Home.WindowsSensors = JSON.parse(msg.payload).WindowsSensors;
      this.Mono = JSON.parse(msg.payload).CarbonMonoxide;
      this.Duo = JSON.parse(msg.payload).CarbonDioxide;
      console.log(msg);
    });
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data;
    this.userPostData.user_id = data.success;
    this.userPostData.token = this.userDetails.token;
    /*this.userPostData.lastCreated = ""; */
    this.noRecords = false;
  }
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.imageURI = imageData;
      },
      err => {
        console.log(err);
        this.presentToast(err);
      }
    );
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  gotohome2() {
    this.navCtrl.push(Home2Page);
  }
  gotohome1() {
    this.navCtrl.push(Home1Page, { mono: this.Mono, duo: this.Duo });
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: "imageFile",
      fileName: "logo_supcom1",
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    };

    fileTransfer
      .upload(this.imageURI, "http://ed65cef7.ngrok.io/upload", options)
      .then(
        data => {
          loader.dismiss();
          this.presentToast(data + " Uploaded Successfully");
          this.imageFileName =
            "http://ed65cef7.ngrok.io/images/logo_supcom1.png";
        },
        err => {
          console.log(err);
          loader.dismiss();
          this.presentToast(err);
        }
      );
  }

  backToWelcome() {
    /*     const root = this.app.getRootNav();
    root.popToRoot(); */
  }

  action1() {
    //this.navCtrl.push(Home1Page);
    if (this.Home.WindowsSensors == "1") {
      this.Home.WindowsSensors = "0";
    } else {
      this.Home.WindowsSensors = "1";
    }
    this.socket.connect();
    this.socket.emit("home", this.Home.WindowsSensors);
  }
  logout() {
    //Api Token Logout
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
}
