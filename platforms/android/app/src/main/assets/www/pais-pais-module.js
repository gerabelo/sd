(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pais-pais-module"],{

/***/ "./src/app/pais/pais.module.ts":
/*!*************************************!*\
  !*** ./src/app/pais/pais.module.ts ***!
  \*************************************/
/*! exports provided: PaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageModule", function() { return PaisPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pais.page */ "./src/app/pais/pais.page.ts");
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
        component: _pais_page__WEBPACK_IMPORTED_MODULE_5__["PaisPage"]
    }
];
var PaisPageModule = /** @class */ (function () {
    function PaisPageModule() {
    }
    PaisPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            declarations: [_pais_page__WEBPACK_IMPORTED_MODULE_5__["PaisPage"]]
        })
    ], PaisPageModule);
    return PaisPageModule;
}());



/***/ }),

/***/ "./src/app/pais/pais.page.html":
/*!*************************************!*\
  !*** ./src/app/pais/pais.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-grid no-padding>\r\n        <ion-row class=\"title\">\r\n            <ion-col class=\"left\">\r\n              <ion-button fill=\"clear\" color=\"white\" block (click)=\"goBack()\">\r\n                <fa-icon [icon]=\"faChevronCircleLeft\" size=\"2x\"></fa-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col >\r\n                IEC029 2019.1 RESTful API\r\n            </ion-col>\r\n            <ion-col class=\"right\">\r\n              <ion-button fill=\"clear\" color=\"white\" block (click)=\"goToMapa()\">\r\n                <fa-icon [icon]=\"faCompass\" size=\"2x\"></fa-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid *ngIf=\"pais\">\r\n    <ion-row no-padding>\r\n      <div class=\"text\">\r\n        <ion-col>\r\n          <div class=\"pais\">\r\n              <ul>\r\n                <li style=\"font-size:16pt;\">{{pais.name}}</li>\r\n                <li class=\"pais-data\" style=\"font-size:13pt;\">Capital: {{pais.capital}}</li>\r\n                <li>&nbsp;</li>\r\n                <li class=\"pais-data\">População: {{pais.population}}</li>\r\n                <li *ngIf=\"pais.gini\" class=\"pais-data\">Desigualdade Social (Gini): <b>{{pais.gini}}</b></li>\r\n                <li>&nbsp;</li>\r\n                <li *ngIf=\"pais.languages\" class=\"pais-data\">Idiomas:</li>\r\n                <li class=\"pais-data\" style=\"padding-left:2em;\">\r\n                    <span *ngFor=\"let idioma of pais.languages\">{{idioma}} </span>  \r\n                </li>\r\n              \r\n                <li>&nbsp;</li>\r\n                <li class=\"pais-data\">Time zone:</li>\r\n                <li class=\"pais-data\" style=\"padding-left:2em;\">\r\n                  <span *ngFor=\"let tz of pais.timezones\">{{tz}} </span>\r\n                </li>\r\n                <li>&nbsp;</li>\r\n                <li *ngIf=\"pais.borders\" class=\"pais-data\">Fronteiras:</li>\r\n                <li class=\"pais-data\" style=\"padding-left:2em;\">\r\n                    <span *ngFor=\"let item of pais.borders\">{{item}} </span>  \r\n                </li>\r\n                <li>&nbsp;</li>\r\n                <li *ngIf=\"pais.currencies\" class=\"pais-data\">Moedas:</li>\r\n                <li class=\"pais-data\" style=\"padding-left:2em;\">\r\n                    <span *ngFor=\"let moeda of pais.currencies\">{{moeda}} </span>  \r\n                </li>\r\n                <li>&nbsp;</li>\r\n                <li *ngIf=\"pais.callingCodes\" class=\"pais-data\">Códigos DDI:</li>\r\n                <li class=\"pais-data\" style=\"padding-left:2em;\">\r\n                    <span *ngFor=\"let codes of pais.callingCodes\">{{codes}} </span>  \r\n                </li>\r\n                <li>&nbsp;</li>\r\n                <li *ngIf=\"pais.topLevelDomain\" class=\"pais-data\">Domínios de Topo na Web:</li>\r\n                <li class=\"pais-data\" style=\"padding-left:2em;\">\r\n                    <span *ngFor=\"let dominio of pais.topLevelDomain\">{{dominio}} </span>  \r\n                </li>\r\n\r\n                \r\n              </ul>\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col>\r\n          <div class=\"distance\">{{distance}}m</div>\r\n        </ion-col> -->\r\n      </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pais/pais.page.scss":
/*!*************************************!*\
  !*** ./src/app/pais/pais.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Montserrat);\nion-button {\n  text-decoration: none;\n  color: #FFF; }\nion-content {\n  font-family: 'Montserrat', sans-serif; }\nbutton {\n  width: 100%;\n  background-color: white; }\n.points {\n  float: left;\n  width: 80%;\n  color: #888;\n  font-family: 'Montserrat', sans-serif; }\n.points-title {\n  font-weight: 900;\n  color: #000; }\n.title {\n  padding-top: 12px;\n  margin: 0 auto;\n  width: 100%;\n  height: 80px;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 10pt;\n  font-weight: bold;\n  color: #FFF;\n  background-color: #019879; }\n.left {\n  padding-left: 20px;\n  text-align: left;\n  height: 40px; }\n.right {\n  padding-right: 20px;\n  text-align: right; }\n.data-left {\n  padding-left: 40px;\n  height: 60px;\n  display: flex;\n  align-content: center;\n  align-items: center; }\n.data {\n  text-align: left;\n  height: 60px;\n  vertical-align: middle;\n  display: flex;\n  align-content: center;\n  align-items: center; }\n.data-all {\n  padding-top: 12px;\n  margin: 0 auto;\n  width: 100%;\n  height: 100%px;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  color: #019879;\n  background-color: #FFF;\n  border-bottom: 1px solid #AAA; }\n.no-padding {\n  padding: 0px !important; }\n.data-button {\n  width: 80%;\n  height: 100%;\n  background-color: #019879;\n  color: #FFF;\n  border-radius: 8px;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 12pt;\n  font-weight: normal; }\n.distance {\n  float: right;\n  height: 50px;\n  margin: 0px !important;\n  padding-top: 15px;\n  padding-right: 30px;\n  text-align: right;\n  font-weight: bold;\n  font-size: 12pt;\n  color: #019879; }\n.text {\n  padding-top: 20px;\n  width: 100%;\n  height: 90px; }\n.pais {\n  float: left;\n  height: 50px;\n  margin: 0px !important;\n  padding-left: 30px;\n  padding-right: 30px;\n  text-align: left;\n  font-weight: bold;\n  color: #019879; }\n.description {\n  text-align: left;\n  font-weight: bold;\n  font-size: 16pt; }\n.pais-data {\n  font-weight: bold;\n  font-size: 9pt; }\nimg {\n  height: 100%;\n  width: 100%; }\nul {\n  margin: auto;\n  padding: 0px; }\nul > li {\n  text-align: left;\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpcy9DOlxcVXNlcnNcXFVzZXJcXGpvYnNcXHNkL3NyY1xcYXBwXFxwYWlzXFxwYWlzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBWTtBQUdaO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTtBQUdmO0VBQ0kscUNBQXFDLEVBQUE7QUFHekM7RUFDSSxXQUFXO0VBQ1gsdUJBQXVCLEVBQUE7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQ0FBcUMsRUFBQTtBQUd6QztFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUlJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksa0JBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFHaEI7RUFDSSxtQkFBa0I7RUFBRSxpQkFBaUIsRUFBQTtBQUl6QztFQUVJLGtCQUFpQjtFQUVqQixZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTtBQUd2QjtFQUlJLGdCQUFnQjtFQUNoQixZQUFZO0VBRVosc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsNkJBQTZCLEVBQUE7QUFHakM7RUFDSSx1QkFBdUIsRUFBQTtBQUczQjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7QUFNdkI7RUFDSSxZQUFZO0VBRVosWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGlCQUFpQjtFQUVqQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBSWhCO0VBQ0ksV0FBVztFQUVYLFlBQVk7RUFDWixzQkFBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBRWpCLGNBQWMsRUFBQTtBQUdsQjtFQU1JLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0FBR25CO0VBRUksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTtBQUdsQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7QUFHZjtFQUNJLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFHaEI7RUFHSSxnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWlzL3BhaXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQpO1xyXG4kZm9udC1mYW1pbHktYmFzZTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBvaW50cyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjogIzg4ODsgICAgXHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucG9pbnRzLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogIzAwMDsgICAgXHJcbn0gXHJcblxyXG4udGl0bGUge1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDA7XHJcbiAgICAvLyBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE5ODc5O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7IHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLmRhdGEtbGVmdCAge1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NDBweDtcclxuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5kYXRhIHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6NDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGEtYWxsIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMTk4Nzk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBQUE7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTk4Nzk7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXN0YW5jZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBjb2xvcjogIzAxOTg3OTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBhaXMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gZm9udC1zaXplOiAxNnB0O1xyXG4gICAgY29sb3I6ICMwMTk4Nzk7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gICAgLy9oZWlnaHQ6IDUwcHg7XHJcbiAgICAvLyBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAvL3BhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDsgICAgXHJcbn1cclxuXHJcbi5wYWlzLWRhdGEge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA5cHQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudWwge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG51bCA+IGxpIHtcclxuICAgIC8vZmxvYXQ6IGxlZnQ7XHJcbiAgICAvL21hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pais/pais.page.ts":
/*!***********************************!*\
  !*** ./src/app/pais/pais.page.ts ***!
  \***********************************/
