(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-dashboard-dashboard-module"],{

/***/ "./src/app/layout/workspace/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/workspace/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n\n.btn .btn-link .nav-link {\n  font-size: 16px;\n}\n\n\n.main-container {\n  height: 100%;\n}\n\n\n.card {\n  width: 1130px;\n  height: 600px;\n}\n\n\n.card-block {\n  height: 80%;\n  overflow: auto;\n  margin-bottom: 1px;\n}\n\n\n.card .card-text {\n  margin-bottom: 10px;\n}\n\n\n.radio {\n  padding-bottom: 10px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/layout/workspace/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/workspace/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"row\">\n    <app-complete-card></app-complete-card>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"card top-card\">\n        <div class=\"card-title\">\n          <clr-icon shape=\"home\" size=\"36\"></clr-icon> &nbsp;\n          <span>Dashboard</span>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-block\">\n          <div class=\"card-text\">\n           <!-- general graph place-->\n            <div class=\"row\">\n              <!--time line chart -->\n              <div class=\"col-md-7\" style=\"padding-left: 20px; padding-right: 25px\">\n                <h4 style=\"padding-bottom: 15px\">Score change over time</h4>\n                <canvas baseChart style=\"margin-top: 5px; height: 400px\"\n                        [datasets]=\"lineChartData\"\n                        [labels]=\"lineChartLabels\"\n                        [chartType]=\"lineChartType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></canvas>\n              </div>\n\n              <!--score list-->\n              <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <form [formGroup]=\"domainForm\">\n                      <section class=\"form-block\">\n                        <label style=\"font-size: 18px; color: darkblue; padding-bottom: 25px; margin-top: 20px\">Select Domains to check changes</label>\n                        <div class=\"form-group\" style=\"padding-left: 20px\">\n                          <label style=\"width: 3px\"></label>\n                          <div class=\"radio\">\n                            <input type=\"radio\" name=\"domain\" id=\"Overall\" formControlName=\"domain\" value=\"Overall\">\n                            <label for=\"Overall\" style=\"font-size: 15px\">Overall</label>\n                          </div>\n                          <div class=\"radio\" *ngFor=\"let item of domains1\">\n                            <input type=\"radio\" name=\"domain\" id=\"{{item.id}}\" formControlName=\"domain\" value=\"{{item.id}}\">\n                            <label for=\"{{item.id}}\">{{item.domain}} </label>\n                          </div>\n                        </div>\n                      </section>\n                    </form>\n                  </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/workspace/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/workspace/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mock-data/userInfo */ "./src/app/mock-data/userInfo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/question.service */ "./src/app/service/question.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, questionService, datePipe) {
        this.fb = fb;
        this.questionService = questionService;
        this.datePipe = datePipe;
        this.domains = _mock_data_userInfo__WEBPACK_IMPORTED_MODULE_1__["DOMAINS"];
        this.selectedDomain = 'Overall';
        this.userId = JSON.parse(localStorage.getItem('curUser')).id;
        this.sessions = [];
        this.scoreList = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        this.dateList = [];
        this.dates = [];
        this.domains1 = [];
        // lineChart
        this.lineChartData = [
            { data: [0, 0, 0, 0, 0, 0], label: 'Your score' }
        ];
        this.lineChartLabels = ['Section1', 'Section2', 'Section3', 'Section4', 'Section5', 'Section6', 'Section7'];
        this.lineChartType = 'line';
    }
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDomains();
        this.domainForm = this.fb.group({
            domain: ['Overall']
        });
        this.domainForm.controls['domain'].valueChanges.subscribe(function (value) {
            _this.selectedDomain = value;
            console.log(_this.selectedDomain);
            _this.getNextdomain();
        });
        // this.getSession();
        this.questionService.getSessionByUser(this.userId).subscribe(function (value) {
            value.forEach(function (item) {
                _this.sessions.push(item.id);
                _this.dates.push(item.createDate);
            });
            console.log("session are");
            console.log(_this.sessions);
            var _loop_1 = function (i) {
                _this.questionService.getScoreBySession(_this.sessions[i]).subscribe(function (value) {
                    _this.scoreList[6 - i] = value;
                    _this.dateList[6 - i] = _this.datePipe.transform(_this.dates[i], "yyyy-MM-dd");
                });
            };
            for (var i = 0; i < _this.sessions.length && i < 7; i++) {
                _loop_1(i);
            }
            _this.lineChartLabels = _this.dateList;
        });
        // this.questionService.getScoreBySession(this.sessions[0]).subscribe( value => {
        //   this.lineChartData[0].data = value;
        // })
        // this.questionService.getScoreBySession(this.sessions[0]).subscribe( value => {
        //   this.lineChartData = new Array(1);
        //   this.lineChartData[0] = {data: value.slice(), label: "Your Score"};
        //   console.log(value);
        //   console.log(this.lineChartData[0].data);
        // })
        // setTimeout(
        //   () => {
        //     let zeroA = [0,0,0,0,0,0,0];
        //     this.scoreList = [];
        //     for(let i = this.sessions.length - 1; (i >= this.sessions.length - 7) && i >= 0; i--){
        //         this.questionService.getScoreBySession(this.sessions[i]).subscribe( value => {
        //           this.scoreList.push(value);
        //       })
        //     }
        //     if(this.sessions.length < 7){
        //       for(let i = this.sessions.length - 1; i <= 7; i++){
        //         this.scoreList.push(zeroA);
        //       }
        //     }
        //     console.log("scorelist");
        //     console.log(this.scoreList);
        //   }, 100
        // )
        setTimeout(function () {
            var _lineChartData = new Array(_this.lineChartData.length);
            var score = [];
            for (var i = 0; i < _this.scoreList.length; i++) {
                var sum = 0;
                for (var j = 0; j < 7; j++) {
                    sum += Math.floor(_this.scoreList[i][j] / 7);
                }
                score.push(sum);
            }
            console.log(score);
            _lineChartData[0] = { data: score.slice(), label: _this.lineChartData[0].label };
            _this.lineChartData = _lineChartData;
            console.log(_this.lineChartLabels);
        }, 700);
    };
    // getSession() {
    //   this.questionService.getSessionByUser(this.userId).subscribe(value => {
    //     value.forEach( (item) => {
    //       this.sessions.push(item.id);
    //     })
    //     //console.log(value);
    //   })
    // }
    DashboardComponent.prototype.getScore = function () {
        // this.sessions.forEach( (id) => {
        // })
    };
    DashboardComponent.prototype.getDomains = function () {
        var _this = this;
        this.questionService.getAllDomains().subscribe(function (value) {
            _this.domains1 = value;
        });
    };
    DashboardComponent.prototype.getNextdomain = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        var score = [];
        if (this.selectedDomain !== "Overall") {
            for (var i = 0; i < this.scoreList.length; i++) {
                score.push(this.scoreList[i][Number(this.selectedDomain) - 1]);
            }
        }
        else {
            for (var i = 0; i < this.scoreList.length; i++) {
                var sum = 0;
                for (var j = 0; j < 7; j++) {
                    sum += this.scoreList[i][j];
                }
                score.push(sum);
            }
        }
        _lineChartData[0] = { data: score.slice(), label: this.lineChartData[0].label };
        this.lineChartData = _lineChartData;
        // this.lineChartData[0].data = value.slice();
        // let _lineChartData = new Array(this.lineChartData.length);
        // _lineChartData[0] =  {data: value.slice(), label: this.lineChartData[0].label};
        // this.lineChartData = _lineChartData;
        // console.log(value);
        // console.log(this.lineChartData);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/workspace/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/layout/workspace/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

// randomize() {
//   // let _lineChartData:Array<any> = new Array(this.lineChartData.length);
//   // for (let i = 0; i < this.lineChartData.length; i++) {
//   //   _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
//   //   for (let j = 0; j < this.lineChartData[i].data.length; j++) {
//   //     _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
//   //   }
//   // }
// }


/***/ }),

/***/ "./src/app/layout/workspace/dashboard/dashboard.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/workspace/dashboard/dashboard.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/workspace/dashboard/dashboard.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../complete-card/complete-card.module */ "./src/app/layout/workspace/complete-card/complete-card.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_6__["CompleteCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }
                ])
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
            exports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _complete_card_complete_card_module__WEBPACK_IMPORTED_MODULE_6__["CompleteCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=workspace-dashboard-dashboard-module.js.map