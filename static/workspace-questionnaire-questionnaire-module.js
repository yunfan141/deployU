(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-questionnaire-questionnaire-module"],{

/***/ "./src/app/layout/workspace/questionnaire/questionnaire.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/layout/workspace/questionnaire/questionnaire.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 600px;\n}\n\n\n.card {\n  width: 1130px;\n  height: 600px;\n}\n\n\n.card-block {\n  height: 80%;\n  overflow: auto;\n  margin-bottom: 15px;\n}\n\n\n.card .card-text {\n  margin-bottom: 10px;\n}\n\n\n.card-footer {\n  position: absolute;\n  bottom: 10px;\n}\n\n\nclr-tab-content {\n  overflow: auto;\n}\n\n\n.start-left {\n  width: 40%;\n  float: left;\n  padding-left: 50px;\n  padding-top: 50px;\n}\n\n\n.start-right {\n  width: 40%;\n  float: left;\n  padding-top: 50px;\n}\n\n\n.picture {\n  height:250px;\n}\n\n\nh6 {\n\n}\n"

/***/ }),

/***/ "./src/app/layout/workspace/questionnaire/questionnaire.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/workspace/questionnaire/questionnaire.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n  <app-complete-card></app-complete-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-title\">\n      <clr-icon shape=\"pencil\" size=\"36\"></clr-icon> &nbsp;\n      <span>Questionnaire</span>\n    </div>\n    <div class=\"card-divider\"></div>\n    <div class=\"card-block\">\n      <div class=\"card-text\">\n        <clr-tabs>\n          <clr-tab>\n            <button clrTabLink>Questionnaire</button>\n            <clr-tab-content *clrIfActive>\n              <div class=\"start-left\">\n                <img src=\"../../../../assets/questionnaire.png\" class=\"picture\">\n              </div>\n              <div class=\"start-right\">\n                <h3>This is a new session for questionnaire.</h3>\n                <h6>Please choose a domain to start answer questions</h6>\n                <h6>* Please remenber to submit your answer before you switch to another domain</h6>\n              </div>\n            </clr-tab-content>\n          </clr-tab>\n\n          <clr-tab *ngFor=\"let dom of domains\">\n            <button clrTabLink (click)=\"getQuestionsByDomain(dom.id)\">{{dom.domain}}</button>\n            <clr-tab-content>\n              <div *ngIf=\"form[dom.id]\" style=\"padding-top: 10px; padding-left: 10px\">\n                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form[dom.id]\">\n                  <div *ngFor=\"let question of questions[dom.id]\" class=\"form-row\">\n                    <app-question [question]=\"question\" [form]=\"form[dom.id]\"></app-question>\n                  </div>\n                </form>\n                <div class=\"card-footer\">\n                  <div *ngIf=\"!isSubmitted[dom.id]\">\n                    <h6 style=\"color : #F94D32\">* Please remenber to submit your answer before you switch to another domain</h6>\n                  </div>\n                  <br>\n                  <div *ngIf=\"isSubmitted[dom.id]\">\n                    <p style=\"font-size: 14px; padding-bottom: 5px; color: #004a70;\">Your answer for current domain has been submitted successfully.</p>\n                  </div>\n                  <div class=\"btn-group btn-primary\" *ngIf=\"form[dom.id]\">\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form[dom.id].valid || isSubmitted[dom.id]\" (click)=\"submitAns(dom.id)\">Submit</button>\n                  </div>\n                </div>\n              </div>\n            </clr-tab-content>\n          </clr-tab>\n        </clr-tabs>\n      </div>\n      <!-- <div class=\"card-footer\">\n        <div *ngIf=\"isSubmitted\">\n          <p style=\"font-size: 14px; padding-bottom: 5px; color: #004a70;\">Your answer for current domain has been submitted successfully.</p>\n        </div>\n        <div class=\"btn-group btn-primary\" *ngIf=\"form\">\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\" (click)=\"submitAns()\">Submit</button>\n          <button class=\"btn btn-success\">Reset</button>\n          <button class=\"btn btn-primary\" (click)=\"getQuestionsByDomain(dom.id +1 )\">Next</button>\n        </div>\n      </div> -->\n    </div>\n  </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/questionnaire/questionnaire.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/workspace/questionnaire/questionnaire.component.ts ***!
  \***************************************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mock_data_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mock-data/Question */ "./src/app/mock-data/Question.ts");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/question.service */ "./src/app/service/question.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(questionService, fb, datePipe) {
        this.questionService = questionService;
        this.fb = fb;
        this.datePipe = datePipe;
        this.userId = JSON.parse(localStorage.getItem('curUser')).id;
        this.domains = [];
        this.questions = [];
        this.answers = [];
        // isSubmitted: boolean = false;
        this.isSubmitted = [false, false, false, false, false, false, false];
        this.payLoad = '';
        this.questions2 = [];
        this.answers2 = [];
        this.domainIdList = [1, 2, 3, 4, 5, 6, 7];
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
        this.getDomains();
        this.createSession();
        this.answers = new Array(7);
        this.form = new Array(7);
        this.questions = new Array(7);
    };
    QuestionnaireComponent.prototype.createSession = function () {
        var _this = this;
        var date = this.datePipe.transform(Date.now(), "yyyy-MM-dd HH:mm a z':'+0900");
        var sessionInfo = new _mock_data_Question__WEBPACK_IMPORTED_MODULE_2__["Session"]({
            userId: this.userId,
            createDate: date
        });
        this.questionService.createSession(sessionInfo).subscribe(function (value) {
            _this.session = value;
            //console.log(this.session);
        });
    };
    QuestionnaireComponent.prototype.getDomains = function () {
        var _this = this;
        this.questionService.getAllDomains().subscribe(function (value) {
            _this.domains = value;
            if (_this.domains.length > 0) {
                _this.getQuestionsByDomain(_this.domains[0].id);
            }
        });
    };
    QuestionnaireComponent.prototype.getQuestionsByDomain = function (id) {
        var _this = this;
        //this.questions = [];
        this.answers[id] = [];
        this.questionService.getQuestionByDomain(id).subscribe(function (value) {
            _this.questions[id] = value;
            console.log(_this.questions[id]);
            var group = {};
            _this.questions[id].forEach(function (ques) {
                group[ques.id] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
                var answer = new _mock_data_Question__WEBPACK_IMPORTED_MODULE_2__["AnswerItem"]({
                    questionId: ques.id,
                    domain: ques.domain,
                    weight: ques.weight,
                });
                _this.answers[id].push(answer);
                console.log(_this.answers);
            });
            // generate form group to collect the users' answers
            _this.form[id] = _this.fb.group(group);
            _this.answers[id].forEach(function (ans) {
                _this.form[id].controls[ans.questionId].valueChanges.subscribe(function (value) {
                    _this.questions[id].forEach(function (item) {
                        if (item.id == ans.questionId) {
                            item.ansOptions.forEach(function (ansitem) {
                                if (ansitem.eid == value) {
                                    ans.answer = ansitem;
                                }
                            });
                        }
                    });
                });
            });
        });
    };
    QuestionnaireComponent.prototype.submitAns = function (id) {
        var _this = this;
        // this.session.questionnaireAnswer = this.answers[id];
        var finalAnswer = {
            questionnaireAnswer: this.answers[id],
        };
        this.questionService.addQuestionAnswer(finalAnswer, this.session.id).subscribe(function (value) {
            console.log(value);
            _this.isSubmitted[id] = true;
            console.log(_this.isSubmitted[id]);
        });
    };
    QuestionnaireComponent.prototype.onSubmit = function () {
    };
    QuestionnaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionnaire',
            template: __webpack_require__(/*! ./questionnaire.component.html */ "./src/app/layout/workspace/questionnaire/questionnaire.component.html"),
            styles: [__webpack_require__(/*! ./questionnaire.component.css */ "./src/app/layout/workspace/questionnaire/questionnaire.component.css")]
        }),
        __metadata("design:paramtypes", [_service_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "./src/app/layout/workspace/questionnaire/questionnaire.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/workspace/questionnaire/questionnaire.module.ts ***!
  \************************************************************************/
/*! exports provided: QuestionnaireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireModule", function() { return QuestionnaireModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _questionnaire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionnaire.component */ "./src/app/layout/workspace/questionnaire/questionnaire.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../complete-card/complete-card.module */ "./src/app/layout/workspace/complete-card/complete-card.module.ts");
/* harmony import */ var _question_question_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question/question.module */ "./src/app/layout/workspace/questionnaire/question/question.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var QuestionnaireModule = /** @class */ (function () {
    function QuestionnaireModule() {
    }
    QuestionnaireModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__["CompleteCardModule"],
                _question_question_module__WEBPACK_IMPORTED_MODULE_6__["QuestionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireComponent"] }
                ])
            ],
            declarations: [_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__["CompleteCardModule"],
                _question_question_module__WEBPACK_IMPORTED_MODULE_6__["QuestionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireComponent"]
            ]
        })
    ], QuestionnaireModule);
    return QuestionnaireModule;
}());



/***/ })

}]);
//# sourceMappingURL=workspace-questionnaire-questionnaire-module.js.map