/*! exports provided: PaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPage", function() { return PaisPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ws_pontos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ws-pontos.service */ "./src/app/ws-pontos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
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










var PaisPage = /** @class */ (function () {
    function PaisPage(wspontos, navCtrl, activatedRoute, geolocation, nativeGeocoder, _location, toastController, platform, loadingCtrl, storage) {
        var _this = this;
        this.wspontos = wspontos;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this._location = _location;
        this.toastController = toastController;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.faCompass = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCompass"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInfoCircle"];
        this.faChevronCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronCircleLeft"];
        this.faMapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarker"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPhone"];
        this.faRecycle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRecycle"];
        this.faDesktop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDesktop"];
        this.distance = null;
        this.getLocalData().then(function (paises) {
            console.log('paises: ', paises);
            /** VERIFICANDO SE HÁ DADOS PARA EXIBIÇÃO OFFLINE */
            if (paises == null) {
                _this.wspontos.getDataFromApi()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    //loading.dismiss();
                    _this.setPais();
                }))
                    .subscribe(function (data) {
                    paises = data;
                    _this.setLocalData(JSON.stringify(paises));
                });
            }
            else {
                _this.paises = JSON.parse(paises);
                //       loading.dismiss();
                _this.setPais();
            }
        });
    }
    PaisPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); });
    };
    PaisPage.prototype.goBack = function () {
        this._location.back();
    };
    PaisPage.prototype.presentToast = function (text) {
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
    PaisPage.prototype.geodesicDistance = function (lat1, lng1, lat2, lng2) {
        // console.log("lat lng: "+lat1+" "+lng1);
        var R = 6371000; // metres
        var φ1 = this.toRad(lat1);
        var φ2 = this.toRad(+lat2);
        var Δφ = Math.sqrt(Math.pow(this.toRad(+lat2) - this.toRad(lat1), 2));
        var Δλ = Math.sqrt(Math.pow(this.toRad(+lng2) - this.toRad(lng1), 2));
        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = (R * c).toFixed(1);
        // console.log("φ1: "+φ1);
        // console.log("φ2: "+φ2);
        // console.log("Δφ: "+Δφ);
        // console.log("Δλ: "+Δλ);
        // console.log("c: "+c);
        return d;
    };
    PaisPage.prototype.toRad = function (value) {
        return value * Math.PI / 180;
    };
    PaisPage.prototype.goToMapa = function () {
        this.navCtrl.navigateForward('/mapa');
    };
    /** stringified JSON */
    PaisPage.prototype.getLocalData = function () {
        return this.storage.get('paises');
    };
    PaisPage.prototype.setLocalData = function (paises) {
        return this.storage.set('paises', paises);
    };
    /***/
    PaisPage.prototype.setPais = function () {
        var _this = this;
        this.paises.forEach(function (pais) {
            var pais_ = _this.activatedRoute.snapshot.paramMap.get('name');
            if (pais.name == pais_) {
                _this.pais = pais;
                console.log('matched: ' + _this.pais.name);
            }
            // location.reload();      
        });
    };
    PaisPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pais',
            template: __webpack_require__(/*! ./pais.page.html */ "./src/app/pais/pais.page.html"),
            styles: [__webpack_require__(/*! ./pais.page.scss */ "./src/app/pais/pais.page.scss")]
        }),
        __metadata("design:paramtypes", [_ws_pontos_service__WEBPACK_IMPORTED_MODULE_1__["WsPontosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]])
    ], PaisPage);
    return PaisPage;
}());



/***/ })

}]);
//# sourceMappingURL=pais-pais-module.js.map