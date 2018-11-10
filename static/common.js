(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/admin-card/admin-card.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-card/admin-card.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-card {\n  float: left;\n}\n\n.card {\n  width: 360px;\n  height: 586px;\n}\n\n.card-title {\n  margin-left: 10px;\n  color: #002538;\n}\n\n.pro-label {\n  width: 120px;\n}\n\n.progress-block {\n  padding-bottom: 5px;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin-card/admin-card.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-card/admin-card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Administrator Info\n    </div>\n    <div class=\"card-block\">\n      <br>\n      <div class=\"card-media-block\">\n        <img src=\"../../../assets/user.png\" class=\"card-media-image\">\n        <div class=\"card-media-description\">\n          <span class=\"card-media-title\"> {{admin.username}} </span>\n          <span class=\"card-media-text\">  System Administrator </span>\n        </div>\n      </div>\n      <br>\n      <div class=\"card-text\">\n        <div class=\"card-divider\"></div>\n        <p class=\"card-title\"> Visitors This Week</p>\n        <br>\n      <div class=\"progress-block\">\n        <label class=\"pro-label\">Student</label>\n        <div class=\"progress-static\">\n          <div class=\"progress-meter\" data-value=\"20\"></div>\n        </div>\n      </div>\n      <div class=\"progress-block\">\n        <label class=\"pro-label\">Staff</label>\n        <div class=\"progress-static\">\n          <div class=\"progress-meter\" data-value=\"50\"></div>\n        </div>\n      </div>\n      <div class=\"progress-block\">\n        <label class=\"pro-label\">Faculty</label>\n        <div class=\"progress success\">\n          <progress value=\"44\" max=\"100\" data-displayval=\"...%\"></progress>\n        </div>\n      </div>\n        <br>\n\n        <!--Visitors component TODO: add list -->\n    </div>\n    </div>\n    <div class=\"card-footer\">\n      <!--<a routerLink=\"/adminDashboard/user-summary\" class=\"card-link\">More Information</a>-->\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-card/admin-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-card/admin-card.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCardComponent", function() { return AdminCardComponent; });
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

var AdminCardComponent = /** @class */ (function () {
    function AdminCardComponent() {
        this.admin = JSON.parse(localStorage.getItem('curUser'));
    }
    AdminCardComponent.prototype.ngOnInit = function () {
    };
    AdminCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-card',
            template: __webpack_require__(/*! ./admin-card.component.html */ "./src/app/admin/admin-card/admin-card.component.html"),
            styles: [__webpack_require__(/*! ./admin-card.component.css */ "./src/app/admin/admin-card/admin-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminCardComponent);
    return AdminCardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-card/admin-card.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/admin-card/admin-card.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCardModule", function() { return AdminCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-card.component */ "./src/app/admin/admin-card/admin-card.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _layout_workspace_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/workspace/footer/footer.module */ "./src/app/layout/workspace/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminCardModule = /** @class */ (function () {
    function AdminCardModule() {
    }
    AdminCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _layout_workspace_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
            ],
            declarations: [_admin_card_component__WEBPACK_IMPORTED_MODULE_2__["AdminCardComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _layout_workspace_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
                _admin_card_component__WEBPACK_IMPORTED_MODULE_2__["AdminCardComponent"],
            ]
        })
    ], AdminCardModule);
    return AdminCardModule;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .branding .title {\n  font-size: 25px;\n}\n\nheader .header-nav .nav-text {\n  font-size: 20px;\n}\n\n.nav-icon {\n  margin-right: 20px;\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header header-6\">\n  <div class=\"branding\">\n    <a routerLink=\"/dashboard\" class=\"logo-and-title\">\n      <clr-icon shape=\"vm-bug\"></clr-icon>\n      <span class=\"title\">Pitt Wellness Scale</span>\n    </a>\n  </div>\n  <div class=\"header-nav\">\n    <div *ngIf=\"!isAdmin; else adminHeader\">\n      <a routerLink=\"/dashboard\" class=\"nav-link\"><span class=\"nav-text\">Dashboard</span></a>\n      <a routerLink=\"/dashboard/question\" class=\"nav-link\"><span class=\"nav-text\">Questionnaire</span></a>\n      <a routerLink=\"/dashboard/session-list\" class=\"nav-link\"><span class=\"nav-text\">Sessions</span></a>\n      <!--<a routerLink=\"/dashboard/demographic\" class=\"nav-link\"><span class=\"nav-text\">Demographic</span></a>-->\n    </div>\n    <ng-template #adminHeader>\n      <a routerLink=\"/adminDashboard\" class=\"nav-link\"><span class=\"nav-text\">Dashboard</span></a>\n      <a routerLink=\"/adminDashboard/input-question\" class=\"nav-link\"><span class=\"nav-text\">Questions</span></a>\n      <a routerLink=\"/adminDashboard/input-domain\" class=\"nav-link\"><span class=\"nav-text\">Domains</span></a>\n      <a routerLink=\"/adminDashboard/ques-manage\" class=\"nav-link\"><span class=\"nav-text\">Question List</span></a>\n    </ng-template>\n  </div>\n  <div class=\"header-actions\">\n    <clr-dropdown>\n      <button class=\"nav-icon\" clrDropdownTrigger>\n        <clr-icon shape=\"cog\"></clr-icon>\n        <clr-icon shape=\"caret down\"></clr-icon>\n      </button>\n      <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n        <div *ngIf=\"isAdmin; else user\">\n          <a routerLink=\"/admin\" clrDropdownItem>Log out</a>\n        </div>\n        <ng-template #user>\n          <a routerLink=\"/dashboard/profile\" clrDropdownItem>Edit Profile</a>\n          <a routerLink=\"/login\" clrDropdownItem>Log out</a>\n        </ng-template>\n      </clr-dropdown-menu>\n    </clr-dropdown>\n  </div>\n</header>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isAdmin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var role = JSON.parse(localStorage.getItem('curUser')).role;
        if (role == 'admin') {
            this.isAdmin = true;
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/layout/workspace/questionnaire/question/question.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/layout/workspace/questionnaire/question/question.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ques-label {\n  font-size: 16px;\n}\n\n"

/***/ }),

/***/ "./src/app/layout/workspace/questionnaire/question/question.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/workspace/questionnaire/question/question.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\n  <section class=\"form-block\" style=\"margin-bottom:10px\">\n  <label class=\"ques-label\">{{question.id + '. ' + question.label}}</label>\n  <div [ngSwitch]=\"question.type\">\n    <!--text question -->\n    <div class=\"form-group\" *ngSwitchCase=\"'textbox'\">\n      <label for=\"input1\">Input your answer: </label>\n      <input type=\"text\" id=\"input1\" size=\"15\"  [formControlName]=\"question.id\" class=\"inputbox\">\n    </div>\n\n    <!-- dropdown question-->\n    <div class=\"form-group\" *ngSwitchCase=\"'dropdown'\">\n      <label for=\"select1\">Select your answer</label>\n      <div class=\"select\">\n        <select id=\"select1\" [formControlName]=\"question.id\">\n          <option *ngFor=\"let opt of question.ansOptions\" [value]=\"opt.key\">{{opt.value}}</option>\n        </select>\n      </div>\n    </div>\n\n    <!-- radio button question-->\n    <div class=\"form-group\" *ngSwitchCase=\"'radiobutton'\">\n      <label>Select you answer:</label>\n      <div class=\"radio-inline\" *ngFor=\"let opt of question.ansOptions\">\n        <input type=\"radio\" [name]=\"question.id\" id=\"{{question.id}} + {{opt.eid}}\" value=\"{{opt.eid}}\" [formControlName]=\"question.id\">\n        <label for=\"{{question.id}} + {{opt.eid}}\">{{opt.value}}</label>\n      </div>\n    </div>\n\n  </div>\n  </section>\n  <!--<div class=\"errorMessage\" *ngIf=\"!isValid\">{{question.label}} is required</div>-->\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/questionnaire/question/question.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/workspace/questionnaire/question/question.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mock-data/Question */ "./src/app/mock-data/Question.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Questionnaire"])
    ], QuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], QuestionComponent.prototype, "form", void 0);
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/layout/workspace/questionnaire/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/layout/workspace/questionnaire/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/layout/workspace/questionnaire/question/question.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/workspace/questionnaire/question/question.module.ts ***!
  \****************************************************************************/
