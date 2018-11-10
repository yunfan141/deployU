(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-summary-data-summary-module"],{

/***/ "./src/app/admin/data-summary/data-summary.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/data-summary/data-summary.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1000px;\n  height: 580px;\n}\n\n\n.card-block {\n  margin-left: 10px;\n}\n\n\nli {\n  font-size: 18px;\n  padding-bottom: 10px;\n}\n\n\n.card-footer {\n  position: absolute;\n  margin-bottom: 15px;\n}\n\n\n.weight {\n  left: 400px;\n  font-size: 16px;\n  position: absolute;\n}\n\n\n.delete {\n  position: absolute;\n  left: 900px;\n}\n\n\n.btn-outline {\n  margin-top: 5px;\n}\n"

/***/ }),

/***/ "./src/app/admin/data-summary/data-summary.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/data-summary/data-summary.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n    <app-admin-card></app-admin-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <!-- admin data analysis -->\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <clr-icon shape=\"add-text\" size=\"36\"></clr-icon> &nbsp;\n          <span> Visitors Timeline | Year: {{today | date:'yyyy'}}</span>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-block\">\n          <!--graph and table -->\n          <div class=\"col-md-12\">\n            <div style=\"display: block;\">\n              <canvas baseChart style=\"width: 1200px; height: 320px\"\n                      [datasets]=\"lineChartData\"\n                      [labels]=\"lineChartLabels\"\n                      [options]=\"lineChartOptions\"\n                      [legend]=\"lineChartLegend\"\n                      [chartType]=\"lineChartType\"\n                      (chartHover)=\"chartHovered($event)\"\n                      (chartClick)=\"chartClicked($event)\"></canvas>\n            </div>\n          </div>\n          <div class=\"col-md-12\" style=\"margin-bottom: 10px; margin-top: 10px;\">\n            <table class=\"table table-responsive table-condensed\">\n              <tr>\n                <th>User Type</th>\n                <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\n              </tr>\n              <tr *ngFor=\"let d of lineChartData\">\n                <td>{{d.label}}</td>\n                <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\n              </tr>\n            </table>\n            <button class=\"btn btn-outline\" routerLink=\"/adminDashboard/user-summary\">User Summary</button>\n            <button class=\"btn btn-outline\" routerLink=\"/adminDashboard/data-summary\">Data Summary</button>\n            <button class=\"btn btn-outline\" routerLink=\"/adminDashboard/basic-information\">Basic Information Summary</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/data-summary/data-summary.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/data-summary/data-summary.component.ts ***!
  \**************************************************************/
/*! exports provided: DataSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSummaryComponent", function() { return DataSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/question.service */ "./src/app/service/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataSummaryComponent = /** @class */ (function () {
    function DataSummaryComponent(questionService) {
        this.questionService = questionService;
        this.today = Date.now();
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Students' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Faculty' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Staff' }
        ];
        this.lineChartLabels = ['October', 'November', 'December', 'January', 'February', 'March', 'April'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    DataSummaryComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DataSummaryComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DataSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getRoleScore(1).subscribe(function (value) {
            var _lineChartData = [{ "data": value.Student.slice(7), "label": "Student" }, { "data": value.Faculty.slice(7), "label": "Faculty" }, { "data": value.Staff.slice(7), "label": "Staff" }];
            _this.lineChartData = _lineChartData;
        });
    };
    DataSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-summary',
            template: __webpack_require__(/*! ./data-summary.component.html */ "./src/app/admin/data-summary/data-summary.component.html"),
            styles: [__webpack_require__(/*! ./data-summary.component.css */ "./src/app/admin/data-summary/data-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_service_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], DataSummaryComponent);
    return DataSummaryComponent;
}());



/***/ }),

/***/ "./src/app/admin/data-summary/data-summary.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/data-summary/data-summary.module.ts ***!
  \***********************************************************/
/*! exports provided: DataSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSummaryModule", function() { return DataSummaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-summary.component */ "./src/app/admin/data-summary/data-summary.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-card/admin-card.module */ "./src/app/admin/admin-card/admin-card.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DataSummaryModule = /** @class */ (function () {
    function DataSummaryModule() {
    }
    DataSummaryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_5__["AdminCardModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _data_summary_component__WEBPACK_IMPORTED_MODULE_2__["DataSummaryComponent"] }
                ])
            ],
            declarations: [_data_summary_component__WEBPACK_IMPORTED_MODULE_2__["DataSummaryComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_5__["AdminCardModule"],
                _data_summary_component__WEBPACK_IMPORTED_MODULE_2__["DataSummaryComponent"]
            ]
        })
    ], DataSummaryModule);
    return DataSummaryModule;
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
//# sourceMappingURL=data-summary-data-summary-module.js.map