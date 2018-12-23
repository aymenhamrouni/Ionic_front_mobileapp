webpackJsonp([6],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Home2Page = /** @class */ (function () {
    function Home2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Home2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Home2Page');
    };
    Home2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home2',template:/*ion-inline-start:"D:\SmartHomeApp-master\src\pages\home2\home2.html"*/'\n\n<ion-content padding>\n  <h1>This is Caffe</h1>\n  </ion-content>\n  '/*ion-inline-end:"D:\SmartHomeApp-master\src\pages\home2\home2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Home2Page);
    return Home2Page;
}());

//# sourceMappingURL=home2.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home1_home1__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home2_home2__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home3_home3__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home1_home1__["a" /* Home1Page */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__home2_home2__["a" /* Home2Page */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__home3_home3__["a" /* Home3Page */];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\SmartHomeApp-master\src\pages\login\login.html"*/'  <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Music" tabIcon="musical-note" >\n    </ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Cafe" tabIcon="cafe" ></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Gallery" tabIcon="image"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"D:\SmartHomeApp-master\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Home3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Home3Page = /** @class */ (function () {
    function Home3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Home3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Home3Page');
    };
    Home3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home3',template:/*ion-inline-start:"D:\SmartHomeApp-master\src\pages\home3\home3.html"*/'\n\n<ion-content padding>\n \n<h2>This is Gallery Page</h2>\n</ion-content>\n  '/*ion-inline-end:"D:\SmartHomeApp-master\src\pages\home3\home3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Home3Page);
    return Home3Page;
}());

