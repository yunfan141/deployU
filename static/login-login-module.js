(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/forget-psd/forget-psd.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login/forget-psd/forget-psd.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/forget-psd/forget-psd.component.html":
/*!************************************************************!*\
  !*** ./src/app/login/forget-psd/forget-psd.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-modal [(clrModalOpen)]=\"basic\" [clrModalSize]=\"'lg'\">\n  <h3 class=\"modal-title\">Please input your security questions and answers</h3>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form3\">\n      <section class=\"form-block\">\n        <div class=\"form-group\">\n          <label for=\"empUserName\">User name</label>\n          <label for=\"empUserName\"\n                 aria-haspopup=\"true\"\n                 role=\"tooltip\"\n                 class=\"tooltip tooltip-validation tooltip-md\">\n            <input type=\"text\" id=\"empUserName\" placeholder=\"Enter User name\"\n                   name=\"username\" formControlName=\"username\" size=\"38\">\n            <span class=\"tooltip-content\"> User Name is Required. </span>\n          </label>\n        </div>\n        <div *ngFor=\"let t of time\">\n          <div class=\"form-group\">\n            <label>{{t.id}} .Security Question</label>\n            <div class=\"select\">\n              <select name=\"secq1\"\n                      [(ngModel)]=\"t.question\" [formControlName]=\"t.qid\" required>\n                <option *ngFor=\"let ques of secureQue\" [value]=\"ques.value\">{{ques.value}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>&nbsp; &nbsp; Security Answer</label>\n            <input type=\"text\" [(ngModel)]=\"t.answer\" [formControlName]=\"t.aid\" placeholder=\"Enter Answer\" size=\"38\">\n          </div>\n        </div>\n      </section>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"basic = false\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"basic = false\">Submit</button>\n  </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/login/forget-psd/forget-psd.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/forget-psd/forget-psd.component.ts ***!
  \**********************************************************/
/*! exports provided: ForgetPsdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPsdComponent", function() { return ForgetPsdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mock-data/userInfo */ "./src/app/mock-data/userInfo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgetPsdComponent = /** @class */ (function () {
    function ForgetPsdComponent(fb) {
        this.fb = fb;
        this.secureQue = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_2__["SecurityQues"];
        this.time = [
            { id: 1, qid: 'Q1', aid: 'A1', question: '', answer: '' },
            { id: 2, qid: 'Q2', aid: 'A2', question: '', answer: '' },
            { id: 3, qid: 'Q3', aid: 'A3', question: '', answer: '' },
        ];
    }
    ForgetPsdComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ForgetPsdComponent.prototype.buildForm = function () {
        this.form3 = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Q1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Q2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Q3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            A1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            A2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            A3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ForgetPsdComponent.prototype, "basic", void 0);
    ForgetPsdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-psd',
            template: __webpack_require__(/*! ./forget-psd.component.html */ "./src/app/login/forget-psd/forget-psd.component.html"),
            styles: [__webpack_require__(/*! ./forget-psd.component.css */ "./src/app/login/forget-psd/forget-psd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ForgetPsdComponent);
    return ForgetPsdComponent;
}());



/***/ }),

