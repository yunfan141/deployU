(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-question-input-question-module"],{

/***/ "./src/app/admin/input-question/input-question.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/input-question/input-question.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 580px;\n}\n\n\n.row {\n  padding-left: 11px;\n}\n\n\n.card-block {\n  height: 85%;\n  overflow: auto;\n  margin-bottom: 10px;\n}\n\n\n.card-text {\n  overflow: auto;\n}\n\n\n.card-footer {\n  position: absolute;\n  bottom: 10px;\n}\n\n\n.form {\n  width: 95%;\n  overflow: auto;\n}\n\n\n.form-block {\n  width: 95%;\n}\n\n\n.ansGroup {\n  width: 98%;\n  overflow: auto;\n}\n\n\n.question-info {\n  margin-left: 15px;\n  width: 90%;\n}\n\n\n.ques-info {\n  padding-bottom: 10px;\n}\n\n\np {\n  margin-top: 5px;\n}\n\n\n.confirmation {\n  padding-left: 5px;\n  padding-right: 5px;\n  color: #002538;\n}\n"

/***/ }),

/***/ "./src/app/admin/input-question/input-question.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/input-question/input-question.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n    <app-admin-card></app-admin-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <!-- input question part -->\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <clr-icon shape=\"add-text\" size=\"36\"></clr-icon> &nbsp;\n          <span>Input New Question</span>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-block\">\n          <div class=\"card-text\">\n            <clr-tabs>\n              <clr-tab>\n                <button clrTabLink>Input Section</button>\n                <ng-template [(clrIfActive)]=\"inputActive\">\n                  <clr-tab-content>\n                    <!--begin of the input question -->\n                    <form class=\"form\" [formGroup]=\"form\">\n\n                      <section class=\"form-block\" (ngSubmit)=\"onSubmit()\">\n                        <!--select question type-->\n\n                        <div class=\"form-group\">\n                          <label> Question Category </label>\n                          <!--<div class=\"radio-inline\">-->\n                            <!--<input type=\"radio\" name=\"quesType\" id=\"t1\" value=\"demographic\" formControlName=\"quesType\">-->\n                            <!--<label for=\"t1\">Demographic</label>-->\n                          <!--</div>-->\n                          <div class=\"radio-inline\">\n                            <input type=\"radio\" name=\"quesType\" id=\"t2\" value=\"questionnaire\" formControlName=\"quesType\">\n                            <label for=\"t2\">Questionnaire</label>\n                          </div>\n                        </div>\n                        <!--Input question description-->\n                        <div class=\"form-group\">\n                          <label for=\"desp\">Description</label>\n                          <input id=\"desp\" type=\"text\" formControlName=\"desp\" size=\"55\">\n                        </div>\n                        <!--if question belongs to questionnaire, then select domain-->\n                        <div class=\"row\">\n                        <div *ngIf=\"isQues\">\n                          <!-- Choose domain-->\n                          <div class=\"form-group\">\n                            <label for=\"domain\">Domain</label>\n                            <div class=\"select\">\n                              <select id=\"domain\" name=\"domain\" formControlName=\"domain\">\n                                <option value=\"Default\">Select Question Domain...</option>\n                                <option *ngFor=\"let dom of domains\" [value]=\"dom.domain\">{{dom.domain}}</option>\n                              </select>\n                            </div>\n                          </div>\n\n                          <!--Choose question weight-->\n                          <div class=\"form-group\">\n                            <label for=\"weight\">Weight</label>\n                            <input id=\"weight\" type=\"number\" formControlName=\"weight\" size=\"45\">\n                          </div>\n                        </div>\n                        </div>\n                        <!-- end of ngIf-->\n\n                        <!-- Choose question order-->\n                        <div class=\"row\">\n                        <div class=\"form-group\">\n                          <label for=\"order\">Order</label>\n                          <input id=\"order\" type=\"number\" formControlName=\"order\" size=\"45\">\n                        </div>\n                        <!-- Choose answer type-->\n                        <div class=\"form-group\">\n                          <label for=\"type\">Answer Type</label>\n                          <div class=\"select\">\n                            <select id=\"ansType\" name=\"anstype\" formControlName=\"anstype\">\n                              <option value=\"Default\">Select Answer Type...</option>\n                              <option *ngFor=\"let ans of AnsType\" [value]=\"ans.key\">{{ans.value}}</option>\n                            </select>\n                          </div>\n                        </div>\n                        <!-- Choose answer numbers-->\n                        <div *ngIf=\"isText; else notText\">\n                          <div class=\"form-group\" >\n                            <label for=\"optNum\">Answer Number</label>\n                            <input id=\"optNum\" type=\"number\" value=\"0\" size=\"45\" disabled>\n                          </div>\n                        </div>\n                        <ng-template #notText>\n                          <div class=\"form-group\">\n                            <label for=\"optNum\">Answer Number</label>\n                            <input id=\"optNum\" type=\"number\" formControlName=\"optnum\" size=\"45\">\n                          </div>\n                        </ng-template>\n                        </div>\n\n                        <!--if question not text input, generate answer group -->\n                        <div *ngIf=\"needOptions\">\n                          <form class=\"form\" [formGroup]=\"ansForm\">\n                            <div class=\"form-group row ansGroup\" *ngFor=\"let opt of options\">\n                              <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n                                <label for=\"gForm_1\">Answer Options {{ opt.key + 1 }}</label>\n                              </div>\n                              <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                                <input class=\"form-control\" type=\"number\" id=\"gForm_1\" placeholder=\"Enter Answer Extent\"\n                                       size=\"35\" [formControlName]=\"opt.eid\">\n                              </div>\n                              <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                                <input class=\"form-control\" type=\"text\" id=\"gForm_2\"\n                                       placeholder=\"Enter Answer Description\" size=\"55\" [formControlName]=\"opt.key\">\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n\n                      </section>\n                      <div class=\"card-footer\">\n                        <button class=\"btn btn-primary\" (click)=\"confirm()\">Next</button>\n                      </div>\n\n                    </form>\n                    <!--end of the input question-->\n                  </clr-tab-content>\n                </ng-template>\n              </clr-tab>\n\n              <clr-tab>\n                <button clrTabLink>Confirm Question</button>\n                <ng-template [(clrIfActive)]=\"confirmActive\">\n                  <clr-tab-content>\n                    <!--begin of the confirm question -->\n                    <div class=\"question-info\">\n                      <!--question category -->\n                      <div class=\"ques-info\">\n                        <h6>Question Category: <span class=\"confirmation\"> Questionnaire</span></h6>\n                      </div>\n\n                      <!--question description -->\n                      <div class=\"ques-info\">\n                        <h6>Question Description:\n                          <span class=\"confirmation\"> {{form.get('desp').value}}</span></h6>\n                      </div>\n\n                      <!--question order-->\n                      <div class=\"ques-info\">\n                        <h6>Question Order:\n                          <span class=\"confirmation\"> {{form.get('order').value}}</span></h6>\n                      </div>\n\n                      <!-- question answer type-->\n                      <div class=\"ques-info\">\n                        <h6>Question Answer Type:\n                          <span class=\"confirmation\"> {{form.get('anstype').value}}</span> </h6>\n                      </div>\n\n                      <!--question domain and weight if needed -->\n                      <div *ngIf=\"isQues\">\n                        <!--domain -->\n                        <div class=\"ques-info\">\n                          <h6>Question Domain:\n                            <span class=\"confirmation\"> {{form.get('domain').value}}</span> </h6>\n                        </div>\n\n                        <!--weight -->\n                        <div class=\"ques-info\">\n                          <h6>Question Weight:\n                            <span class=\"confirmation\"> {{form.get('weight').value}}</span> </h6>\n                        </div>\n                      </div>\n\n                      <!-- answer options if needed -->\n                      <div *ngFor=\"let opt of options\">\n                        <div class=\"ques-info row\">\n                          <h6>Answer Options: {{opt.key + 1}}\n                            <span class=\"confirmation\">Description: {{ opt.value }}</span>\n                            <span class=\"confirmation\">Weight: {{ opt.extent }}</span>\n                          </h6>\n                        </div>\n                      </div>\n\n                    </div>\n                    <!--end of question information -->\n\n                    <div class=\"card-footer\" *ngIf=\"form.valid && ansForm.valid; else block\">\n                      <button class=\"btn btn-primary\" (click)=\"submit()\">Submit</button>\n                      <button class=\"btn btn-success\" (click)=\"back()\">Back</button>\n                    </div>\n                    <ng-template #block>\n                      <button class=\"btn btn-primary\" disabled>Submit</button>\n                      <button class=\"btn btn-success\" (click)=\"back()\">Back</button>\n                    </ng-template>\n\n                    <!-- end of the input question-->\n                  </clr-tab-content>\n                </ng-template>\n              </clr-tab>\n\n            </clr-tabs>\n\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/input-question/input-question.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/input-question/input-question.component.ts ***!
  \******************************************************************/
