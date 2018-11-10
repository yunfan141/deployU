(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-domain-input-domain-module"],{

/***/ "./src/app/admin/input-domain/input-domain.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/input-domain/input-domain.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 580px;\n}\n\n\n.card-block {\n  margin-left: 20px;\n}\n\n\nli {\n  font-size: 18px;\n  padding-bottom: 10px;\n}\n\n\n.card-footer {\n  position: absolute;\n  margin-bottom: 15px;\n}\n\n\n.weight {\n  left: 400px;\n  font-size: 16px;\n  position: absolute;\n}\n\n\n.delete {\n  position: absolute;\n  left: 900px;\n}\n\n\n.domain-input {\n  margin-left: 10px;\n  padding-left: 20px;\n  padding-top: 50px;\n}\n"

/***/ }),

/***/ "./src/app/admin/input-domain/input-domain.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/input-domain/input-domain.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n    <app-admin-card></app-admin-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <!-- input question part -->\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <clr-icon shape=\"add-text\" size=\"36\"></clr-icon> &nbsp;\n          <span>Domain Management</span>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-block\">\n          <ul class=\"list\">\n            <li *ngFor=\"let dom of domains\">\n              {{ dom.domain }}\n              <span class=\"weight\"> Weight: {{ dom.weight }}</span>\n              <clr-icon shape=\"trash\" class=\"is-solid is-error delete\" size=\"22\" (click)=\"deleteDomain(dom.id)\"></clr-icon>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"btn btn-primary\" (click)=\"addDomain()\">Add Domain</a>\n        </div>\n        <!--create new domain -->\n        <div *ngIf=\"createDom\" class=\"domain-input\">\n          <form [formGroup]=\"form\">\n            <section class=\"form-block\">\n              <div class=\"form-group\">\n                <label for=\"formFields_1\">Input Domain and Weight</label>\n                <input type=\"text\" id=\"formFields_1\" placeholder=\"Domain\" size=\"30\" formControlName=\"domain\">\n                <input type=\"number\" id=\"formFields_2\" placeholder=\"Weight\" size=\"20\" formControlName=\"weight\">\n              </div>\n            </section>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"submit()\">Submit</button>\n          </form>\n        </div>\n\n      </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/input-domain/input-domain.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/input-domain/input-domain.component.ts ***!
  \**************************************************************/
/*! exports provided: InputDomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDomainComponent", function() { return InputDomainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/question.service */ "./src/app/service/question.service.ts");
/* harmony import */ var _mock_data_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mock-data/Question */ "./src/app/mock-data/Question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputDomainComponent = /** @class */ (function () {
    function InputDomainComponent(fb, questionService) {
        this.fb = fb;
        this.questionService = questionService;
        this.createDom = false;
        this.domains = [];
    }
    InputDomainComponent.prototype.ngOnInit = function () {
        this.getDomains();
        this.form = this.fb.group({
            domain: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            weight: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    InputDomainComponent.prototype.getDomains = function () {
        var _this = this;
        this.questionService.getAllDomains().subscribe(function (value) {
            _this.domains = value;
        });
    };
    /**TODO: add alert before making delete operation */
    InputDomainComponent.prototype.deleteDomain = function (id) {
        this.domains = this.domains.filter(function (value) { return value.id != id; });
        this.questionService.deleteDomain(id).subscribe();
    };
    InputDomainComponent.prototype.addDomain = function () {
        this.createDom = !this.createDom;
    };
    InputDomainComponent.prototype.submit = function () {
        var _this = this;
        //console.log(this.form.value);
        var newDomain = new _mock_data_Question__WEBPACK_IMPORTED_MODULE_3__["Domain"](this.form.value);
        this.questionService.addDomain(newDomain).subscribe(function (value) {
            _this.domains.push(value);
            _this.createDom = false;
        });
    };
    InputDomainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-domain',
            template: __webpack_require__(/*! ./input-domain.component.html */ "./src/app/admin/input-domain/input-domain.component.html"),
            styles: [__webpack_require__(/*! ./input-domain.component.css */ "./src/app/admin/input-domain/input-domain.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _service_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], InputDomainComponent);
    return InputDomainComponent;
}());



/***/ }),

/***/ "./src/app/admin/input-domain/input-domain.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/input-domain/input-domain.module.ts ***!
  \***********************************************************/
/*! exports provided: InputDomainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDomainModule", function() { return InputDomainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input_domain_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-domain.component */ "./src/app/admin/input-domain/input-domain.component.ts");
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







var InputDomainModule = /** @class */ (function () {
    function InputDomainModule() {
    }
    InputDomainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_5__["AdminCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _input_domain_component__WEBPACK_IMPORTED_MODULE_2__["InputDomainComponent"] }
                ])
            ],
            declarations: [_input_domain_component__WEBPACK_IMPORTED_MODULE_2__["InputDomainComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _admin_card_admin_card_module__WEBPACK_IMPORTED_MODULE_5__["AdminCardModule"],
                _input_domain_component__WEBPACK_IMPORTED_MODULE_2__["InputDomainComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], InputDomainModule);
    return InputDomainModule;
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
//# sourceMappingURL=input-domain-input-domain-module.js.map