(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-answer-list-answer-list-module"],{

/***/ "./src/app/layout/workspace/answer-list/answer-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/layout/workspace/answer-list/answer-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 600px;\n}\n\n\n.card-block {\n  height: 80%;\n  overflow: auto;\n  margin-bottom: 1px;\n}\n\n\n.card .card-text {\n  margin-bottom: 10px;\n}\n\n\n.radio {\n  padding-bottom: 10px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/layout/workspace/answer-list/answer-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/workspace/answer-list/answer-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n    <app-complete-card></app-complete-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"card top-card\">\n        <div class=\"card-title\">\n          <clr-icon shape=\"view-list\" size=\"36\"></clr-icon> &nbsp;\n          <span>Answer List</span>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-block\">\n          <div class=\"card-text\">\n            <!--Answer table -->\n            <div class=\"row\">\n              <clr-datagrid style=\"width: 95%; height: 90%; padding-left:15px\">\n                <clr-dg-column style=\"width: 490px\" [clrDgField]=\"'label'\">Description\n                  <clr-dg-string-filter [clrDgStringFilter]=\"labelFilter\"></clr-dg-string-filter>\n                </clr-dg-column>\n                <clr-dg-column [clrDgSortBy]=\"questionComparator\" [clrDgField]=\"'order'\">Order</clr-dg-column>\n                <clr-dg-column style=\"width: 160px\" [clrDgField]=\"'domain'\">Domain</clr-dg-column>\n                <clr-dg-column [clrDgSortBy]=\"weightComparator\" [clrDgField]=\"'weight'\">Weight</clr-dg-column>\n                <clr-dg-column [clrDgField]=\"'type'\">Answer</clr-dg-column>\n\n                <clr-dg-row *ngFor=\"let ans of answers\">\n                  <clr-dg-cell style=\"width: 490px\">{{ans.questionnaire.label}}</clr-dg-cell>\n                  <clr-dg-cell>{{ans.questionnaire.order}}</clr-dg-cell>\n\n                  <clr-dg-cell style=\"width: 160px\">{{ans.questionnaire.domain}}</clr-dg-cell>\n                  <clr-dg-cell>{{ans.questionnaire.weight}}</clr-dg-cell>\n                  <clr-dg-cell>{{ans.answer.answer.value}}</clr-dg-cell>\n\n                  <!--<clr-dg-action-overflow>-->\n                    <!--<button class=\"action-item\" (click)=\"onEdit(ques.id)\">Check</button>-->\n                    <!--<button class=\"action-item\" (click)=\"onDelete(ques.id)\">Delete</button>-->\n                  <!--</clr-dg-action-overflow>-->\n                </clr-dg-row>\n\n                <clr-dg-footer>\n                  <!--TODO: check again when more than 10 questions are added -->\n                  <clr-dg-pagination #pagination [clrDgPageSize]=\"10\">\n                    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n                    of {{pagination.totalItems}} questions\n                  </clr-dg-pagination>\n                </clr-dg-footer>\n              </clr-datagrid>\n            </div>\n            <!-- end of the answer table-->\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button class=\"btn btn-primary\" routerLink=\"/dashboard/session-list\">Back</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/answer-list/answer-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/workspace/answer-list/answer-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnswerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerListComponent", function() { return AnswerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/question.service */ "./src/app/service/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerListComponent = /** @class */ (function () {
    function AnswerListComponent(stateService, questionService) {
        this.stateService = stateService;
        this.questionService = questionService;
        this.labelFilter = new LabelFilter();
        this.questionComparator = new QuestionComparator();
        this.weightComparator = new WeightComparator();
    }
    AnswerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.sessionId = _this.stateService.curSession$.getValue();
            _this.questionService.getAnswersBySession(_this.sessionId).subscribe(function (value) {
                _this.answers = value;
                console.log(_this.answers);
            });
        });
    };
    AnswerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer-list',
            template: __webpack_require__(/*! ./answer-list.component.html */ "./src/app/layout/workspace/answer-list/answer-list.component.html"),
            styles: [__webpack_require__(/*! ./answer-list.component.css */ "./src/app/layout/workspace/answer-list/answer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _service_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], AnswerListComponent);
    return AnswerListComponent;
}());

var LabelFilter = /** @class */ (function () {
    function LabelFilter() {
    }
    LabelFilter.prototype.accepts = function (item, search) {
        return item.label.toLowerCase().indexOf(search) >= 0;
    };
    ;
    return LabelFilter;
}());
var QuestionComparator = /** @class */ (function () {
    function QuestionComparator() {
    }
    QuestionComparator.prototype.compare = function (a, b) {
        return a.order - b.order;
    };
    return QuestionComparator;
}());
var WeightComparator = /** @class */ (function () {
    function WeightComparator() {
    }
    WeightComparator.prototype.compare = function (a, b) {
        return a.weight - b.weight;
    };
    return WeightComparator;
}());


/***/ }),

/***/ "./src/app/layout/workspace/answer-list/answer-list.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/workspace/answer-list/answer-list.module.ts ***!
  \********************************************************************/
/*! exports provided: AnswerListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerListModule", function() { return AnswerListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _answer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer-list.component */ "./src/app/layout/workspace/answer-list/answer-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../complete-card/complete-card.module */ "./src/app/layout/workspace/complete-card/complete-card.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AnswerListModule = /** @class */ (function () {
    function AnswerListModule() {
    }
    AnswerListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__["CompleteCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _answer_list_component__WEBPACK_IMPORTED_MODULE_2__["AnswerListComponent"] }
                ])
            ],
            declarations: [_answer_list_component__WEBPACK_IMPORTED_MODULE_2__["AnswerListComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__["CompleteCardModule"],
                _answer_list_component__WEBPACK_IMPORTED_MODULE_2__["AnswerListComponent"],
            ]
        })
    ], AnswerListModule);
    return AnswerListModule;
}());



/***/ })

}]);
//# sourceMappingURL=workspace-answer-list-answer-list-module.js.map