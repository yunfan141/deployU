(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-profile-profile-module"],{

/***/ "./src/app/layout/workspace/profile/profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/workspace/profile/profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 600px;\n}\n\n\n.card-block {\n  height: 80%;\n  overflow: auto;\n  margin-bottom: 1px;\n}\n\n\n.card .card-text {\n  margin-bottom: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/layout/workspace/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/workspace/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n    <app-complete-card></app-complete-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <clr-icon shape=\"user\" size=\"36\"></clr-icon> &nbsp;\n          <span>Profile</span>\n        </div>\n\n        <div class=\"card-block\" style=\"margin-left: 10px\">\n\n          <clr-tabs>\n            <clr-tab>\n              <button clrTabLink id=\"link1\">Profile</button>\n              <clr-tab-content id=\"content1\" *clrIfActive=\"true\">\n                <div *ngIf=\"profileForm\">\n                  <form [formGroup]=\"profileForm\">\n                    <section class=\"form-block\">\n                      <div class=\"form-group\">\n                        <label for=\"empUserName\">User name</label>\n                        <label for=\"empUserName\"\n                               aria-haspopup=\"true\"\n                               role=\"tooltip\"\n                               class=\"tooltip tooltip-validation tooltip-md\">\n                          <input type=\"text\" id=\"empUserName\"\n                                 name=\"username\" formControlName=\"username\" disabled>\n                          <span class=\"tooltip-content\"> User Name is Required. </span>\n                        </label>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"empFirstName\">First name</label>\n                        <label for=\"empFirstName\"\n                               aria-haspopup=\"true\"\n                               role=\"tooltip\"\n                               class=\"tooltip tooltip-validation tooltip-md\">\n                          <input type=\"text\" id=\"empFirstName\" placeholder=\"Enter First Name\"\n                                 name=\"firstname\" formControlName=\"firstname\">\n                          <span class=\"tooltip-content\"> First Name is Required. </span>\n                        </label>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"empLastName\">Last name</label>\n                        <label for=\"empLastName\"\n                               aria-haspopup=\"true\"\n                               role=\"tooltip\"\n                               class=\"tooltip tooltip-validation tooltip-md\">\n                          <input type=\"text\" id=\"empLastName\" placeholder=\"Enter Last Name\"\n                                 name=\"lastname\"\n                                 formControlName=\"lastname\">\n                        </label>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"dateControl\">Date of Birth</label>\n                        <input id=\"dateControl\" type=\"date\" clrDate formControlName=\"dob\" required>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"empType\">User type</label>\n                        <div class=\"select\">\n                          <select id=\"empType\"\n                                  name=\"role\"\n                                  formControlName=\"role\" required>\n                            <option *ngFor=\"let type of userType\" [value]=\"type.value\">{{type.value}}</option>\n                          </select>\n                        </div>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"empGender\">Gender</label>\n                        <div class=\"select\">\n                          <select id=\"empGender\"\n                                  name=\"employeeGender\" formControlName=\"gender\" required>\n                            <option *ngFor=\"let ge of gender\" [value]=\"ge.value\">{{ge.value}}</option>\n                          </select>\n                        </div>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"phone\">Phone</label>\n                        <input id=\"phone\" type=\"text\" formControlName=\"phone\">\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"empMarital\">Marital Status</label>\n                        <div class=\"select\">\n                          <select id=\"empMarital\"\n                                  name=\"marital\" formControlName=\"marital\" required>\n                            <option *ngFor=\"let mar of maritals\" [value]=\"mar.value\">{{mar.viewValue}}</option>\n                          </select>\n                        </div>\n                      </div>\n\n                      <form #form=\"ngForm\" novalidate>\n                        <section class=\"form-block\">\n                          <div class=\"form-group\">\n                            <label>Change Password</label>\n                            <clr-checkbox\n                              name=\"termsCheckbox\"\n                              id=\"checkrads_11\"\n                              [(ngModel)]=\"changePassword\">\n                              Click to change the password.\n                            </clr-checkbox>\n                          </div>\n                        </section>\n                      </form>\n\n                      <div *ngIf=\"changePassword\">\n                        <div class=\"form-group\">\n                          <label for=\"psd\">New Password</label>\n                          <label for=\"psd\"\n                                 aria-haspopup=\"true\"\n                                 role=\"tooltip\"\n                                 class=\"tooltip tooltip-validation tooltip-md\">\n                            <input type=\"text\" id=\"psd\" placeholder=\"Enter Password\"\n                                   name=\"psd\"\n                                   formControlName=\"psd\" required>\n                          </label>\n                        </div>\n                        <div class=\"form-group\">\n                          <label for=\"repsd\">Confirm Password</label>\n                          <label for=\"repsd\"\n                                 aria-haspopup=\"true\"\n                                 role=\"tooltip\"\n                                 class=\"tooltip tooltip-validation tooltip-md\">\n                            <input type=\"text\" id=\"repsd\" placeholder=\"Reenter Password\"\n                                   name=\"repsd\"\n                                   formControlName=\"repsd\" required>\n                          </label>\n                        </div>\n                      </div>\n                    </section>\n                  </form>\n                </div>\n\n                <button class=\"btn btn-primary\" (click)=\"submitProfile()\">Confirm Change</button>\n                <button class=\"btn btn-success\" (click)=\"goBack()\">Back</button>\n              </clr-tab-content>\n            </clr-tab>\n\n            <clr-tab>\n              <button clrTabLink>Security Question</button>\n              <clr-tab-content *clrIfActive>\n                <form [formGroup]=\"securityForm\">\n                  <section class=\"form-block\">\n                    <div *ngFor=\"let t of time\">\n                      <div class=\"form-group\">\n                        <label>{{t.id}} .Security Question</label>\n                        <div class=\"select\">\n                          <select name=\"secq1\"\n                                   [formControlName]=\"t.qid\" required>\n                            <option *ngFor=\"let ques of secureQue\" [value]=\"ques.value\">{{ques.value}}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label>&nbsp; &nbsp; Security Answer</label>\n                        <input type=\"text\" [formControlName]=\"t.aid\" placeholder=\"Enter Answer\" size=\"38\">\n                      </div>\n                    </div>\n                  </section>\n                </form>\n                <button class=\"btn btn-primary\" (click)=\"submitSecurity()\">Confirm Change</button>\n                <button class=\"btn btn-success\" (click)=\"goBack()\">Back</button>\n              </clr-tab-content>\n            </clr-tab>\n          </clr-tabs>\n\n\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/workspace/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mock-data/userInfo */ "./src/app/mock-data/userInfo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.user = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__["USER1"];
        this.userId = JSON.parse(localStorage.getItem('curUser')).id;
        this.changePassword = false;
        this.userType = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__["UserType"];
        this.gender = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__["Gender"];
        this.races = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__["Race"];
        this.maritals = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__["Marital"];
        this.secureQue = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__["SecurityQues"];
        this.time = [
            { id: 1, qid: 'Q1', aid: 'A1', question: '', answer: '' },
            { id: 2, qid: 'Q2', aid: 'A2', question: '', answer: '' },
            { id: 3, qid: 'Q3', aid: 'A3', question: '', answer: '' },
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUserById();
    };
    ProfileComponent.prototype.getUserById = function () {
        var _this = this;
        this.userService.getUserById(this.userId).subscribe(function (value) {
            _this.user1 = value;
            _this.profileForm = _this.fb.group({
                username: [_this.user1.userName],
                firstname: [_this.user1.firstName],
                lastname: [_this.user1.lastName],
                dob: [_this.user1.birthDate],
                role: [_this.user1.userType],
                gender: [_this.user1.gender],
                phone: [_this.user1.phone],
                marital: [_this.user1.maritial],
                psd: [_this.user1.password],
                repsd: [_this.user1.password],
            });
            _this.securityForm = _this.fb.group({
                Q1: [_this.user1.security.Q1],
                Q2: [_this.user1.security.Q2],
                Q3: [_this.user1.security.Q3],
                A1: [_this.user1.security.A1],
                A2: [_this.user1.security.A2],
                A3: [_this.user1.security.A3],
            });
        });
    };
    ProfileComponent.prototype.goBack = function () {
        window.history.back();
    };
    ProfileComponent.prototype.submitProfile = function () {
        this.userService.updateUser(this.userId, this.profileForm.value).subscribe(function (value) {
            // console.log(value);
        });
    };
    ProfileComponent.prototype.submitSecurity = function () {
        this.userService.updateUser(this.userId, { security: this.securityForm.value }).subscribe(function (value) {
            console.log(value);
        });
        console.log(this.securityForm.value);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/layout/workspace/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/layout/workspace/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/workspace/profile/profile.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/workspace/profile/profile.module.ts ***!
  \************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "./src/app/layout/workspace/profile/profile.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../complete-card/complete-card.module */ "./src/app/layout/workspace/complete-card/complete-card.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_6__["CompleteCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] }
                ])
            ],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_6__["CompleteCardModule"],
                _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=workspace-profile-profile-module.js.map