//# sourceMappingURL=home3.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, authService, toastCtrl, loadingCtrl, menu) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.userData = { email: "", password: "" };
        this.menu.enable(false);
        if (localStorage.getItem("userData")) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    }
    WelcomePage.prototype.login = function () {
        var _this = this;
        if (this.userData.email && this.userData.password) {
            this.authService.postData(this.userData, "auth").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                if (_this.resposeData.accessToken) {
                    localStorage.setItem("userData", JSON.stringify(_this.resposeData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.presentToast("You subbmited wrong Email or password");
                }
            }, function (err) {
                {
                    _this.presentToast("Login failed ,Try again later !");
                }
            });
        }
        else {
            this.presentToast("Email and Password cannot be empty ! ");
        }
    };
    WelcomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad Welcome");
    };
    WelcomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-welcome",template:/*ion-inline-start:"D:\SmartHomeApp-master\src\pages\welcome\welcome.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title\n      ><div\n        align="center"\n        style="font-family: Georgia, \'Times New Roman\', Times, serif"\n      >\n        Smart Home Security\n      </div></ion-title\n    >\n  </ion-navbar>\n</ion-header>\n\n<br />\n\n<ion-content padding id="welcome">\n  <div align="center">\n    <img src="assets/imgs/logo-smart-security.png" class="logo" />\n    <h2 style="font-family:fantasy">Keepin\' Your Home Safe</h2>\n  </div>\n  <br />\n\n  <ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked><ion-icon name="mail"></ion-icon> Email</ion-label>\n        <ion-input\n          [(ngModel)]="userData.email"\n          name="email"\n          type="text"\n          #email="ngModel"\n          spellcheck="false"\n          autocapitalize="off"\n          required\n        ></ion-input>\n      </ion-item>\n      <p\n        ion-text\n        [hidden]="email.valid || submitted == false"\n        color="danger"\n        padding-left\n      >\n        Email is required\n      </p>\n      <ion-item>\n        <ion-label stacked\n          ><ion-icon name="lock"></ion-icon> Password</ion-label\n        >\n        <ion-input\n          [(ngModel)]="userData.password"\n          name="password"\n          type="password"\n          #password="ngModel"\n          required\n        ></ion-input>\n      </ion-item>\n      <p\n        ion-text\n        [hidden]="password.valid || submitted == false"\n        color="danger"\n        padding-left\n      >\n        Password is required\n      </p>\n    </ion-list>\n    <ion-item id="login-toggle1">\n      <ion-label> Keep me logged in </ion-label>\n      <ion-toggle color="dark" checked="false"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <!--\n      <button ion-button block class="marginTop" (click)="signup()">Signup</button>\n    -->\n    <button\n      (click)="login()"\n      id="login-button1"\n      ion-button\n      outline\n      color="dark"\n      block\n      style="color:#252A31;"\n    >\n      <ion-icon name="arrow-forward"></ion-icon>\n      Log in\n    </button>\n    <br />\n\n    <ion-buttons end>\n      <button color="dark" (click)="register()" end>Register ?</button>\n    </ion-buttons>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\SmartHomeApp-master\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home1/home1.module": [
		465,
		5
	],
	"../pages/home2/home2.module": [
		466,
		4
	],
	"../pages/home3/home3.module": [
		469,
		3
	],
	"../pages/login/login.module": [
		467,
		2
	],
	"../pages/register/register.module": [
		468,
		1
	],
	"../pages/welcome/welcome.module": [
		470,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 198;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home1_home1__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authService, transfer, camera, loadingCtrl, toastCtrl, menu) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.userPostData = {
            user_id: "",
            token: "",
            feed: "",
            feed_id: "",
            lastCreated: ""
        };
        this.menu.enable(true);
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__("http://localhost:3000");
        this.socket.on("home_1", function (msg) {
            console.log(msg);
        });
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = data;
        this.userPostData.user_id = data.success;
        this.userPostData.token = this.userDetails.token;
        /*this.userPostData.lastCreated = ""; */
        this.noRecords = false;
    }
    HomePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    HomePage.prototype.gotohome1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home1_home1__["a" /* Home1Page */]);
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: "imageFile",
            fileName: "logo_supcom1",
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer
            .upload(this.imageURI, "http://ed65cef7.ngrok.io/upload", options)
            .then(function (data) {
            loader.dismiss();
            _this.presentToast(data + " Uploaded Successfully");
            _this.imageFileName =
                "http://ed65cef7.ngrok.io/images/logo_supcom1.png";
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    HomePage.prototype.backToWelcome = function () {
        /*     const root = this.app.getRootNav();
        root.popToRoot(); */
    };
    HomePage.prototype.action1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home1_home1__["a" /* Home1Page */]);
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        //Api Token Logout
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"D:\SmartHomeApp-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <!-- If you don\'t need back here -->\n\n    <ion-title> Smart Home Security</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="action1()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n\n      <button ion-button icon-only (click)="action2()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--\n    <h2>Welcome to {{userDetails.id}}</h2>\n    <ion-item id="udpateBox">\n      <textarea #updatebox [(ngModel)]="userPostData.feed" autofocus></textarea>\n      <ion-row>\n        <button ion-button color="energy" (click)="feedUpdate()">Update</button>\n      </ion-row>\n    </ion-item>\n\n    <ion-card *ngFor="let item of dataSet; let msgIndex = index">\n      <ion-item>\n        <ion-icon name="trash" item-right (click)="feedDelete(item.feed_id, msgIndex)"></ion-icon>\n        <ion-card-content>\n          <p [innerHTML]="item.feed | linky"></p>\n          <span>{{this.converTime(item.created) | amTimeAgo}}</span>\n        </ion-card-content>\n      </ion-item>\n    </ion-card>\n\n    <ion-card *ngIf="noRecords">\n      <ion-item>\n        No Records\n      </ion-item>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" *ngIf="!noRecords">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  -->\n\n<!--   <ion-item>\n    <p>{{ imageURI }}</p>\n    <button ion-button color="secondary" (click)="recieve()">Get Image</button>\n  </ion-item>\n  <ion-item>\n    <h4>Image Preview</h4>\n    <img\n      src="{{imageFileName}}"\n      *ngIf="imageFileName"\n      alt="Ionic File"\n      width="300"\n    />\n  </ion-item>\n  <ion-item>\n    <button ion-button (click)="uploadFile()">Upload</button>\n  </ion-item>\n</ion-content> -->\n\n<ion-content class="card-background-page">\n\n    <ion-card>\n      <img  (click)="gotohome1()" src="http://www.mavideosurveillance.com/shop/img/cms/updatedallcameras.png"/>\n      <div class="card-title">Surveillance Cameras</div>\n    </ion-card> \n  \n    <ion-card>\n      <img src="img/card-amsterdam.png"/>\n      <div class="card-title">Amsterdam</div>\n      <div class="card-subtitle">64 Listings</div>\n    </ion-card>\n  \n    <ion-card>\n      <img src="img/card-sf.png"/>\n      <div class="card-title">San Francisco</div>\n      <div class="card-subtitle">72 Listings</div>\n    </ion-card>\n  \n    <ion-card>\n      <img src="img/card-madison.png"/>\n      <div class="card-title">Madison</div>\n      <div class="card-subtitle">28 Listings</div>\n    </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"D:\SmartHomeApp-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */]) === "function" && _g || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SplitPane provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SplitPane = /** @class */ (function () {
    function SplitPane(platform) {
        this.platform = platform;
        console.log('Hello SplitPane Provider');
        this.splitPaneState = false;
    }
    SplitPane.prototype.getSplitPane = function () {
        if (localStorage.getItem('userData')) {
            if (this.platform.width() > 850) {
                this.splitPaneState = true;
            }
            else {
                this.splitPaneState = false;
            }
        }
        else {
            this.splitPaneState = false;
        }
        return this.splitPaneState;
    };
    SplitPane = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], SplitPane);
    return SplitPane;
}());

