(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paises-paises-module"],{

/***/ "./src/app/paises/paises.module.ts":
/*!*****************************************!*\
  !*** ./src/app/paises/paises.module.ts ***!
  \*****************************************/
/*! exports provided: PaisesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesPageModule", function() { return PaisesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paises_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paises.page */ "./src/app/paises/paises.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _paises_page__WEBPACK_IMPORTED_MODULE_5__["PaisesPage"]
    }
];
var PaisesPageModule = /** @class */ (function () {
    function PaisesPageModule() {
    }
    PaisesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            declarations: [_paises_page__WEBPACK_IMPORTED_MODULE_5__["PaisesPage"]]
        })
    ], PaisesPageModule);
    return PaisesPageModule;
}());



/***/ }),

/***/ "./src/app/paises/paises.page.html":
/*!*****************************************!*\
  !*** ./src/app/paises/paises.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-grid no-padding>\n    <ion-row class=\"title\">\n        <ion-col class=\"left\">\n          <ion-button fill=\"clear\" color=\"white\" block (click)=\"presentPopover($event)\">\n            <fa-icon [icon]=\"faInfoCircle\" size=\"2x\"></fa-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n            IEC029 2019.1 RESTful API\n        </ion-col>\n        <ion-col class=\"right\">\n          <ion-button fill=\"clear\" color=\"white\" block (click)=\"goToMapa()\">\n            <fa-icon [icon]=\"faCompass\" size=\"2x\"></fa-icon>\n          </ion-button>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n              <ion-item *ngFor=\"let country of paises; index as i\">\n                <button class=\"button button-full button-light\" ion-button (click)=\"gotoPais(country.name)\">\n                  <ion-col>\n                    <div class=\"icon\">\n                      <ion-thumbnail >\n                          <img src=\"https://countryflags.io/{{country.alpha2Code}}/shiny/64.png\">\n                          <!-- <img src=\"assets/flags/{{country.alpha2Code}}.PNG\"> -->\n                        </ion-thumbnail>\n                      </div>\n                  </ion-col>\n                  <ion-col>\n                    <div class=\"paises\">\n                      <ul>        \n                        <li class=\"paises-name\">{{country.name}}</li>\n                        <li class=\"paises-capital\">{{country.capital}}</li>\n                        <!-- <li class=\"pontoId\">{{pt.id}}</li> -->\n                      </ul>\n                    </div>\n                  </ion-col>\n                  <ion-col>\n                    <!-- <div class=\"distance\">\n                      {{distances[i]}}m\n                    </div> -->\n                </ion-col>\n                </button>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/paises/paises.page.scss":
/*!*****************************************!*\
  !*** ./src/app/paises/paises.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Montserrat);\nion-button {\n  text-decoration: none;\n  color: #FFF; }\nion-content {\n  font-family: 'Montserrat', sans-serif; }\nimg {\n  -o-object-fit: resize;\n     object-fit: resize;\n  height: 100%;\n  width: auto !important;\n  border: 0;\n  padding: 0; }\nbutton {\n  width: 100%;\n  background-color: white; }\nul > li {\n  text-align: left;\n  list-style-type: none; }\n.paises {\n  float: left;\n  width: 70%;\n  color: #888;\n  font-family: 'Montserrat', sans-serif; }\n.icon {\n  position: relative;\n  float: left;\n  color: #888; }\n.paises-name {\n  font-weight: 900;\n  color: #000; }\n.title {\n  padding-top: 15px;\n  margin: 0 auto;\n  width: 100%;\n  height: 80px;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 10pt;\n  font-weight: bold;\n  color: #FFF;\n  background-color: #019879; }\n.left {\n  padding-left: 20px;\n  text-align: left; }\n.right {\n  padding-right: 20px;\n  text-align: right; }\n.no-padding {\n  padding: 0px !important; }\n.distance {\n  color: #019879; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpc2VzL0M6XFxVc2Vyc1xcVXNlclxcam9ic1xcc2Qvc3JjXFxhcHBcXHBhaXNlc1xccGFpc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBWTtBQUdaO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTtBQUdmO0VBQ0kscUNBQXFDLEVBQUE7QUFPekM7RUFDSSxxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVUsRUFBQTtBQUlYO0VBQ0ksV0FBVztFQUNYLHVCQUF1QixFQUFBO0FBRzNCO0VBRUksZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gscUNBQXFDLEVBQUE7QUFHekM7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVcsRUFBQTtBQUdmO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdmO0VBSUksaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxrQkFBaUI7RUFBRSxnQkFBZ0IsRUFBQTtBQUd2QztFQUNJLG1CQUFrQjtFQUFFLGlCQUFpQixFQUFBO0FBR3pDO0VBQ0ksdUJBQXVCLEVBQUE7QUFHM0I7RUFDSSxjQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWlzZXMvcGFpc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0KTtcclxuJGZvbnQtZmFtaWx5LWJhc2U6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gaW1nIHtcclxuLy8gICAgIG1heC13aWR0aDogNTAlO1xyXG4vLyAgICAgbWF4LWhlaWdodDogNTAlO1xyXG4vLyB9XHJcbmltZyB7XHJcbiAgICBvYmplY3QtZml0OiByZXNpemU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbi8vXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudWwgPiBsaSB7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wYWlzZXMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sb3I6ICM4ODg7ICAgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogIzg4ODsgICAgXHJcbn1cclxuXHJcbi5wYWlzZXMtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICMwMDA7ICAgIFxyXG59IFxyXG5cclxuLnRpdGxlIHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gdG9wOiAwO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxOTg3OTtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7IHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7IHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubm8tcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3RhbmNlIHtcclxuICAgIGNvbG9yOiAgIzAxOTg3OTtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paises/paises.page.ts":
/*!***************************************!*\
  !*** ./src/app/paises/paises.page.ts ***!
  \***************************************/