/*! exports provided: QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question.component */ "./src/app/layout/workspace/questionnaire/question/question.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            declarations: [_question_component__WEBPACK_IMPORTED_MODULE_2__["QuestionComponent"]],
            exports: [
                _question_component__WEBPACK_IMPORTED_MODULE_2__["QuestionComponent"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "./src/app/mock-data/userInfo.ts":
/*!***************************************!*\
  !*** ./src/app/mock-data/userInfo.ts ***!
  \***************************************/
/*! exports provided: UserModel, securQue, UserType, Gender, SecurityQues, Race, Marital, DOMAINS, SESSIONDATA, USER1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "securQue", function() { return securQue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQues", function() { return SecurityQues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Race", function() { return Race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marital", function() { return Marital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS", function() { return DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSIONDATA", function() { return SESSIONDATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER1", function() { return USER1; });
/** User info class defination */
var UserModel = /** @class */ (function () {
    function UserModel(options) {
        if (options === void 0) { options = {}; }
        this.firstName = options.firstName || '';
        this.lastName = options.lastName || '';
        this.userType = options.userType || '';
        this.userName = options.userName || '';
        this.password = options.password || '';
        this.gender = options.gender || '';
        this.phone = options.phone || '';
        this.email = options.email || '';
        this.birthDate = options.birthDate || '';
        this.race = options.race || '';
        this.maritial = options.maritial || '';
        this.security = options.security || {};
    }
    return UserModel;
}());

var securQue = /** @class */ (function () {
    function securQue(options) {
        if (options === void 0) { options = {}; }
        this.question = options.question || '';
        this.answer = options.answer || '';
    }
    return securQue;
}());

/** user info related data*/
var UserType = [
    { key: "student", value: "Student" },
    { key: "faculty", value: "Faculty" },
    { key: "staff", value: "Staff" },
];
var Gender = [
    { key: 'male', value: "Male" },
    { ley: 'female', value: 'Female' },
];
/**TODO: change security question to at least 10 questions */
var SecurityQues = [
    { key: 'Q1', value: "What is your favorite book?" },
    { key: 'Q2', value: "What is the name of the road you grew up on?" },
    { key: 'Q3', value: "What is your mother’s maiden name?" },
    { key: 'Q4', value: "What was the name of your first/current/favorite pet?" },
    { key: 'Q5', value: "What was the first company that you worked for?" },
    { key: 'Q6', value: "Where did you meet your spouse?" },
    { key: 'Q7', value: "Where did you go to high school/college?" },
    { key: 'Q8', value: "What is your favorite food?" },
    { key: 'Q9', value: "What city were you born in?" },
    { key: 'Q10', value: "Where is your favorite place to vacation?" }
];
var Race = [
    { value: 'Caucasian', viewValue: 'Caucasian' },
    { value: 'African American', viewValue: 'African American' },
    { value: 'Hispanic', viewValue: 'Hispanic' },
    { value: 'Bi-Racial', viewValue: 'Bi-Racial' },
    { value: 'Asian', viewValue: 'Asian' },
    { value: 'White', viewValue: 'White' },
    { value: 'Other', viewValue: 'Other' }
];
var Marital = [
    { value: 'Single', viewValue: 'Single' },
    { value: 'Married', viewValue: 'Married' },
    { value: 'Separated', viewValue: 'Separated' },
    { value: 'Divorced', viewValue: 'Divorced' }
];
var DOMAINS = [
    { key: 'Physical', value: 'Physical' },
    { key: 'Emotional', value: 'Emotional' },
    { key: 'Social', value: 'Social' },
    { key: 'Financial', value: 'Financial' },
    { key: 'Spiritual', value: 'Spiritual' },
    { key: 'Occupational', value: 'Occupational' },
    { key: 'Intellectual', value: 'Intellectual' }
];
var SESSIONDATA = [
    { id: 1, date: '10/02/2018' },
    { id: 2, date: '28/04/2018' }
];
var USER1 = {
    username: 'user1@outlook.com',
    firstname: 'John',
    lastname: 'Smith',
    gender: 'Male',
    dob: '12/02/1993',
    type: 'Student',
    phone: '412-232-1233',
    race: 'African American',
    marital: 'Single',
    password: 'abcd1234',
    Q1: 'What is your favorite book?',
    Q2: 'What is the name of the road you grew up on?',
    Q3: 'Where did you meet your spouse?',
    A1: 'Killing a mocking bird',
    A2: 'Rain Road',
    A3: 'Heaven',
};


/***/ })

}]);
//# sourceMappingURL=common.js.map