//# sourceMappingURL=split-pane.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(283);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home1_home1__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home2_home2__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home3_home3__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_split_pane__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_common__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_socket_io__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_streaming_media__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var config = { url: "http://localhost:3000", options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home1_home1__["a" /* Home1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home3_home3__["a" /* Home3Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home1/home1.module#Home1PageModule', name: 'Home1Page', segment: 'home1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home2/home2.module#Home2PageModule', name: 'Home2Page', segment: 'home2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home3/home3.module#Home3PageModule', name: 'Home3Page', segment: 'home3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#RegisterPageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng_socket_io__["SocketIoModule"].forRoot(config)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home1_home1__["a" /* Home1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home3_home3__["a" /* Home3Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__providers_split_pane__["a" /* SplitPane */],
                __WEBPACK_IMPORTED_MODULE_21__providers_common__["a" /* Common */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_streaming_media__["a" /* StreamingMedia */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, loadingCtrl, statusBar, splashScreen, app, splitPane, menu, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.splitPane = splitPane;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Loggin Out..."
        });
        loader.present();
        //Api Token Logout 
        localStorage.clear();
        this.menu.enable(false);
        setTimeout(function () {
            loader.dismiss();
            var root = _this.app.getRootNavs();
            root[0].setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */]);
        }, 1000);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\SmartHomeApp-master\src\app\app.html"*/'<!--<ion-nav [root]="rootPage"></ion-nav>-->\n\n<ion-split-pane [when]="splitPane.getSplitPane()">\n    <!--  our side menu  -->\n    <ion-menu [content]="content">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n     \n  \n       <ion-content>\n      <ion-list>\n  \n          <button ion-button color="primary" (click)="logout()">Logout</button>\n      </ion-list>\n       </ion-content>\n  \n    </ion-menu>\n    \n    <ion-nav  [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n    <!-- the main content -->\n\n\n  </ion-split-pane>\n  \n'/*ion-inline-end:"D:\SmartHomeApp-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }; */
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.addUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        console.log(user);
        return this.http
            .post("https://localhost:3433/users/signup", user, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) { return response.json(); }))
            .subscribe(function (data) {
            console.log(data);
        });
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = /** @class */ (function () {
    function Common(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        console.log('Hello Common Provider');
    }
    Common.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Please wait ..." });
        this.loader.present();
    };
    Common.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var apiUrl = "http://6282e97b.ngrok.io/";
//let apiUrl = 'http://ef74a3c3.ngrok.io/users/';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        console.log("Hello AuthService Provider");
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append("Content-Type", "application/json");
            _this.http
                .post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                if (err.statusText == "Unauthorized") {
                    resolve(err);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    AuthService.prototype.getData = function (token, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "bearer " + token);
            _this.http.get(apiUrl + type, { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_highcharts_more__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts_highcharts_more__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



__WEBPACK_IMPORTED_MODULE_2_highcharts_highcharts_more___default()(__WEBPACK_IMPORTED_MODULE_1_highcharts___default.a);
/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Home1Page = /** @class */ (function () {
    function Home1Page() {
    }
    Home1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home1",template:/*ion-inline-start:"D:\SmartHomeApp-master\src\pages\home1\home1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Security Camera feed</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content class="card-background-page">\n\n  \n\n    <ion-card> \n\n            <video style="width: 100%; height: 100%" loop autoplay>\n\n                    <source src="https://r1---sn-4g5edns7.googlevideo.com/videoplayback?fvip=1&lmt=1475073124555796&clen=1676168&source=youtube&pl=17&ratebypass=yes&itag=18&mime=video%2Fmp4&expire=1545593888&requiressl=yes&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,pl,ratebypass,requiressl,source&dur=40.425&ei=wI8fXMq5DJjYxwKb87HYBQ&c=MWEB&ip=102.158.76.224&key=cms1&signature=3E07AC5406E45664CFCD4372F8FFEFC6CF15CE13.3AC80F86832C936800E5A966A9FCFE09E5EDD6E0&ipbits=0&id=o-AJznjDvdl6G8qf4aiya2Hk3m6hYbmx-cVFHlRK5Jkn69&gir=yes&cpn=VAhBxjqCxekY8sGT&cm2rm=sn-uv2oxuuo-u0oe7e,sn-hgnle7e&fexp=23763603&req_id=ec3da7b90bcd36e2&redirect_counter=2&cms_redirect=yes&mm=34&mn=sn-4g5edns7&ms=ltu&mt=1545572228&mv=m" type="video/mp4">\n\n                    Your browser does not support playing this Video\n\n                </video>\n\n\n\n                <div class="card-title">Door Camera</div>\n\n      <div class="card-subtitle">Status : GREEN</div>\n\n    </ion-card>\n\n  \n\n    <ion-card> \n\n            <video style="width: 100%; height: 100%" loop autoplay>\n\n                    <source src="https://r4---sn-uv2oxuuo-u0oe.googlevideo.com/videoplayback?dur=25.379&source=youtube&ratebypass=yes&lmt=1442524888105529&key=yt6&expire=1545597990&initcwndbps=257500&clen=1055159&pl=17&mime=video%2Fmp4&mv=m&mt=1545576284&itag=18&ms=au%2Crdu&ei=xp8fXNjBDouX1wa6tpSYAg&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&mn=sn-uv2oxuuo-u0oe%2Csn-hgn7yn7e&mm=31%2C29&ipbits=0&c=MWEB&id=o-AMZvoiI7hExF641Py27ZIqog2FbvdCgYatGuWrGD3CZR&fvip=5&requiressl=yes&ip=102.158.76.224&signature=C108C47C4F27A1ACA409609B929C22F8A87EB95B.1812B361AD6F27CF4E4D5A0D1394460FAF3BAF93&gir=yes&cpn=BHHzMksGP8_7esjS" type="video/mp4">\n\n                    Your browser does not support playing this Video\n\n                </video>\n\n\n\n                <div class="card-title">Living Room Camera</div>\n\n      <div class="card-subtitle">Status : GREEN</div>\n\n    </ion-card>\n\n  \n\n    <ion-card> \n\n            <video style="width: 100%; height: 100%" loop autoplay>\n\n                    <source src="https://r2---sn-uv2oxuuo-u0os.googlevideo.com/videoplayback?expire=1545598861&keepalive=yes&mv=m&mt=1545577132&ms=au%2Crdu&ei=LaMfXIjXMJ-OmLAPscWq4AY&mn=sn-uv2oxuuo-u0os%2Csn-hgn7rnel&mm=31%2C29&ipbits=0&requiressl=yes&mime=video%2Fmp4&c=WEB&signature=0ADA4570D45F9498DBB2F60D8E683174CA95D24B.C6C874A400C6D8904FF817A1E29AF77AB95A923B&pl=17&source=youtube&gir=yes&initcwndbps=267500&aitags=133%2C134%2C135%2C136%2C160&sparams=aitags%2Cclen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Ckeepalive%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cotfp%2Cpl%2Crequiressl%2Csource%2Cexpire&fvip=2&clen=1223982&itag=136&id=o-ALjsKfmBZoM7u3-x2kmL0jMbGC05kkk-2mM7lU7QW2Fv&otfp=1&lmt=1520963591414510&dur=7.800&ip=102.158.76.224&key=yt6&alr=yes&cpn=hobmIyEIAcQUjpsu&cver=2.20181220&rn=1" type="video/mp4">\n\n                    Your browser does not support playing this Video\n\n                </video>\n\n\n\n                <div class="card-title">Kitche Camera</div>\n\n      <div class="card-subtitle">Status : GREEN</div>\n\n    </ion-card>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\SmartHomeApp-master\src\pages\home1\home1.html"*/
        })
    ], Home1Page);
    return Home1Page;
}());

