(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-dashboard-admin-dashboard-module"],{

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav .nav-link {\n  font-size: 16px;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-header></app-header>\n  <!--<nav class=\"subnav\">-->\n    <!--<ul class=\"nav\">-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link\" routerLink=\"/adminDashboard/input-domain\">Create Domain</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link\" routerLink=\"/adminDashboard/input-question\">Create Questions</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n  <!--</nav>-->\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
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

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: routes, AdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _layout_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/header/header.module */ "./src/app/layout/header/header.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '',
        component: _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"],
        children: [
            { path: '', redirectTo: 'user-summary', patchMatch: 'full' },
            { path: 'basic-information', loadChildren: '../basic-information/basic-information.module#BasicInformationModule' },
            { path: 'input-question', loadChildren: '../input-question/input-question.module#InputQuestionModule' },
            { path: 'data-summary', loadChildren: '../data-summary/data-summary.module#DataSummaryModule' },
            { path: 'input-domain', loadChildren: '../input-domain/input-domain.module#InputDomainModule' },
            { path: 'ques-manage', loadChildren: '../ques-manage/ques-manage.module#QuesManageModule' },
            { path: 'user-summary', loadChildren: '../user-summary/user-summary.module#UserSummaryModule' },
            { path: 'edit-question', loadChildren: '../edit-question/edit-question.module#EditQuestionModule' }
        ]
    }
];
var AdminDashboardModule = /** @class */ (function () {
    function AdminDashboardModule() {
    }
    AdminDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _layout_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"]],
            exports: [
                _layout_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ]
        })
    ], AdminDashboardModule);
    return AdminDashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-dashboard-admin-dashboard-module.js.map