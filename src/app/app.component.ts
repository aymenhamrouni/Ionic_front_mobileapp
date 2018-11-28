import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { SplitPane } from '../providers/split-pane';
import { App, MenuController } from 'ionic-angular';
import { IonicPage, NavController,LoadingController, ToastController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, public loadingCtrl: LoadingController,statusBar: StatusBar, splashScreen: SplashScreen,public app: App, public splitPane: SplitPane, public menu: MenuController,private toastCtrl:ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  
 
   logout(){
    let loader = this.loadingCtrl.create({
      content: "Loggin Out..."
    });
    loader.present();
     
     //Api Token Logout 
    
     localStorage.clear();
     this.menu.enable(false);
     setTimeout(()=> {
      loader.dismiss();
          const root = this.app.getRootNavs();
       root[0].setRoot(WelcomePage);
     }, 1000);
     
     
   }

 
}