//# sourceMappingURL=home1.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = {
            userName: "",
            password: "",
            email: "",
            firstName: "",
            lastName: ""
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad RegisterPage");
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.userData.userName &&
            this.userData.password &&
            this.userData.email &&
            this.userData.firstName &&
            this.userData.lastName) {
            this.authService.postData(this.userData, "users").then(function (result) {
                _this.resposeData = result;
                console.log(result);
                if (_this.resposeData.id) {
                    console.log(_this.resposeData);
                    localStorage.setItem("userData", JSON.stringify(_this.resposeData));
                    _this.presentToast("Successfully registered");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }
                else {
                    _this.presentToast(_this.resposeData);
                }
            }, function (err) {
                {
                    _this.presentToast("Register failed ,Try again later !");
                }
            });
        }
        else {
            this.presentToast("Please Write Valid Information");
        }
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-register",template:/*ion-inline-start:"D:\SmartHomeApp-master\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="action1()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n\n      <button ion-button icon-only (click)="action2()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="userData.userName"></ion-input>\n    </ion-item>\n\n    <ion-item class="item-inner">\n      <ion-label stacked>Firstname</ion-label>\n      <ion-input type="text" [(ngModel)]="userData.firstName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Lastname</ion-label>\n      <ion-input type="text" [(ngModel)]="userData.lastName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="dark" block (click)="register()">Register</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\SmartHomeApp-master\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.js.map