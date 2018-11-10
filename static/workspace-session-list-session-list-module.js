(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-session-list-session-list-module"],{

/***/ "./src/app/layout/workspace/session-list/session-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/layout/workspace/session-list/session-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 600px;\n}\n\n\n.card-block {\n  height: 80%;\n  overflow: auto;\n  margin-bottom: 1px;\n}\n\n\n.card .card-text {\n  margin-bottom: 10px;\n}\n"

/***/ }),

/***/ "./src/app/layout/workspace/session-list/session-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/workspace/session-list/session-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n        <div class=\"row\">\n          <app-complete-card></app-complete-card>\n          <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n            <div class=\"card\">\n              <div class=\"card-title\">\n                <clr-icon shape=\"bars\" size=\"36\"></clr-icon> &nbsp;\n                <span>Sessions</span>\n              </div>\n\n        <div class=\"card-block\">\n          <clr-stack-view>\n\n            <clr-stack-block *ngFor=\"let item of sessions\">\n              <clr-stack-label>Session {{item.id}}</clr-stack-label>\n              <clr-stack-content>\n                <span> Date: {{item.createDate | date :'short'}}</span>\n                <span style=\"padding-right: 53%\"></span>\n                <span style=\"padding-right: 10px\">\n                  <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"goAnsList(item.id)\">\n                      <clr-icon shape=\"view-list\" size=\"24\"></clr-icon>\n                      <span class=\"tooltip-content\">List</span>\n                  </a>\n                </span>\n                <span style=\"padding-right: 10px\">\n                  <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"goGraph(item.id)\">\n                      <clr-icon shape=\"bar-chart\" size=\"24\"></clr-icon>\n                      <span class=\"tooltip-content\">Graph</span>\n                  </a>\n                </span>\n                <span>\n                  <a role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-xs\" (click)=\"deleteItem(item.id)\">\n                      <clr-icon shape=\"trash\" size=\"24\"></clr-icon>\n                      <span class=\"tooltip-content\">Graph</span>\n                  </a>\n                </span>\n              </clr-stack-content>\n            </clr-stack-block>\n\n          </clr-stack-view>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/session-list/session-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/workspace/session-list/session-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return SessionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/question.service */ "./src/app/service/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionListComponent = /** @class */ (function () {
    //sessions = SESSIONDATA;
    function SessionListComponent(stateService, questionService, router) {
        this.stateService = stateService;
        this.questionService = questionService;
        this.router = router;
        this.userId = JSON.parse(localStorage.getItem('curUser')).id;
    }
    SessionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSession();
        setTimeout(function () {
            _this.stateService.curSession$.next(-1);
        });
    };
    SessionListComponent.prototype.getSession = function () {
        var _this = this;
        this.questionService.getSessionByUser(this.userId).subscribe(function (value) {
            _this.sessions = value;
            //console.log(value);
        });
    };
    SessionListComponent.prototype.goAnsList = function (id) {
        this.stateService.curSession$.next(id);
        this.router.navigateByUrl('/dashboard/answer-list');
    };
    SessionListComponent.prototype.goGraph = function (id) {
        this.stateService.curSession$.next(id);
        this.router.navigateByUrl('/dashboard/score-graph');
    };
    SessionListComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.questionService.deleteSession(id).subscribe(function (value) {
            console.log(value);
            _this.sessions = _this.sessions.filter(function (item) { return item.id != id; });
        });
    };
    SessionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-session-list',
            template: __webpack_require__(/*! ./session-list.component.html */ "./src/app/layout/workspace/session-list/session-list.component.html"),
            styles: [__webpack_require__(/*! ./session-list.component.css */ "./src/app/layout/workspace/session-list/session-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _service_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SessionListComponent);
    return SessionListComponent;
}());



/***/ }),

/***/ "./src/app/layout/workspace/session-list/session-list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/workspace/session-list/session-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: SessionListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListModule", function() { return SessionListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _session_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-list.component */ "./src/app/layout/workspace/session-list/session-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../complete-card/complete-card.module */ "./src/app/layout/workspace/complete-card/complete-card.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SessionListModule = /** @class */ (function () {
    function SessionListModule() {
    }
    SessionListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__["CompleteCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _session_list_component__WEBPACK_IMPORTED_MODULE_2__["SessionListComponent"] }
                ])
            ],
            declarations: [_session_list_component__WEBPACK_IMPORTED_MODULE_2__["SessionListComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__["CompleteCardModule"],
                _session_list_component__WEBPACK_IMPORTED_MODULE_2__["SessionListComponent"],
            ]
        })
    ], SessionListModule);
    return SessionListModule;
}());



/***/ })

}]);
//# sourceMappingURL=workspace-session-list-session-list-module.js.map