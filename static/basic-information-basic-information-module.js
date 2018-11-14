(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-information-basic-information-module"],{

/***/ "./src/app/admin/basic-information/basic-information.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/basic-information/basic-information.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n    margin-top: 10px;\n    margin-left: 10px;\n    font-size: 20px;\n  }\n  \n  \n  .btn .btn-link .nav-link {\n    font-size: 16px;\n  }\n  \n  \n  .main-container {\n    height: 100%;\n  }\n  \n  \n  .left-card{\n    padding-left: 30px;\n  }\n  \n  \n  .btn-outlin{\n    margin-top: 5px;\n  }\n  \n  \n  .td{\n    text-align: left;\n  }"

/***/ }),

/***/ "./src/app/admin/basic-information/basic-information.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/basic-information/basic-information.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div class=\"row\">\n      <app-admin-card></app-admin-card>\n          <div style=\"width: 820px\">\n            <!-- <div class=\"card-title\">\n              <clr-icon shape=\"add-text\" size=\"36\"></clr-icon> &nbsp;\n              <span> Basic Information Ratio</span>\n            </div>\n            <div class=\"card-block\">\n              <div style=\"display: block; padding-top: 30px\">\n                <canvas baseChart\n                        [data]=\"doughnutChartData\"\n                        [labels]=\"doughnutChartLabels\"\n                        [chartType]=\"doughnutChartType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></canvas>\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"row\">\n                <div class=\"form-group\" style=\"padding-top: 5px; paddding-left: 10px; margin-left: 8px;\">\n                  <form [formGroup]=\"attrForm\">\n                  <label style=\"font-size: 16px; color: darkblue; padding-bottom: 18px\">Select User Attribute</label>\n                  <div class=\"radio\" *ngFor=\"let item of attributs\">\n                    <input type=\"radio\" name=\"attribute\" [id]=\"item.value\" formControlName=\"attribute\" [value]=\"item.value\">\n                    <label [for]=\"item.value\"> {{ item.label }}</label>\n                  </div>\n                  </form>\n                </div>\n                <!-- <table class=\"table table-responsive table-condensed\">\n                    <tr>\n                      <th>User Attribute</th>\n                      <th *ngFor=\"let attribute of attributes\">{{attribute}}</th>\n                    </tr>\n                    <tr *ngFor=\"let d of lineChartData\">\n                      <td>{{d.label}}</td>\n                      <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\n                    </tr>\n                </table> -->\n            <div style=\"padding-top: 5px; paddding-left: 10px; margin-left: 8px\">\n                <table style=\"width: 800px\" class=\"table table-responsive table-condensed\">\n                    <tr>\n                      <th>User Attribute</th>\n                      <th>number</th>\n                    </tr>\n                    <tr>\n                      <td style=\"font-weight: bold\">Role</td>\n                      <td></td>\n                    </tr>\n                    <tr>\n                      <td style=\"text-align: left\" >student</td>\n                      <td>{{ num_student }}</td>\n                    </tr>\n                    <tr>\n                      <td style=\"text-align: left\"> staff</td>\n                      <td>{{ num_staff }}</td>\n                    </tr>\n                    <tr>\n                      <td style=\"text-align: left\">faculty</td>\n                      <td>{{ num_faculty }}</td>\n                    </tr>\n                    <tr>\n                        <td style=\"font-weight: bold\">Gender</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td style=\"text-align: left\" >Male</td>\n                        <td>{{ num_male }}</td>\n                      </tr>\n                      <tr>\n                        <td style=\"text-align: left\"> female</td>\n                        <td>{{ num_female }}</td>\n                      </tr>\n                      <tr>\n                          <td style=\"font-weight: bold\">Age</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td style=\"text-align: left\" >0-10</td>\n                          <td>{{ num_age10 }}</td>\n                        </tr>\n                        <tr>\n                          <td style=\"text-align: left\"> 10-20</td>\n                          <td>{{ num_age20 }}</td>\n                        </tr>\n                        <tr>\n                          <td style=\"text-align: left\">30-40</td>\n                          <td>{{ num_age30 }}</td>\n                        </tr>\n                        <tr>\n                            <td style=\"text-align: left\">40-50</td>\n                            <td>{{ num_age40 }}</td>\n                        </tr>\n                        <tr>\n                            <td style=\"text-align: left\">over 50</td>\n                            <td>{{ num_age50 }}</td>\n                        </tr>\n                </table>\n            </div>\n              <th></th>\n              <button class=\"btn btn-outline\" routerLink=\"/adminDashboard/user-summary\">User Summary</button>\n              <button class=\"btn btn-outline\" routerLink=\"/adminDashboard/data-summary\">Data Summary</button>\n              <button class=\"btn btn-outline\" routerLink=\"/adminDashboard/basic-information\">Basic Information Summary</button>\n          </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/basic-information/basic-information.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/basic-information/basic-information.component.ts ***!
  \************************************************************************/
