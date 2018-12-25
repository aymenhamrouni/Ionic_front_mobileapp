import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { Camera } from "@ionic-native/camera";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { Home1Page } from "../pages/home1/home1";
import { Home2Page } from "../pages/home2/home2";
import { Home3Page } from "../pages/home3/home3";
import { RegisterService } from "../pages/register/register.service";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "../providers/auth-service";
import { WelcomePage } from "../pages/welcome/welcome";
import { SplitPane } from "../providers/split-pane";
import { Common } from "../providers/common";
import { SocketIoModule, SocketIoConfig } from "ng-socket-io";
import { StreamingMedia } from "@ionic-native/streaming-media";

const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Home1Page,
    Home2Page,
    Home3Page,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Home1Page,
    Home2Page,
    Home3Page,
    WelcomePage
  ],
  providers: [
    StatusBar,
    AuthService,
    RegisterService,
    SplashScreen,
    SplitPane,
    Common,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    StreamingMedia
  ]
})
export class AppModule {}
