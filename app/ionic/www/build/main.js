webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_AlloutAPI_AlloutAPI__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map_page__ = __webpack_require__(52);
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
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = /** @class */ (function () {
    function QuestionPage(navCtrl, API, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.API = API;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.l = navParams.get('data');
        this.q = this.l.question;
        //console.log(this.l); 
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad QuestionPage');
        //console.log(this.q.questionID); 
        /*
        this.API.getLocation(this.id).subscribe(result =>{
          this.question = result.question.questionText;
          this.questionPoints = result.question.points;
        });*/
        //console.log(this.q.questionText + " has " + this.q.points + " points on it."); 
    };
    QuestionPage.prototype.showToast = function (m) {
        var toast = this.toastCtrl.create({
            message: m,
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    QuestionPage.prototype.checkAnswer = function (answer) {
        var _this = this;
        this.API.getLocation(this.q.questionID).subscribe(function (result) {
            if (answer == result.question.answer) {
                _this.API.changeQuestionAnswered(_this.q.questionID, true);
                _this.team.totalPoints += _this.q.points;
                //console.log(this.team); 
                _this.API.putTeamPoints(_this.team);
                var m = "That's correct!";
                //console.log(m);
                _this.showToast(m);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map_page__["a" /* MapPage */]);
            }
            else {
                var m = "Wrong answer!";
                //console.log(m); 
                _this.showToast(m);
            }
        });
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\pages\question\question.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Question\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <p class="q">{{q.questionText}}</p>\n\n    <ion-item>  \n\n        <ion-input type="text" value="" placeholder="Answer" #answer></ion-input>\n\n    </ion-item>\n\n    \n\n    <button ion-button (click)="checkAnswer(answer.value)">Check</button>\n\n</ion-content>'/*ion-inline-end:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\pages\question\question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_AlloutAPI_AlloutAPI__["a" /* AlloutProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_page__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__joingame_joingame_page__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_question__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_AlloutAPI_AlloutAPI__ = __webpack_require__(41);
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
    function HomePage(navCtrl, API) {
        this.navCtrl = navCtrl;
        this.API = API;
        this.q = {
            questionID: 0,
            questionText: "",
            questionType: 0,
            isSolved: false,
            points: 0,
            answer: ""
        };
        this.team = {
            teamID: 0,
            gameID: 0,
            teamName: "",
            totalBoobyTraps: 0,
            totalPoints: 0
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.API.getLocation(1).subscribe(function (result) {
            _this.q = result.question;
        });
        this.API.getGame(1).subscribe(function (result) {
            _this.team = result.team[0];
        });
    };
    HomePage.prototype.toMap = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map_page__["a" /* MapPage */]);
    };
    HomePage.prototype.toJoinGame = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__joingame_joingame_page__["a" /* JoinGamePage */]);
    };
    HomePage.prototype.toQuestion = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__question_question__["a" /* QuestionPage */], {
            question: this.q,
            team: this.team
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\pages\home\home.page.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Home\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <button ion-button (click)="toJoinGame()">Join Game</button>\n\n    <button ion-button (click)="toMap()">Map</button>\n\n    <button ion-button (click)="toQuestion()">Question</button>\n\n</ion-content>'/*ion-inline-end:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\pages\home\home.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_AlloutAPI_AlloutAPI__["a" /* AlloutProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.page.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
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
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationTrackerProvider = /** @class */ (function () {
    function LocationTrackerProvider(zone, backgroundGeolocation, geolocation) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.lat = 0;
        this.lng = 0;
    }
    LocationTrackerProvider.prototype.startTracking = function () {
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BacgroundGeolocation: ' + location.latitude + ', ' + location.longitude);
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        this.backgroundGeolocation.start();
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        });
    };
    LocationTrackerProvider.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_AlloutAPI_AlloutAPI__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map_page__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JoinGamePage = /** @class */ (function () {
    function JoinGamePage(api, navCtrl, toastCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.team = {
            teamID: 0,
            gameID: 0,
            teamName: "",
            totalBoobyTraps: 0,
            totalPoints: 0
        };
    }
    JoinGamePage.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAllGames().subscribe(function (result) {
            //console.log(result)
            _this.games = result;
        });
    };
    JoinGamePage.prototype.showToast = function (m) {
        var toast = this.toastCtrl.create({
            message: m,
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    JoinGamePage.prototype.joinGame = function () {
        var selGame;
        var gameID;
        /*
            GameCode: X35H0
            TeamName: SlimmeJongens
        */
        for (var _i = 0, _a = this.games; _i < _a.length; _i++) {
            var game = _a[_i];
            if (game.gameCode.toUpperCase() == this.gameCode) {
                this.game = game;
                this.api.game = game;
                //console.log("Game found...")
            }
            else {
                var m = "That code is invalid!";
                //console.log(m);
                this.showToast(m);
            }
        }
        for (var _b = 0, _c = this.game.team; _b < _c.length; _b++) {
            var team = _c[_b];
            if (team.teamName == this.teamName) {
                this.nameTaken = true;
                var m = "That name is already taken!";
                //console.log(m);
                this.showToast(m);
            }
        }
        if (!this.nameTaken) {
            this.team.gameID = this.game.gameLogicID;
            this.team.teamName = this.teamName;
            this.team.totalBoobyTraps = 2;
            this.team.totalPoints = 0;
            this.api.postTeam(this.team).subscribe(function (result) {
                //console.log(result);
            });
            this.api.teamName = this.teamName;
            var m = "Succesfully joined the game!";
            //console.log(m);
            this.showToast(m);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map_page__["a" /* MapPage */]);
        }
    };
    JoinGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joingame',template:/*ion-inline-start:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\pages\joingame\joingame.page.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Join Game\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button>\n\n                <ion-icon></ion-icon>Join Game</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <form>\n\n        <ion-item> \n\n            <ion-label stacked>Game Code</ion-label>\n\n            <ion-input type="text" name="code" [(ngModel)]="gameCode"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked>Teamname</ion-label>\n\n            <ion-input type="text" name="team" [(ngModel)]="teamName"></ion-input>\n\n        </ion-item>\n\n        <br>\n\n        <button ion-button (click)="joinGame()">\n\n            <ion-icon></ion-icon>Join Game</button>\n\n    </form>\n\n        <p>{{message}}</p>\n\n</ion-content>'/*ion-inline-end:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\pages\joingame\joingame.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_AlloutAPI_AlloutAPI__["a" /* AlloutProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], JoinGamePage);
    return JoinGamePage;
}());

//# sourceMappingURL=joingame.page.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home_page__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map_page__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_joingame_joingame_page__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_question_question__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_location_tracker_location_tracker__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_AlloutAPI_AlloutAPI__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home_page__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map_page__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_joingame_joingame_page__["a" /* JoinGamePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_question_question__["a" /* QuestionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home_page__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map_page__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_joingame_joingame_page__["a" /* JoinGamePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_question_question__["a" /* QuestionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_AlloutAPI_AlloutAPI__["a" /* AlloutProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__ = __webpack_require__(203);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlloutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlloutProvider = /** @class */ (function () {
    function AlloutProvider(_http) {
        this._http = _http;
        this.url = "https://alloutapi20190121022729.azurewebsites.net/api/v1/";
    }
    ;
    AlloutProvider.prototype.postTeam = function (team) {
        //console.log(this.url + "game/team")
        //console.log(JSON.stringify(team))
        return this._http.post(this.url + "game/team", team);
    };
    AlloutProvider.prototype.putLocation = function (location) {
        //console.log(this.url + "location")
        //console.log(JSON.stringify(location))
        return this._http.put(this.url + "location", location);
    };
    AlloutProvider.prototype.getLocation = function (id) {
        return this._http.get(this.url + "location/" + id);
    };
    AlloutProvider.prototype.getAllLocations = function () {
        return this._http.get(this.url + "location/");
    };
    /*
        changeQuestionAnswered(id: number, answered: boolean){
            this._http.put(this.url + "question/", {
                questionID: id,
                isSolved: answered
            }).subscribe((data: any) => {
                console.log(data)
            })
        }*/
    AlloutProvider.prototype.getGame = function (id) {
        return this._http.get(this.url + "game/" + id);
    };
    AlloutProvider.prototype.changeQuestionAnswered = function (id, answered) {
        this._http.put(this.url + "question/", {
            questionID: id,
            isSolved: answered
        }).subscribe(function (data) {
            //console.log(data)
        });
    };
    AlloutProvider.prototype.putTeamPoints = function (team) {
        this._http.put(this.url + "team/", team).subscribe(function (data) {
            //console.log(data); 
        });
    };
    AlloutProvider.prototype.getAllGames = function () {
        return this._http.get(this.url + "game/");
    };
    AlloutProvider.prototype.getLocationPoints = function (id) {
        return this._http.get(this.url + "location/" + id);
    };
    AlloutProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AlloutProvider);
    return AlloutProvider;
}());

//# sourceMappingURL=AlloutAPI.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_AlloutAPI_AlloutAPI__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_question__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
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
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, API, geolocation, locationTrackerProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.API = API;
        this.geolocation = geolocation;
        this.locationTrackerProvider = locationTrackerProvider;
        this.toastCtrl = toastCtrl;
        this.numDeltas = 100;
        this.delay = 10; //milliseconds
        this.i = 0;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MapPage');
        this.APIcopy = this.API;
        this.loadMap();
        this.locationTrackerProvider.startTracking();
    };
    MapPage.prototype.getLocations = function () {
        var _this = this;
        //console.log("get them all!");
        this.API = this.APIcopy;
        this.API.getAllLocations().subscribe(function (result) {
            _this.locations = result;
            //console.log(this.locations);
            try {
                var _loop_1 = function (loc) {
                    var mark = __WEBPACK_IMPORTED_MODULE_6_jquery__("div[title|='" + loc.locationName + "'").remove();
                    mark.remove();
                    if (loc.victorTeamID == -1 || loc.isBoobyTrapped) {
                        var ll_1 = { lat: loc.latitude, lng: loc.longitude };
                        var icon = {
                            size: new google.maps.Size(100, 100),
                            origin: new google.maps.Point(0, 0),
                            scaledSize: new google.maps.Size(30.0, 30.0),
                            anchor: new google.maps.Point(0, 0),
                            url: "../../assets/icon/newMarker.png"
                        };
                        var marker = new google.maps.Marker({
                            position: ll_1,
                            map: _this.map,
                            label: loc.question.points.toString(),
                            title: loc.locationName,
                            icon: icon
                        });
                        //console.log("CalcDistance(): " + this.calcDistance(ll.lat, ll.lng));
                        try {
                            marker.addListener('click', function (event) {
                                var distance = _this.calcDistance(ll_1.lat, ll_1.lng);
                                //console.log("distance binnen clicker: " + distance);
                                if (distance <= 1000) {
                                    //console.log(loc);
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__question_question__["a" /* QuestionPage */], {
                                        data: loc
                                    });
                                }
                                else {
                                    var m = "You are currently " + Math.round(distance) + " meters from this point. You need to be within 100 meters!";
                                    _this.showToast(m);
                                }
                            });
                            console.log("API2: " + _this.API);
                        }
                        catch (err) {
                            console.log("marker.addListener(): " + err);
                        }
                    }
                };
                for (var _i = 0, _a = _this.locations; _i < _a.length; _i++) {
                    var loc = _a[_i];
                    _loop_1(loc);
                }
            }
            catch (err) {
                console.log("getLocations(): " + err);
            }
            setTimeout(function () { return _this.getLocations(); }, 5000);
        });
    };
    /*
    markerClick(lLat: any, lLong: any, loc: any) {
        console.log(this.userPos);
        var distance = this.calcDistance(this.userPos.lat, this.userPos.lng);
        if (distance <= 100) {
            this.navCtrl.push(QuestionPage, {
                data: loc
            });
        }
        else {
            var m = "You are currently " + distance + "meters from this point. You need to be within 100 meters!";
            this.showToast(m);
        }
    }*/
    MapPage.prototype.quitGame = function () {
        //quit game code here!
        //console.log("QUIT GAME");
        this.navCtrl.pop();
    };
    MapPage.prototype.showToast = function (m) {
        var toast = this.toastCtrl.create({
            message: m,
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: 'roadmap',
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.updatePlayerMarker();
        }, function (err) {
            console.log(err);
        });
    };
    MapPage.prototype.calcDistance = function (lat2, lon2) {
        var R = 6371e3; // metres
        var lat1 = this.userPos.lat;
        var φ1 = lat1 * Math.PI / 180;
        var φ2 = lat2 * Math.PI / 180;
        var Δφ = (lat2 - this.userPos.lat) * ((Math.PI) / 180);
        var Δλ = (lon2 - this.userPos.lng) * ((Math.PI) / 180);
        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        //console.log(d);
        return d;
    };
    MapPage.prototype.updatePlayerMarker = function () {
        var _this = this;
        var watchOptions = {
            enableHighAccuracy: true
        };
        this.geolocation.watchPosition(watchOptions).subscribe(function (position) {
            //check distance between new coordinate and this.playerPos
            //if distance greater than 30 meters
            if (!_this.playerPos) {
                _this.userPos = { lat: position.coords.latitude, lng: position.coords.longitude };
                var icon = {
                    size: new google.maps.Size(100, 100),
                    origin: new google.maps.Point(0, 0),
                    scaledSize: new google.maps.Size(30.0, 30.0),
                    anchor: new google.maps.Point(0, 0),
                    url: "../../assets/icon/userMarker.png"
                };
                _this.playerPos = new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.Drop,
                    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    icon: icon
                });
                //console.log("USERPOS: " + this.userPos);
            }
            else {
                _this.transition([position.coords.latitude, position.coords.longitude]);
                //this.playerPos.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            }
            if (_this.API.game) {
                _this.getLocations();
            }
            else {
                var m = "You are not currently in a game, the map will be empty except for you.";
                _this.showToast(m);
                //console.log(m);
            }
        }, function (error) {
            //console.log('Error getting location', error);
        });
    };
    MapPage.prototype.transition = function (result) {
        this.i = 0;
        this.deltaLat = (result[0] - this.userPos.lat) / this.numDeltas;
        this.deltaLng = (result[1] - this.userPos.lng) / this.numDeltas;
        this.moveMarker();
    };
    MapPage.prototype.moveMarker = function () {
        if (this.userPos) {
            //console.log(this.userPos);
            this.userPos.lat += this.deltaLat;
            this.userPos.lng += this.deltaLng;
            var latlng = new google.maps.LatLng(this.userPos.lat, this.userPos.lng);
            if (this.playerPos) {
                this.playerPos.setPosition(latlng);
                if (this.i != this.numDeltas) {
                    this.i++;
                    setTimeout(this.moveMarker, this.delay);
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\pages\map\map.page.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-buttons end>\n\n			<button ion-button (click)="quitGame()">Quit game</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<div #map id="map"></div>\n\n</ion-content>'/*ion-inline-end:"D:\Documenten\School\AP Hogeschool\3EA3\Cloud Applications\app\ionic\src\pages\map\map.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_AlloutAPI_AlloutAPI__["a" /* AlloutProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.page.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map