/*! exports provided: BasicInformationComponent, USERATTR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInformationComponent", function() { return BasicInformationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERATTR", function() { return USERATTR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicInformationComponent = /** @class */ (function () {
    function BasicInformationComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.attributs = USERATTR;
        this.selectedAttribute = "Role";
        this.num_student = 0;
        this.num_staff = 0;
        this.num_faculty = 0;
        this.num_Male = 0;
        this.num_female = 0;
        this.num_age10 = 0;
        this.num_age20 = 0;
        this.num_age30 = 0;
        this.num_age40 = 0;
        this.num_age50 = 0;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Physical', 'Spiritual', 'Relational', 'Behavioral', 'Eco-economical', 'Psychological', 'Overall'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.attributes = ['Role', 'Gender', 'Age', 'Race', 'Marital Status'];
        this.doughnutChartLabels = ['Student', 'Faculty', 'Staff'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
    }
    // events
    BasicInformationComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    BasicInformationComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    BasicInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUser().subscribe(function (value) {
            value.forEach(function (item) {
                if (item.userType == 'Student') {
                    _this.num_student++;
                }
                if (item.userType == 'Staff') {
                    _this.num_staff++;
                }
                if (item.userType == 'Faculty') {
                    _this.num_faculty++;
                }
                if (item.gender == 'Male') {
                    _this.num_Male++;
                }
                if (item.gender == 'Student') {
                    _this.num_female++;
                }
                if (item.userType == 'Student') {
                    _this.num_student++;
                }
                var birthday = new Date(item.birthDate);
                var today = new Date();
                var age = today.getFullYear() - birthday.getFullYear();
                console.log(age);
                if (age < 10) {
                    _this.num_age10++;
                }
                else if (age < 20) {
                    _this.num_age20++;
                }
                else if (age < 30) {
                    _this.num_age30++;
                }
                else if (age < 40) {
                    _this.num_age40++;
                }
                else {
                    _this.num_age50++;
                }
            });
        });
    };
    BasicInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-information',
            template: __webpack_require__(/*! ./basic-information.component.html */ "./src/app/admin/basic-information/basic-information.component.html"),
            styles: [__webpack_require__(/*! ./basic-information.component.css */ "./src/app/admin/basic-information/basic-information.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], BasicInformationComponent);
    return BasicInformationComponent;
}());

var USERATTR = [
    { label: 'Role', value: 'Role' },
    { label: 'Gender', value: 'Gender' },
    { label: 'Age', value: 'Age' },
    { label: 'Race', value: 'Race' },
    { label: 'Marital Status', value: 'Marital Status' }
];


/***/ }),

/***/ "./src/app/admin/basic-information/basic-information.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/basic-information/basic-information.module.ts ***!
  \*********************************************************************/
/*! exports provided: BasicInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInformationModule", function() { return BasicInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic-information/basic-information.component */ "./src/app/admin/basic-information/basic-information.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-card/admin-card.module */ "./src/app/admin/admin-card/admin-card.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BasicInformationModule = /** @class */ (function () {
    function BasicInformationModule() {
    }
    BasicInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_4__["AdminCardModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: '', component: _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_2__["BasicInformationComponent"] }
                ])
            ],
            declarations: [_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_2__["BasicInformationComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_4__["AdminCardModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_2__["BasicInformationComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], BasicInformationModule);
    return BasicInformationModule;
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
//# sourceMappingURL=basic-information-basic-information-module.js.map