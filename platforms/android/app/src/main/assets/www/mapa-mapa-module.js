(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapa-mapa-module"],{

/***/ "./src/app/mapa/mapa.module.ts":
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.module.ts ***!
  \*************************************/
/*! exports provided: MapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapa.page */ "./src/app/mapa/mapa.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]
    }
];
var MapaPageModule = /** @class */ (function () {
    function MapaPageModule() {
    }
    MapaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            ],
            declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
        })
    ], MapaPageModule);
    return MapaPageModule;
}());



/***/ }),

/***/ "./src/app/mapa/mapa.page.html":
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-grid no-padding>\r\n      <ion-row class=\"title\">\r\n          <ion-col class=\"left\">\r\n            <ion-button fill=\"clear\" color=\"white\" block (click)=\"presentPopover($event)\">\r\n              <fa-icon [icon]=\"faInfoCircle\" size=\"2x\"></fa-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col>\r\n            IEC029 2019.1 RESTful API\r\n          </ion-col>\r\n          <ion-col class=\"right\">\r\n            <ion-button fill=\"clear\" color=\"white\" block (click)=\"goToList()\">\r\n                <fa-icon [icon]=\"faBars\" size=\"2x\"></fa-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>  \r\n  </ion-grid>\r\n</ion-header>\r\n  \r\n<ion-content>\r\n  <div id=\"map\"></div>\r\n</ion-content>\r\n  "

/***/ }),

