(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031"],{

/***/ "./src/app/layout/workspace/complete-card/complete-card.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/layout/workspace/complete-card/complete-card.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-card {\n  float: left;\n}\n\n.card {\n  width: 360px;\n  height: 600px;\n}\n\n.card-title {\n  margin-left: 10px;\n  color: #002538;\n}\n\n.pro-label {\n  width: 120px;\n}\n\n.progress-block {\n  padding-bottom: 3px;\n}\n"

/***/ }),

/***/ "./src/app/layout/workspace/complete-card/complete-card.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/workspace/complete-card/complete-card.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n   <div class=\"card\">\n     <div class=\"card-header\">\n       User Information\n     </div>\n     <div class=\"card-block\">\n       <div class=\"card-media-block\">\n         <img src=\"../../../../assets/user.png\" class=\"card-media-image\">\n         <div class=\"card-media-description\">\n           <span class=\"card-media-title\" style=\"padding-bottom: 5px\"> Name: {{ curUser.username }} </span>\n           <span class=\"card-media-text\"> Role: {{curUser.role}} </span>\n         </div>\n       </div>\n       <br>\n       <div class=\"row\" style=\"padding-bottom: 10px\">\n         <h4 class=\"card-title\"><strong>ToTal Score Summary</strong></h4>\n         <!--<div class=\"toggle-switch\">-->\n           <!--<input type=\"checkbox\" id=\"toggle_4\">-->\n           <!--<label for=\"toggle_4\"></label>-->\n         <!--</div>-->\n       </div>\n       <p class=\"card-text\" style=\"padding-bottom: 10px\">Total Score: {{ totalScore }}</p>\n       <div class=\"progress-block\">\n         <label class=\"pro-label\">Physical</label>\n         <div class=\"progress success\">\n           <progress value=\"{{scoreList[0]}}\" max=\"100\" data-displayval=\"...%\"></progress>\n         </div>\n       </div>\n       <div class=\"progress-block\">\n          <label class=\"pro-label\">Emotional</label>\n          <div class=\"progress success\">\n            <progress value=\"{{scoreList[1]}}\" max=\"100\" data-displayval=\"...%\"></progress>\n          </div>\n        </div>\n       <div class=\"progress-block\">\n         <label class=\"pro-label\">Financial</label>\n         <div class=\"progress success\">\n           <progress value=\"{{scoreList[2]}}\" max=\"100\" data-displayval=\"...%\"></progress>\n         </div>\n       </div>\n       <div class=\"progress-block\">\n         <label class=\"pro-label\">Social</label>\n         <div class=\"progress success\">\n           <progress value=\"{{scoreList[3]}}\" max=\"100\" data-displayval=\"...%\"></progress>\n         </div>\n       </div>\n       <div class=\"progress-block\">\n         <label class=\"pro-label\">Spiritual</label>\n         <div class=\"progress static\">\n           <progress value=\"{{scoreList[4]}}\" max=\"100\" data-displayval=\"...%\"></progress>\n         </div>\n       </div>\n       <div class=\"progress-block\">\n         <label class=\"pro-label\">Occupational</label>\n         <div class=\"progress static\">\n           <progress value=\"{{scoreList[5]}}\" max=\"100\" data-displayval=\"...%\"></progress>\n         </div>\n       </div>\n       <div class=\"progress-block\">\n         <label class=\"pro-label\">Intellectual</label>\n         <div class=\"progress success\">\n           <progress value=\"{{scoreList[6]}}\" max=\"100\" data-displayval=\"...%\"></progress>\n         </div>\n       </div>\n       <div style=\"padding-bottom: 10px\"></div>\n     </div>\n\n     <app-footer></app-footer>\n   </div>\n </div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/complete-card/complete-card.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/workspace/complete-card/complete-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompleteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteCardComponent", function() { return CompleteCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/question.service */ "./src/app/service/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompleteCardComponent = /** @class */ (function () {
    function CompleteCardComponent(questionService) {
        this.questionService = questionService;
        this.curUser = JSON.parse(localStorage.getItem('curUser'));
        this.userId = JSON.parse(localStorage.getItem('curUser')).id;
        this.scoreList = [0, 0, 0, 0, 0, 0, 0];
        this.totalScore = 0;
    }
    CompleteCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSessions();
        this.questionService.getSessionByUser(this.userId).subscribe(function (value) {
            _this.sessionId = value[0].id;
            console.log(_this.sessionId);
            _this.questionService.getScoreBySession(_this.sessionId).subscribe(function (value) {
                _this.scoreList = value;
                for (var i = 0; i < value.length; i++) {
                    _this.totalScore += value[i];
                }
                console.log(_this.totalScore);
                console.log(_this.scoreList);
            });
        });
    };
    CompleteCardComponent.prototype.getSessions = function () {
        var _this = this;
        this.questionService.getSessionByUser(this.curUser.id).subscribe(function (value) {
            _this.sessions = value;
            _this.sessionNum = value.length;
        });
    };
    CompleteCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-complete-card',
            template: __webpack_require__(/*! ./complete-card.component.html */ "./src/app/layout/workspace/complete-card/complete-card.component.html"),
            styles: [__webpack_require__(/*! ./complete-card.component.css */ "./src/app/layout/workspace/complete-card/complete-card.component.css")]
        }),
        __metadata("design:paramtypes", [_service_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], CompleteCardComponent);
    return CompleteCardComponent;
}());



/***/ }),

/***/ "./src/app/layout/workspace/complete-card/complete-card.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/workspace/complete-card/complete-card.module.ts ***!
  \************************************************************************/
/*! exports provided: CompleteCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteCardModule", function() { return CompleteCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _complete_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete-card.component */ "./src/app/layout/workspace/complete-card/complete-card.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/layout/workspace/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CompleteCardModule = /** @class */ (function () {
    function CompleteCardModule() {
    }
    CompleteCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
            ],
            declarations: [_complete_card_component__WEBPACK_IMPORTED_MODULE_2__["CompleteCardComponent"]],
            exports: [
                _complete_card_component__WEBPACK_IMPORTED_MODULE_2__["CompleteCardComponent"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
            ]
        })
    ], CompleteCardModule);
    return CompleteCardModule;
}());



/***/ }),

/***/ "./src/app/layout/workspace/footer/footer.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/workspace/footer/footer.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".copy-right {\n  font-size: 11px;\n  margin-top: 1px;\n}\n\n.company {\n  font-size: 12px;\n  color: #002538;\n}\n\n.footer {\n  margin-left: 16px;\n  bottom: 18px;\n  height: 80px;\n  width: 200px;\n  position: absolute;\n}\n"

/***/ }),

/***/ "./src/app/layout/workspace/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/workspace/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <p class=\"copy-right\">Pitt Wellness Scale System</p>\n  <p class=\"copy-right\">@{{today | date: 'yyyy'}}<b class=\"company\">&nbsp; University of Pittsburgh.</b></p>\n  <p class=\"copy-right\">All rights reserved.</p>\n  <p class=\"copy-right\"><b>Version: </b> 0.0.1 </p>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/workspace/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = Date.now();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/workspace/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/workspace/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/workspace/footer/footer.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/workspace/footer/footer.module.ts ***!
  \**********************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/layout/workspace/footer/footer.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"]
            ],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ })

}]);
//# sourceMappingURL=workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031.js.map