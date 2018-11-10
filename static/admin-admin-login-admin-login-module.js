(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-login-admin-login-module"],{

/***/ "./src/app/admin/admin-login/admin-login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".special-letter {\n  color: cadetblue;\n  font-size: 36px;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <form class=\"login\" [formGroup]=\"form\">\n    <label class=\"title\">\n      <h3 class=\"welcome\">Welcome to</h3>\n      <strong>Pitt <span class=\"special-letter\">Well</span></strong>\n      <h5 class=\"hint\">A comprehension well-being assessment system</h5>\n    </label>\n    <div class=\"login-group\">\n      <input class=\"username\" type=\"text\" id=\"login_username\" placeholder=\"Username\" formControlName=\"username\">\n      <input class=\"password\" type=\"password\" id=\"login_password\" placeholder=\"Password\" formControlName=\"password\">\n      <!--<div class=\"checkbox\">-->\n        <!--<input type=\"checkbox\" id=\"rememberme\">-->\n        <!--<label for=\"rememberme\">-->\n          <!--Remember me-->\n        <!--</label>-->\n      <!--</div>-->\n      <div class=\"alert alert-danger\" *ngIf=\"invalidLogin\">\n        <div class=\"alert-items\">\n          <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n              <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n            </div>\n            <span class=\"alert-text\">\n                    Username or password is incorrect.\n                </span>\n          </div>\n\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login();$event.preventDefault()\" [disabled]=\"form.invalid\">Log In</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
  \************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/state.service */ "./src/app/service/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(fb, router, userService, stateService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.stateService = stateService;
        this.invalidLogin = false;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.stateService.token$.next("");
        });
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        localStorage.clear();
    };
    AdminLoginComponent.prototype.login = function () {
        var _this = this;
        var logInfo = {
            username: this.form.controls['username'].value,
            password: this.form.controls['password'].value,
            role: 'Admin'
        };
        this.userService.loginCheck(logInfo).subscribe(function (value) {
            if (value && value.status != false) {
                _this.stateService.token$.next(value.accessToken);
                var curUser = {
                    id: value.id,
                    username: _this.form.controls['username'].value,
                    role: "admin",
                    token: value.accessToken
                };
                localStorage.setItem('curUser', JSON.stringify(curUser));
                _this.router.navigateByUrl('adminDashboard');
            }
            else {
                _this.invalidLogin = true;
            }
        });
    };
    AdminLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/admin/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _service_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginModule", function() { return AdminLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminLoginModule = /** @class */ (function () {
    function AdminLoginModule() {
    }
    AdminLoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _admin_login_component__WEBPACK_IMPORTED_MODULE_2__["AdminLoginComponent"] },
                    { path: 'dashboard', loadChildren: '../admin-dashboard/admin-dashboard.module#AdminDashboardModule' },
                ]),
            ],
            declarations: [_admin_login_component__WEBPACK_IMPORTED_MODULE_2__["AdminLoginComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _admin_login_component__WEBPACK_IMPORTED_MODULE_2__["AdminLoginComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ]
        })
    ], AdminLoginModule);
    return AdminLoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-login-admin-login-module.js.map