(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-demographic-demographic-module"],{

/***/ "./src/app/layout/workspace/demographic/demographic.component.css":
/*!************************************************************************!*\
  !*** ./src/app/layout/workspace/demographic/demographic.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 600px;\n}\n\n\n.card-block {\n  height: 80%;\n  overflow: auto;\n  margin-bottom: 1px;\n}\n\n\n.card .card-text {\n  margin-bottom: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/layout/workspace/demographic/demographic.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/workspace/demographic/demographic.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n    <app-complete-card></app-complete-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <clr-icon shape=\"pinboard\" size=\"36\"></clr-icon> &nbsp;\n          <span>Demographic Question</span>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-block\">\n          <div class=\"card-text\">\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n\n              <div *ngFor=\"let question of questions\" class=\"form-row\">\n                <app-question [question]=\"question\" [form]=\"form\"></app-question>\n              </div>\n            </form>\n\n            <div *ngIf=\"payLoad\" class=\"form-row\">\n              <strong>Saved the following values</strong><br>{{payLoad}}\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n            <button class=\"btn btn-primary\">Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/demographic/demographic.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/workspace/demographic/demographic.component.ts ***!
  \***********************************************************************/
/*! exports provided: DemographicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemographicComponent", function() { return DemographicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/question.service */ "./src/app/service/question.service.ts");
/* harmony import */ var _service_question_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/question-control.service */ "./src/app/service/question-control.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemographicComponent = /** @class */ (function () {
    function DemographicComponent(qs, qcs) {
        this.qs = qs;
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DemographicComponent.prototype.ngOnInit = function () {
        this.questions = this.qs.getDemoQuestion();
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DemographicComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    DemographicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demographic',
            template: __webpack_require__(/*! ./demographic.component.html */ "./src/app/layout/workspace/demographic/demographic.component.html"),
            styles: [__webpack_require__(/*! ./demographic.component.css */ "./src/app/layout/workspace/demographic/demographic.component.css")]
        }),
        __metadata("design:paramtypes", [_service_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"],
            _service_question_control_service__WEBPACK_IMPORTED_MODULE_2__["QuestionControlService"]])
    ], DemographicComponent);
    return DemographicComponent;
}());



/***/ }),

/***/ "./src/app/layout/workspace/demographic/demographic.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/workspace/demographic/demographic.module.ts ***!
  \********************************************************************/
/*! exports provided: DemographicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemographicModule", function() { return DemographicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demographic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demographic.component */ "./src/app/layout/workspace/demographic/demographic.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questionnaire_question_question_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../questionnaire/question/question.module */ "./src/app/layout/workspace/questionnaire/question/question.module.ts");
/* harmony import */ var _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../complete-card/complete-card.module */ "./src/app/layout/workspace/complete-card/complete-card.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/layout/workspace/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DemographicModule = /** @class */ (function () {
    function DemographicModule() {
    }
    DemographicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _questionnaire_question_question_module__WEBPACK_IMPORTED_MODULE_6__["QuestionModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_7__["CompleteCardModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: '', component: _demographic_component__WEBPACK_IMPORTED_MODULE_2__["DemographicComponent"] }
                ])
            ],
            declarations: [_demographic_component__WEBPACK_IMPORTED_MODULE_2__["DemographicComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _questionnaire_question_question_module__WEBPACK_IMPORTED_MODULE_6__["QuestionModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_7__["CompleteCardModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _demographic_component__WEBPACK_IMPORTED_MODULE_2__["DemographicComponent"]
            ]
        })
    ], DemographicModule);
    return DemographicModule;
}());



/***/ })

}]);
//# sourceMappingURL=workspace-demographic-demographic-module.js.map