(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-subnav-subnav-module"],{

/***/ "./src/app/layout/subnav/subnav.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/subnav/subnav.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav .nav-link {\n  font-size: 16px;\n}\n"

/***/ }),

/***/ "./src/app/layout/subnav/subnav.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/subnav/subnav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-header></app-header>\n  <!--<nav class=\"subnav\">-->\n    <!--<ul class=\"nav\">-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link active\" href=\"#\">Physical Domain</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link\" href=\"#\">Behavioral Domain</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link\" href=\"#\">Spiritual Domain</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n  <!--</nav>-->\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/subnav/subnav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/subnav/subnav.component.ts ***!
  \***************************************************/
/*! exports provided: SubnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavComponent", function() { return SubnavComponent; });
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

var SubnavComponent = /** @class */ (function () {
    function SubnavComponent() {
    }
    SubnavComponent.prototype.ngOnInit = function () {
    };
    SubnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subnav',
            template: __webpack_require__(/*! ./subnav.component.html */ "./src/app/layout/subnav/subnav.component.html"),
            styles: [__webpack_require__(/*! ./subnav.component.css */ "./src/app/layout/subnav/subnav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubnavComponent);
    return SubnavComponent;
}());



/***/ }),

/***/ "./src/app/layout/subnav/subnav.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/subnav/subnav.module.ts ***!
  \************************************************/
/*! exports provided: SubnavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavModule", function() { return SubnavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subnav.component */ "./src/app/layout/subnav/subnav.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.module */ "./src/app/layout/header/header.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subnav_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subnav.route */ "./src/app/layout/subnav/subnav.route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SubnavModule = /** @class */ (function () {
    function SubnavModule() {
    }
    SubnavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_subnav_route__WEBPACK_IMPORTED_MODULE_6__["routes"]),
            ],
            declarations: [_subnav_component__WEBPACK_IMPORTED_MODULE_2__["SubnavComponent"]],
            exports: [
                _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _subnav_component__WEBPACK_IMPORTED_MODULE_2__["SubnavComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ]
        })
    ], SubnavModule);
    return SubnavModule;
}());



/***/ }),

/***/ "./src/app/layout/subnav/subnav.route.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/subnav/subnav.route.ts ***!
  \***********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _subnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subnav.component */ "./src/app/layout/subnav/subnav.component.ts");

var routes = [
    {
        path: '',
        component: _subnav_component__WEBPACK_IMPORTED_MODULE_0__["SubnavComponent"],
        children: [
            { path: '', redirectTo: 'dash', pathMatch: 'full' },
            { path: 'question', loadChildren: '../workspace/questionnaire/questionnaire.module#QuestionnaireModule' },
            { path: 'demographic', loadChildren: '../workspace/demographic/demographic.module#DemographicModule' },
            { path: 'dash', loadChildren: '../workspace/dashboard/dashboard.module#DashboardModule' },
            { path: 'session-list', loadChildren: '../workspace/session-list/session-list.module#SessionListModule' },
            { path: 'score-graph', loadChildren: '../workspace/score-graph/score-graph.module#ScoreGraphModule' },
            { path: 'profile', loadChildren: '../workspace/profile/profile.module#ProfileModule' },
            { path: 'answer-list', loadChildren: '../workspace/answer-list/answer-list.module#AnswerListModule' },
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=layout-subnav-subnav-module.js.map