/***/ "./src/app/login/forget-psd/forget-psd.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/login/forget-psd/forget-psd.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgetPsdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPsdModule", function() { return ForgetPsdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forget_psd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-psd.component */ "./src/app/login/forget-psd/forget-psd.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ForgetPsdModule = /** @class */ (function () {
    function ForgetPsdModule() {
    }
    ForgetPsdModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            declarations: [_forget_psd_component__WEBPACK_IMPORTED_MODULE_2__["ForgetPsdComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _forget_psd_component__WEBPACK_IMPORTED_MODULE_2__["ForgetPsdComponent"]
            ]
        })
    ], ForgetPsdModule);
    return ForgetPsdModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".special-letter {\n  color: cadetblue;\n  font-size: 36px;\n}\n\n\n.confirm-info {\n  font-size: 16px;\n  color: #002538;\n  margin-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <form class=\"login\" [formGroup]=\"loginForm\">\n    <label class=\"title\">\n      <h3 class=\"welcome\">Welcome to</h3>\n      <strong>Pitt <span class=\"special-letter\"> Well </span></strong>\n      <h5 class=\"hint\">A comprehension well-being assessment system</h5>\n    </label>\n    <div class=\"login-group\">\n      <div class=\"auth-source select\">\n        <select id=\"login-auth-source-1\" formControlName=\"loginRole\">\n          <option>Student</option>\n          <option>Staff</option>\n          <option>Faculty</option>\n        </select>\n      </div>\n      <input class=\"username\" type=\"text\" id=\"login_username\" placeholder=\"Username\" formControlName=\"loginName\">\n      <input class=\"password\" type=\"password\" id=\"login_password\" placeholder=\"Password\" formControlName=\"loginPsd\">\n      <!--<div class=\"checkbox\">-->\n        <!--<input type=\"checkbox\" id=\"rememberme\">-->\n        <!--<label for=\"rememberme\">-->\n          <!--Remember me-->\n        <!--</label>-->\n      <!--</div>-->\n      <div class=\"alert alert-danger\" *ngIf=\"invalidLogin\">\n        <div class=\"alert-items\">\n          <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n              <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n            </div>\n            <span class=\"alert-text\">\n                    Username or password is incorrect.\n                </span>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"loginForm.invalid\">Log In</button>\n      <a routerLink=\"\" class=\"signup\" (click)=\"signUp()\">Sign up</a>\n      <a routerLink=\"\" class=\"signup\" (click)=\"openForget()\">Forget Password</a>\n      <app-forget-psd [basic]=\"forget\"></app-forget-psd>\n      <div *ngIf=\"isValid\">\n        Invalid user name or password\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- Register Page-->\n<clr-wizard #wizardlg [(clrWizardOpen)]=\"lgOpen\" clrWizardSize=\"lg\">\n  <clr-wizard-title>User Registration</clr-wizard-title>\n\n  <clr-wizard-button [type]=\"'cancel'\">Cancel</clr-wizard-button>\n  <clr-wizard-button [type]=\"'previous'\">Back</clr-wizard-button>\n  <clr-wizard-button [type]=\"'next'\">Next</clr-wizard-button>\n  <clr-wizard-button [type]=\"'finish'\" (click)=\"register()\">Finish</clr-wizard-button>\n\n  <!--<clr-wizard-page [clrWizardPageNextDisabled]=\"!form1.valid\">-->\n  <clr-wizard-page [clrWizardPageNextDisabled]=\"form1.invalid\">\n    <ng-template clrPageTitle>Step 1</ng-template>\n    <form [formGroup]=\"form1\">\n    <section class=\"form-block\">\n      <div class=\"form-group\">\n        <label for=\"empUserName\">User name</label>\n        <label for=\"empUserName\"\n               aria-haspopup=\"true\"\n               role=\"tooltip\"\n               class=\"tooltip tooltip-validation tooltip-md\">\n          <input type=\"text\" id=\"empUserName\" placeholder=\"Enter Email As Username\"\n                 name=\"username\" formControlName=\"username\" required>\n          <span class=\"tooltip-content\"> User Name is Required. </span>\n        </label>\n      </div>\n      <div class=\"form-group\">\n      <label for=\"empFirstName\">First name</label>\n      <label for=\"empFirstName\"\n             aria-haspopup=\"true\"\n             role=\"tooltip\"\n             class=\"tooltip tooltip-validation tooltip-md\">\n        <input type=\"text\" id=\"empFirstName\" placeholder=\"Enter First Name\"\n               name=\"firstname\" formControlName=\"firstname\" required>\n        <span class=\"tooltip-content\"> First Name is Required. </span>\n      </label>\n    </div>\n      <div class=\"form-group\">\n        <label for=\"empLastName\">Last name</label>\n        <label for=\"empLastName\"\n               aria-haspopup=\"true\"\n               role=\"tooltip\"\n               class=\"tooltip tooltip-validation tooltip-md\">\n          <input type=\"text\" id=\"empLastName\" placeholder=\"Enter Last Name\"\n                 name=\"lastname\"\n                 formControlName=\"lastname\">\n          <span class=\"tooltip-content\">\n                    Last Name is Required.\n                </span>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"psd\">Password</label>\n        <label for=\"psd\"\n               aria-haspopup=\"true\"\n               role=\"tooltip\"\n               class=\"tooltip tooltip-validation tooltip-md\">\n          <input id=\"psd\" placeholder=\"Enter Password\"\n                 name=\"psd\"\n                 type=\"password\"\n                 formControlName=\"psd\" required>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"repsd\">Confirm Password</label>\n        <label for=\"repsd\"\n               aria-haspopup=\"true\"\n               role=\"tooltip\"\n               class=\"tooltip tooltip-validation tooltip-md\">\n          <input id=\"repsd\" placeholder=\"Reenter Password\"\n                 name=\"repsd\"\n                 type=\"password\"\n                 formControlName=\"repsd\" required>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"dateControl\">Date of Birth</label>\n        <input id=\"dateControl\" type=\"date\" clrDate formControlName=\"dob\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"empType\">User type</label>\n        <div class=\"select\">\n          <select id=\"empType\"\n                  name=\"role\"\n                  formControlName=\"role\" required>\n            <option value=\"Default\">Select User Type...</option>\n            <option *ngFor=\"let type of userType\" [value]=\"type.value\">{{type.value}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group\">\n      <label for=\"empGender\">Gender</label>\n      <div class=\"select\">\n        <select id=\"empGender\"\n                name=\"employeeGender\" formControlName=\"gender\" required>\n          <option value=\"Default\">Select User Gender...</option>\n          <option *ngFor=\"let ge of gender\" [value]=\"ge.value\">{{ge.value}}</option>\n        </select>\n      </div>\n    </div>\n      <br>\n    </section>\n    </form>\n  </clr-wizard-page>\n\n  <clr-wizard-page [clrWizardPageNextDisabled]=\"form2.invalid\">\n    <form [formGroup]=\"form2\">\n    <section class=\"form-block\">\n    <ng-template clrPageTitle>Step 2</ng-template>\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone</label>\n      <input id=\"phone\" type=\"text\" formControlName=\"phone\" placeholder=\"Enter Phone Number\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"empRace\">Race</label>\n      <div class=\"select\">\n        <select id=\"empRace\"\n                name=\"race\" formControlName=\"race\" required>\n          <option value=\"Default\">Select User Race...</option>\n          <option *ngFor=\"let race of races\" [value]=\"race.value\">{{race.viewValue}}</option>\n        </select>\n      </div>\n    </div>\n\n           <div class=\"form-group\">\n        <label for=\"empMarital\">Marital Status</label>\n        <div class=\"select\">\n          <select id=\"empMarital\"\n                  name=\"marital\" formControlName=\"marital\" required>\n            <option value=\"Default\">Select User Marital Status...</option>\n            <option *ngFor=\"let mar of maritals\" [value]=\"mar.value\">{{mar.viewValue}}</option>\n          </select>\n        </div>\n      </div>\n    </section>\n    </form>\n  </clr-wizard-page>\n\n  <!-- Security Questions-->\n  <clr-wizard-page [clrWizardPageNextDisabled]=\"form3.invalid\">\n    <ng-template clrPageTitle>Step 3</ng-template>\n    <form [formGroup]=\"form3\">\n      <section class=\"form-block\">\n        <div *ngFor=\"let t of time\">\n        <div class=\"form-group\">\n          <label>{{t.id}} .Security Question</label>\n          <div class=\"select\">\n            <select name=\"secq1\"\n                    [(ngModel)]=\"t.question\" [formControlName]=\"t.qid\" required>\n              <option *ngFor=\"let ques of secureQue\" [value]=\"ques.value\">{{ques.value}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>&nbsp; &nbsp; Security Answer</label>\n          <input type=\"text\" [(ngModel)]=\"t.answer\" [formControlName]=\"t.aid\" placeholder=\"Enter Answer\" size=\"38\">\n        </div>\n        </div>\n      </section>\n    </form>\n  </clr-wizard-page>\n  <clr-wizard-page [clrWizardPageNextDisabled]=\"form1.invalid || form2.invalid || form3.invalid\">\n    <ng-template clrPageTitle>Confirmation</ng-template>\n    <ul class=\"list\">\n      <li><label>User Name: </label><span class=\"confirm-info\"> {{ form1.get('username').value }}</span></li>\n      <li><label>First Name: </label><span class=\"confirm-info\"> {{ form1.get('firstname').value }}</span></li>\n      <li><label>Last Name: </label><span class=\"confirm-info\"> {{ form1.get('lastname').value }}</span></li>\n      <li><label>Role: </label><span class=\"confirm-info\"> {{ form1.get('role').value }}</span></li>\n      <li><label>Gender: </label><span class=\"confirm-info\"> {{ form1.get('gender').value }}</span></li>\n      <li><label>Date of birth: </label><span class=\"confirm-info\"> {{ form1.get('dob').value | date:\"MM/dd/yy\"}}</span></li>\n      <li><label>Phone: </label><span class=\"confirm-info\"> {{ form2.get('phone').value }}</span></li>\n      <li><label>Race: </label><span class=\"confirm-info\"> {{ form2.get('race').value }}</span></li>\n      <li><label>Marital Status: </label><span class=\"confirm-info\"> {{ form2.get('marital').value }}</span></li>\n\n      <div *ngFor=\"let t of time\">\n        <li><label>Security Question {{t.id}}: </label><span class=\"confirm-info\"> {{t.question}}</span></li>\n        <li><label>Security Answer {{t.id}}: </label><span class=\"confirm-info\"> {{t.answer}}</span></li>\n      </div>\n    </ul>\n  </clr-wizard-page>\n</clr-wizard>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock-data/userInfo */ "./src/app/mock-data/userInfo.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/state.service */ "./src/app/service/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, userService, stateService) {
        this.router = router;
        this.fb = fb;
        this.userService = userService;
        this.stateService = stateService;
        this.isValid = false;
        this.lgOpen = false;
        this.forget = false;
        this.invalidLogin = false;
        this.user = new _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
        this.registered = false;
        this.userType = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_4__["UserType"];
        this.gender = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_4__["Gender"];
        this.races = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_4__["Race"];
        this.maritals = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_4__["Marital"];
        this.secureQue = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_4__["SecurityQues"];
        this.time = [
            { id: 1, qid: 'Q1', aid: 'A1', question: '', answer: '' },
            { id: 2, qid: 'Q2', aid: 'A2', question: '', answer: '' },
            { id: 3, qid: 'Q3', aid: 'A3', question: '', answer: '' },
        ];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.stateService.token$.next("");
        });
        this.loginForm = this.fb.group({
            loginRole: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            loginName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loginPsd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.form1 = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
            firstname: ['', []],
            lastname: ['', []],
            psd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            repsd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.form2 = this.fb.group({
            phone: ['', []],
            race: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            marital: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.form3 = this.fb.group({
            Q1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Q2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Q3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        localStorage.clear();
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var loginInfo = {
            username: this.loginForm.controls['loginName'].value,
            password: this.loginForm.controls['loginPsd'].value,
            role: this.loginForm.controls['loginRole'].value,
        };
        this.userService.loginCheck(loginInfo).subscribe(function (value) {
            if (value && value.status != false) {
                _this.stateService.token$.next(value.accessToken);
                //console.log(value);
                var curUser = {
                    id: value.id,
                    username: _this.loginForm.controls['loginName'].value,
                    role: _this.loginForm.controls['loginRole'].value,
                    token: value.accessToken,
                };
                localStorage.setItem("curUser", JSON.stringify(curUser));
                _this.router.navigateByUrl("/dashboard");
            }
            else {
                _this.invalidLogin = true;
            }
        });
        // const curUser = {
        //   id: 1,
        //   username: this.loginForm.controls['loginName'].value,
        //   role: this.loginForm.controls['loginRole'].value
        // };
        // localStorage.setItem("curUser", JSON.stringify(curUser));
        // this.router.navigateByUrl("/dashboard");
    };
    LoginComponent.prototype.signUp = function () {
        this.lgOpen = true;
    };
    LoginComponent.prototype.openForget = function () {
        this.forget = true;
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        var newUser = new _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_4__["UserModel"]({
            userName: this.form1.controls['username'].value,
            email: this.form1.controls['username'].value,
            firstName: this.form1.controls['firstname'].value,
            lastName: this.form1.controls['lastname'].value,
            password: this.form1.controls['psd'].value,
            userType: this.form1.controls['role'].value,
            gender: this.form1.controls['gender'].value,
            birthDate: this.form1.controls['dob'].value,
            phone: this.form2.controls['phone'].value,
            race: this.form2.controls['race'].value,
            maritial: this.form2.controls['marital'].value,
            security: this.form3.value,
        });
        this.userService.addUser(newUser).subscribe(function (value) {
            console.log(value);
            if (_this.role !== undefined) {
                localStorage.setItem("curRole", _this.role);
            }
            // this.router.navigateByUrl("/dashboard");
        });
        this.registered = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("wizardlg"),
        __metadata("design:type", _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrWizard"])
    ], LoginComponent.prototype, "wizardLarge", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _service_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forget_psd_forget_psd_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-psd/forget-psd.module */ "./src/app/login/forget-psd/forget-psd.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _forget_psd_forget_psd_module__WEBPACK_IMPORTED_MODULE_6__["ForgetPsdModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
                ])
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
            exports: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _forget_psd_forget_psd_module__WEBPACK_IMPORTED_MODULE_6__["ForgetPsdModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map