/*! exports provided: InputQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputQuestionComponent", function() { return InputQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mock_data_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mock-data/Question */ "./src/app/mock-data/Question.ts");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/question.service */ "./src/app/service/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputQuestionComponent = /** @class */ (function () {
    function InputQuestionComponent(fb, router, questionService) {
        this.fb = fb;
        this.router = router;
        this.questionService = questionService;
        this.inputActive = true;
        this.confirmActive = false;
        this.type = _mock_data_Question__WEBPACK_IMPORTED_MODULE_2__["TYPE"];
        this.Domain = _mock_data_Question__WEBPACK_IMPORTED_MODULE_2__["DOMAIN"];
        this.domains = [];
        this.AnsType = _mock_data_Question__WEBPACK_IMPORTED_MODULE_2__["ANSTYPE"];
        this.options = [];
        this.isQues = false;
        this.isText = false;
        this.needOptions = false;
    }
    InputQuestionComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    InputQuestionComponent.prototype.buildForm = function () {
        var _this = this;
        this.getDomains();
        this.form = this.fb.group({
            quesType: ['questionnaire', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            desp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            domain: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            weight: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            order: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            anstype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            optnum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.ansForm = this.fb.group({});
        if (this.form.controls['quesType'].value === 'questionnaire') {
            this.getType('questionnaire');
        }
        else {
            this.form.controls["quesType"].valueChanges.subscribe(function (value) {
                _this.getType(value);
            });
        }
        this.form.controls["anstype"].valueChanges.subscribe(function (value) {
            _this.getAnsType(value);
        });
        this.form.controls["optnum"].valueChanges.subscribe(function (value) {
            _this.getAnsNumber(value);
        });
    };
    InputQuestionComponent.prototype.getDomains = function () {
        var _this = this;
        this.questionService.getAllDomains().subscribe(function (value) {
            _this.domains = value;
        });
    };
    InputQuestionComponent.prototype.getType = function (value) {
        if (value === "questionnaire") {
            this.isQues = true;
        }
    };
    InputQuestionComponent.prototype.getAnsType = function (value) {
        if (value === "textbox") {
            this.isText = true;
        }
        else {
            this.needOptions = true;
        }
    };
    InputQuestionComponent.prototype.getAnsNumber = function (optnum) {
        var id = 0;
        this.options = [];
        while (optnum > 0 && id < optnum) {
            var opt = { key: id, eid: 'A' + id, extent: id, value: '' };
            this.options.push(opt);
            id++;
        }
        var group = {};
        this.options.forEach(function (option) {
            group[option.eid] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
            group[option.key] = [option.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
        });
        this.ansForm = this.fb.group(group);
        var _loop_1 = function (opt) {
            this_1.ansForm.controls[opt.eid].valueChanges.subscribe(function (value) { return opt.extent = value; });
            this_1.ansForm.controls[opt.key].valueChanges.subscribe(function (value) { return opt.value = value; });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var opt = _a[_i];
            _loop_1(opt);
        }
    };
    InputQuestionComponent.prototype.confirm = function () {
        this.inputActive = false;
        this.confirmActive = true;
    };
    InputQuestionComponent.prototype.back = function () {
        this.inputActive = true;
        this.confirmActive = false;
    };
    InputQuestionComponent.prototype.submit = function () {
        var _this = this;
        var newQuestion = new _mock_data_Question__WEBPACK_IMPORTED_MODULE_2__["Questionnaire"]({
            key: 'Q' + this.form.controls['order'].value,
            label: this.form.controls['desp'].value,
            type: this.form.controls['anstype'].value,
            order: this.form.controls['order'].value,
            domain: this.form.controls['domain'].value,
            weight: this.form.controls['weight'].value,
            ansOptions: this.options,
        });
        this.questionService.addQuestion(newQuestion).subscribe(function (value) {
            _this.router.navigateByUrl('/adminDashboard/ques-manage');
        });
    };
    InputQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-question',
            template: __webpack_require__(/*! ./input-question.component.html */ "./src/app/admin/input-question/input-question.component.html"),
            styles: [__webpack_require__(/*! ./input-question.component.css */ "./src/app/admin/input-question/input-question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])
    ], InputQuestionComponent);
    return InputQuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/input-question/input-question.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/input-question/input-question.module.ts ***!
  \***************************************************************/
/*! exports provided: InputQuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputQuestionModule", function() { return InputQuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-question.component */ "./src/app/admin/input-question/input-question.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-card/admin-card.module */ "./src/app/admin/admin-card/admin-card.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InputQuestionModule = /** @class */ (function () {
    function InputQuestionModule() {
    }
    InputQuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_5__["AdminCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _input_question_component__WEBPACK_IMPORTED_MODULE_2__["InputQuestionComponent"] }
                ])
            ],
            declarations: [_input_question_component__WEBPACK_IMPORTED_MODULE_2__["InputQuestionComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_5__["AdminCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _input_question_component__WEBPACK_IMPORTED_MODULE_2__["InputQuestionComponent"]
            ]
        })
    ], InputQuestionModule);
    return InputQuestionModule;
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
//# sourceMappingURL=input-question-input-question-module.js.map