/*! exports provided: PaisesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesPage", function() { return PaisesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ws_pontos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ws-pontos.service */ "./src/app/ws-pontos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PaisesPage = /** @class */ (function () {
    function PaisesPage(wspontos, navCtrl, geolocation, popoverCtrl, alertCtrl, toastController, platform, loadingCtrl, storage) {
        this.wspontos = wspontos;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.paises = [];
        this.distances = [];
        this.faCompass = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCompass"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInfoCircle"];
    }
    PaisesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.getLocalData().then(function (paises) {
                            console.log('paises: ', paises);
                            /** VERIFICANDO SE HÁ DADOS PARA EXIBIÇÃO OFFLINE */
                            if (paises == null) {
                                _this.wspontos.getDataFromApi()
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                                    loading.dismiss();
                                }))
                                    .subscribe(function (data) {
                                    paises = data;
                                    _this.setLocalData(JSON.stringify(paises));
                                });
                            }
                            else {
                                _this.paises = JSON.parse(paises);
                                loading.dismiss();
                            }
                            /***/
                        }).catch(function (err) {
                            console.log(err);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PaisesPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaisesPage.prototype.gotoPais = function (pais) {
        this.navCtrl.navigateForward('/pais/' + pais);
    };
    PaisesPage.prototype.geodesicDistance = function (lat1, lng1, lat2, lng2) {
        // console.log("lat lng: "+lat1+" "+lng1);
        var R = 6371000; // metres
        var φ1 = this.toRad(lat1);
        var φ2 = this.toRad(+lat2);
        var Δφ = Math.sqrt(Math.pow(this.toRad(+lat2) - this.toRad(lat1), 2));
        var Δλ = Math.sqrt(Math.pow(this.toRad(+lng2) - this.toRad(lng1), 2));
        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = (R * c).toFixed(1);
        return d;
    };
    PaisesPage.prototype.toRad = function (value) {
        return value * Math.PI / 180;
    };
    PaisesPage.prototype.goToMapa = function () {
        this.navCtrl.navigateForward('/mapa');
    };
    PaisesPage.prototype.goToAbout = function () {
        this.navCtrl.navigateForward('/about');
    };
    PaisesPage.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    // async loadPosition() {
    //   this.myLatLng = await this.getLocation();
    // }
    PaisesPage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                            event: ev,
                            translucent: true,
                            cssClass: 'custom-popover'
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaisesPage.prototype.alertNoEntries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Aten\u00E7\u00E3o",
                            message: "<p class='alert'><b>N\u00E3o h\u00E1 pontos para exibir!</p>",
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'alert-cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert2 = _a.sent();
                        return [4 /*yield*/, alert2.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaisesPage.prototype.getLocalData = function () {
        return this.storage.get('paises');
    };
    PaisesPage.prototype.setLocalData = function (paises) {
        return this.storage.set('paises', paises);
    };
    PaisesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paises',
            template: __webpack_require__(/*! ./paises.page.html */ "./src/app/paises/paises.page.html"),
            styles: [__webpack_require__(/*! ./paises.page.scss */ "./src/app/paises/paises.page.scss")]
        }),
        __metadata("design:paramtypes", [_ws_pontos_service__WEBPACK_IMPORTED_MODULE_1__["WsPontosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], PaisesPage);
    return PaisesPage;
}());



/***/ })

}]);
//# sourceMappingURL=paises-paises-module.js.map