/***/ "./src/app/mapa/mapa.page.scss":
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Montserrat);\nion-content {\n  font-family: 'Montserrat', sans-serif; }\nion-button {\n  text-decoration: none;\n  color: #FFF; }\n#map {\n  width: 100%;\n  height: 100%; }\nbutton {\n  width: 100%;\n  background-color: white; }\nul > li {\n  text-align: left;\n  list-style-type: none; }\n.points {\n  float: left;\n  width: 80%;\n  color: #888;\n  font-family: 'Montserrat', sans-serif; }\n.points-title {\n  font-weight: 900;\n  color: #000; }\n.title {\n  padding-top: 12px;\n  margin: 0 auto;\n  height: 80px;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 10pt;\n  font-weight: bold;\n  color: #FFF;\n  background-color: #019879; }\n.left {\n  padding-left: 20px;\n  text-align: left;\n  height: 40px; }\n.right {\n  padding-right: 20px;\n  text-align: right; }\n.description {\n  background-color: #DDD;\n  height: 50px;\n  padding-top: 15px;\n  padding-left: 30px;\n  margin: 0 auto;\n  text-align: left;\n  font-weight: bold;\n  font-size: 16pt; }\n.data-left {\n  padding-top: 20px;\n  padding-left: 40px;\n  text-align: left;\n  height: 40px; }\n.data {\n  padding-top: 20px;\n  text-align: left;\n  height: 40px; }\n.data-all {\n  padding-top: 12px;\n  margin: 0 auto;\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  color: #019879;\n  background-color: #FFF; }\n.no-padding {\n  padding: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwYS9DOlxcVXNlcnNcXFVzZXJcXGpvYnNcXHNkL3NyY1xcYXBwXFxtYXBhXFxtYXBhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBWTtBQUdaO0VBQ0kscUNBQXFDLEVBQUE7QUFHekM7RUFDSSxxQkFBcUI7RUFDckIsV0FBVyxFQUFBO0FBR2Y7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2hCO0VBQ0ksV0FBVztFQUNYLHVCQUF1QixFQUFBO0FBRzNCO0VBRUksZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gscUNBQXFDLEVBQUE7QUFHekM7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBR2Y7RUFJSSxpQkFBaUI7RUFDakIsY0FBYztFQUVkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksa0JBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFHaEI7RUFDSSxtQkFBa0I7RUFBRSxpQkFBaUIsRUFBQTtBQUd6QztFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFHaEI7RUFDSSxpQkFBaUI7RUFFakIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBQUdoQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNCQUFzQixFQUFBO0FBRzFCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXBhL21hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQpO1xyXG4kZm9udC1mYW1pbHktYmFzZTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4jbWFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG51bCA+IGxpIHtcclxuICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnBvaW50cyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjogIzg4ODsgICAgXHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucG9pbnRzLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogIzAwMDsgICAgXHJcbn0gXHJcblxyXG4udGl0bGUge1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDA7XHJcbiAgICAvLyBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE5ODc5O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7IHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbn1cclxuXHJcbi5kYXRhLWxlZnQgIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZGF0YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDo0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmRhdGEtYWxsIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDE5ODc5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mapa/mapa.page.ts":
/*!***********************************!*\
  !*** ./src/app/mapa/mapa.page.ts ***!
  \***********************************/
/*! exports provided: MapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPage", function() { return MapaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ws_pontos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ws-pontos.service */ "./src/app/ws-pontos.service.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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










var MapaPage = /** @class */ (function () {
    function MapaPage(geolocation, loadingCtrl, wspontos, navCtrl, popoverCtrl, alertCtrl, storage, platform, router, appCtrl, toastController) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.wspontos = wspontos;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.platform = platform;
        this.router = router;
        this.appCtrl = appCtrl;
        this.toastController = toastController;
        this.paises = [];
        this.faCompass = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCompass"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInfoCircle"];
        this.faChevronCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronCircleLeft"];
        this.faMapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarker"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPhone"];
        this.faRecycle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRecycle"];
        this.faDesktop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDesktop"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"];
        this.mapRef = null;
        this.myMark = null;
        this.navCtrl = navCtrl;
    }
    MapaPage.prototype.ngAfterViewInit = function () {
        var _this_1 = this;
        this.getLocalData().then(function (paises) {
            console.log('local paises: ', paises);
            /** VERIFICANDO SE HÁ DADOS PARA EXIBIÇÃO OFFLINE */
            if (paises == null) {
                _this_1.wspontos.getDataFromApi()
                    .subscribe(function (data) {
                    paises = data;
                    _this_1.setLocalData(JSON.stringify(paises));
                    console.log('paises: ' + JSON.stringify(paises));
                });
            }
            else {
                _this_1.paises = JSON.parse(paises);
            }
            /***/
        }).catch(function (err) {
            console.log(err);
        });
    };
    MapaPage.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.platform.ready().then(function () {
            _this_1.loadMap();
        });
    };
    MapaPage.prototype.loadMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, watchOptions, watchID;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        watchOptions = {
                            timeout: 30000,
                            maxAge: 0,
                            enableHighAccuracy: true
                        };
                        watchID = navigator.geolocation.watchPosition(function (position) {
                            if (position.coords != undefined) {
                                var geoposition = position;
                                console.log('Latitude: ' + geoposition.coords.latitude + ' Longitude: ' + geoposition.coords.longitude);
                            }
                            _this_1.setLatLng(geoposition.coords.latitude, geoposition.coords.longitude);
                            var mapEle = document.getElementById('map');
                            _this_1.mapRef = new google.maps.Map(mapEle, {
                                center: { lat: geoposition.coords.latitude, lng: geoposition.coords.longitude },
                                zoom: 3
                            });
                            google.maps.event.addListenerOnce(_this_1.mapRef, 'idle', function () {
                                if (_this_1.paises.length) {
                                    _this_1.paises.forEach(function (pais) {
                                        console.log("pais: " + JSON.stringify(pais));
                                        _this_1.addInfoWindow(_this_1.mapRef, _this_1.addMaker(pais.latlng[0], pais.latlng[1], null, null, false), '<div>' +
                                            '<h1 id="pais_name" value="' + pais.name + '">' + pais.name + '</h1>' +
                                            '<div id="pais_content">' +
                                            pais.capital + '</br>' +
                                            // this.geodesicDistance(pais.latlng[0],pais.latlng[1])+' m</br>'+
                                            '</div>' +
                                            '</div>');
                                    });
                                }
                                _this_1.myMark = _this_1.addMyMaker(_this_1.lat, _this_1.lng, null, "assets/icon/mylocation.png");
                            });
                            navigator.geolocation.clearWatch(watchID);
                        }, null, { enableHighAccuracy: true });
                        // navigator.geolocation.clearWatch(watchID);
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapaPage.prototype.addInfoWindow = function (map, marker, contentString) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: contentString
        });
        marker.addListener('click', function () {
            infoWindow.open(map, marker);
            google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
                document.getElementById('pais_name').addEventListener('click', function () {
                    //_this.presentToast(document.getElementById('tap').getAttribute('value'));
                    _this.navCtrl.navigateForward('/pais/' + document.getElementById('pais_name').getAttribute('value'));
                }, false);
            });
        });
    };
    MapaPage.prototype.addMaker = function (lat, lng, lbl, ico, drag) {
        //https://developers.google.com/maps/documentation/javascript/markers
        //https://developers.google.com/maps/documentation/javascript/distancematrix
        //https://developers.google.com/maps/documentation/javascript/examples/marker-animations
        //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.mapRef,
            label: lbl,
            icon: ico,
            animation: google.maps.Animation.DROP,
            draggable: drag
        });
        return marker;
    };
    MapaPage.prototype.addMyMaker = function (lat, lng, lbl, ico) {
        //https://developers.google.com/maps/documentation/javascript/markers
        //https://developers.google.com/maps/documentation/javascript/distancematrix
        //https://developers.google.com/maps/documentation/javascript/examples/marker-animations
        //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.mapRef,
            label: lbl,
            icon: ico,
            draggable: true
        });
        return marker;
    };
    MapaPage.prototype.geodesicDistance = function (lat, lng) {
        var R = 6371000; // metres
        var φ1 = this.toRad(lat);
        // var φ2 = this.toRad(+this.myLatLng.lat);
        var φ2 = this.toRad(+this.lat);
        // var Δφ = Math.sqrt(Math.pow(this.toRad(+this.myLatLng.lat)-this.toRad(lat),2));
        // var Δλ = Math.sqrt(Math.pow(this.toRad(+this.myLatLng.lng)-this.toRad(lng),2));
        var Δφ = Math.sqrt(Math.pow(this.toRad(+this.lat) - this.toRad(lat), 2));
        var Δλ = Math.sqrt(Math.pow(this.toRad(+this.lng) - this.toRad(lng), 2));
        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = (R * c).toFixed(1);
        return new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(+d);
    };
    MapaPage.prototype.toRad = function (value) {
        return value * Math.PI / 180;
    };
    MapaPage.prototype.goToList = function () {
        this.navCtrl.navigateForward('/paises');
    };
    MapaPage.prototype.goToAbout = function () {
        this.navCtrl.navigateForward('/about');
    };
    MapaPage.prototype.presentPopover = function (ev) {
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
    /** stringified JSON */
    MapaPage.prototype.getLocalData = function () {
        return this.storage.get('paises');
    };
    MapaPage.prototype.setLocalData = function (paises) {
        return this.storage.set('paises', paises);
    };
    /***/
    MapaPage.prototype.setLatLng = function (lat, lng) {
        this.lat = lat;
        this.lng = lng;
    };
    MapaPage.prototype.presentToast = function (text) {
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
    MapaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./mapa.page.html */ "./src/app/mapa/mapa.page.html"),
            styles: [__webpack_require__(/*! ./mapa.page.scss */ "./src/app/mapa/mapa.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ws_pontos_service__WEBPACK_IMPORTED_MODULE_4__["WsPontosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], MapaPage);
    return MapaPage;
}());



/***/ })

}]);
//# sourceMappingURL=mapa-mapa-module.js.map