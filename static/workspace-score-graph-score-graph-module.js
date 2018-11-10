(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-score-graph-score-graph-module"],{

/***/ "./src/app/layout/workspace/score-graph/score-graph.component.css":
/*!************************************************************************!*\
  !*** ./src/app/layout/workspace/score-graph/score-graph.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 600px;\n}\n\n\n.card-block {\n  height: 80%;\n  overflow: auto;\n  margin-bottom: 1px;\n}\n\n\n.card .card-text {\n  margin-bottom: 10px;\n}\n\n\nli {\n  font-size: 16px;\n  padding-bottom: 10px;\n}\n"

/***/ }),

/***/ "./src/app/layout/workspace/score-graph/score-graph.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/workspace/score-graph/score-graph.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n    <app-complete-card></app-complete-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <clr-icon shape=\"bar-chart\" size=\"36\"></clr-icon> &nbsp;\n          <span>Well-being Score Visualization</span>\n        </div>\n\n        <div class=\"card-block\">\n          <div class=\"row\">\n            <div class=\"col-md-7\" style=\"padding-left: 20px; margin-right: 10px\">\n              <h4 style=\"padding-bottom: 10px\">Your Well-being Score</h4>\n              <div style=\"display: block; width: 600px\">\n                <canvas baseChart\n                        [datasets]=\"barChartData\"\n                        [labels]=\"barChartLabels\"\n                        [options]=\"barChartOptions\"\n                        [legend]=\"barChartLegend\"\n                        [chartType]=\"barChartType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></canvas>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <h4 style=\"padding-bottom: 20px\">Session Information</h4>\n              <ul class=\"list\">\n                <li>Session Id: 1</li>\n                <li>Session Date: 12/04/2018</li>\n                <li *ngFor=\"let item of domains\">{{item.value}} Completion: </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <table class=\"table table-responsive table-condensed\">\n              <tr>\n                <th>Type</th>\n                <th *ngFor=\"let label of barChartLabels\">{{label}}</th>\n              </tr>\n              <tr *ngFor=\"let d of barChartData\">\n                <td>{{d.label}}</td>\n                <td *ngFor=\"let label of barChartLabels; let j=index\">{{d && d.data[j]}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n\n        <div class=\"card-footer\">\n          <button class=\"btn btn-primary\" routerLink=\"/dashboard/session-list\">Back</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/score-graph/score-graph.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/workspace/score-graph/score-graph.component.ts ***!
  \***********************************************************************/
/*! exports provided: ScoreGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreGraphComponent", function() { return ScoreGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mock-data/userInfo */ "./src/app/mock-data/userInfo.ts");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/question.service */ "./src/app/service/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreGraphComponent = /** @class */ (function () {
    function ScoreGraphComponent(stateService, questionService) {
        this.stateService = stateService;
        this.questionService = questionService;
        this.userId = JSON.parse(localStorage.getItem('curUser')).id;
        this.sessions = [];
        this.domains = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_2__["DOMAINS"];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.scoreData = [];
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Your Score' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Average Score' }
        ];
    }
    ScoreGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.stateService.curSession$.subscribe(function (value) { return _this.sessionId = value; });
        });
        this.barChartLabels = this.domains.map(function (value) { return value.key; });
        this.getSession();
        this.getScore();
        this.barChartData = [
            { data: this.scoreData, label: 'Your Score' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Average Score' }
        ];
        console.log(this.scoreData);
    };
    ScoreGraphComponent.prototype.getSession = function () {
        var _this = this;
        this.questionService.getSessionByUser(this.userId).subscribe(function (value) {
            value.forEach(function (item) {
                _this.sessions.push(item.id);
            });
            //console.log(value);
        });
    };
    ScoreGraphComponent.prototype.getScore = function () {
        // this.sessions.forEach( (id) => {
        var _this = this;
        // })
        var id = this.sessions[0];
        this.questionService.getScoreBySession(id).subscribe(function (value) {
            _this.scoreData = value;
        });
    };
    // events
    ScoreGraphComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ScoreGraphComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ScoreGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-score-graph',
            template: __webpack_require__(/*! ./score-graph.component.html */ "./src/app/layout/workspace/score-graph/score-graph.component.html"),
            styles: [__webpack_require__(/*! ./score-graph.component.css */ "./src/app/layout/workspace/score-graph/score-graph.component.css")]
        }),
        __metadata("design:paramtypes", [_service_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _service_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])
    ], ScoreGraphComponent);
    return ScoreGraphComponent;
}());



/***/ }),

/***/ "./src/app/layout/workspace/score-graph/score-graph.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/workspace/score-graph/score-graph.module.ts ***!
  \********************************************************************/
/*! exports provided: ScoreGraphModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreGraphModule", function() { return ScoreGraphModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _score_graph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score-graph.component */ "./src/app/layout/workspace/score-graph/score-graph.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../complete-card/complete-card.module */ "./src/app/layout/workspace/complete-card/complete-card.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ScoreGraphModule = /** @class */ (function () {
    function ScoreGraphModule() {
    }
    ScoreGraphModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__["CompleteCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: '', component: _score_graph_component__WEBPACK_IMPORTED_MODULE_2__["ScoreGraphComponent"] }
                ])
            ],
            declarations: [_score_graph_component__WEBPACK_IMPORTED_MODULE_2__["ScoreGraphComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_5__["CompleteCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _score_graph_component__WEBPACK_IMPORTED_MODULE_2__["ScoreGraphComponent"]
            ]
        })
    ], ScoreGraphModule);
    return ScoreGraphModule;
}());



/***/ })

}]);
//# sourceMappingURL=workspace-score-graph-score-graph-module.js.map