(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../admin-dashboard/admin-dashboard.module": [
		"./src/app/admin/admin-dashboard/admin-dashboard.module.ts",
		"common",
		"admin-dashboard-admin-dashboard-module"
	],
	"../basic-information/basic-information.module": [
		"./src/app/admin/basic-information/basic-information.module.ts",
		"basic-information-basic-information-module~data-summary-data-summary-module~user-summary-user-summar~739d347a",
		"common",
		"basic-information-basic-information-module"
	],
	"../data-summary/data-summary.module": [
		"./src/app/admin/data-summary/data-summary.module.ts",
		"basic-information-basic-information-module~data-summary-data-summary-module~user-summary-user-summar~739d347a",
		"common",
		"data-summary-data-summary-module"
	],
	"../edit-question/edit-question.module": [
		"./src/app/admin/edit-question/edit-question.module.ts",
		"common",
		"edit-question-edit-question-module"
	],
	"../input-domain/input-domain.module": [
		"./src/app/admin/input-domain/input-domain.module.ts",
		"common",
		"input-domain-input-domain-module"
	],
	"../input-question/input-question.module": [
		"./src/app/admin/input-question/input-question.module.ts",
		"common",
		"input-question-input-question-module"
	],
	"../ques-manage/ques-manage.module": [
		"./src/app/admin/ques-manage/ques-manage.module.ts",
		"common",
		"ques-manage-ques-manage-module"
	],
	"../user-summary/user-summary.module": [
		"./src/app/admin/user-summary/user-summary.module.ts",
		"basic-information-basic-information-module~data-summary-data-summary-module~user-summary-user-summar~739d347a",
		"common",
		"user-summary-user-summary-module"
	],
	"../workspace/answer-list/answer-list.module": [
		"./src/app/layout/workspace/answer-list/answer-list.module.ts",
		"workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031",
		"common",
		"workspace-answer-list-answer-list-module"
	],
	"../workspace/dashboard/dashboard.module": [
		"./src/app/layout/workspace/dashboard/dashboard.module.ts",
		"workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031",
		"basic-information-basic-information-module~data-summary-data-summary-module~user-summary-user-summar~739d347a",
		"common",
		"workspace-dashboard-dashboard-module"
	],
	"../workspace/demographic/demographic.module": [
		"./src/app/layout/workspace/demographic/demographic.module.ts",
		"workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031",
		"common",
		"workspace-demographic-demographic-module"
	],
	"../workspace/profile/profile.module": [
		"./src/app/layout/workspace/profile/profile.module.ts",
		"workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031",
		"common",
		"workspace-profile-profile-module"
	],
	"../workspace/questionnaire/questionnaire.module": [
		"./src/app/layout/workspace/questionnaire/questionnaire.module.ts",
		"workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031",
		"common",
		"workspace-questionnaire-questionnaire-module"
	],
	"../workspace/score-graph/score-graph.module": [
		"./src/app/layout/workspace/score-graph/score-graph.module.ts",
		"workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031",
		"basic-information-basic-information-module~data-summary-data-summary-module~user-summary-user-summar~739d347a",
		"common",
		"workspace-score-graph-score-graph-module"
	],
	"../workspace/session-list/session-list.module": [
		"./src/app/layout/workspace/session-list/session-list.module.ts",
		"workspace-answer-list-answer-list-module~workspace-dashboard-dashboard-module~workspace-demographic-~cac8b031",
		"common",
		"workspace-session-list-session-list-module"
	],
	"./admin/admin-dashboard/admin-dashboard.module": [
		"./src/app/admin/admin-dashboard/admin-dashboard.module.ts",
		"common",
		"admin-dashboard-admin-dashboard-module"
	],
	"./admin/admin-login/admin-login.module": [
		"./src/app/admin/admin-login/admin-login.module.ts",
		"admin-admin-login-admin-login-module"
	],
	"./layout/subnav/subnav.module": [
		"./src/app/layout/subnav/subnav.module.ts",
		"common",
		"layout-subnav-subnav-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"common",
		"login-login-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'dashboard', loadChildren: './layout/subnav/subnav.module#SubnavModule' },
    { path: 'admin', loadChildren: './admin/admin-login/admin-login.module#AdminLoginModule' },
    { path: 'adminDashboard', loadChildren: './admin/admin-dashboard/admin-dashboard.module#AdminDashboardModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _service_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/question.service */ "./src/app/service/question.service.ts");
/* harmony import */ var _service_question_control_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/question-control.service */ "./src/app/service/question-control.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/message.service */ "./src/app/service/message.service.ts");
/* harmony import */ var _service_http_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/http-error-handler.service */ "./src/app/service/http-error-handler.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [
                _service_question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"],
                _service_question_control_service__WEBPACK_IMPORTED_MODULE_7__["QuestionControlService"],
                _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"],
                _service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
                _service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _service_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
                _service_http_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["HttpErrorHandler"],
                _service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mock-data/Question.ts":
/*!***************************************!*\
  !*** ./src/app/mock-data/Question.ts ***!
  \***************************************/
/*! exports provided: Domain, Questionnaire, Question, DomQuestion, AnswerItem, Session, TYPE, DOMAIN, ANSTYPE, Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questionnaire", function() { return Questionnaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomQuestion", function() { return DomQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerItem", function() { return AnswerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANSTYPE", function() { return ANSTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/** question related model definition*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Domain = /** @class */ (function () {
    function Domain(options) {
        if (options === void 0) { options = {}; }
        this.did = options.did;
        this.domain = options.domain;
        this.weight = options.weight || 1;
    }
    return Domain;
}());

var Questionnaire = /** @class */ (function () {
    function Questionnaire(options) {
        if (options === void 0) { options = {}; }
        this.id = options.id;
        this.key = options.key;
        this.label = options.label;
        this.hint = options.hint || '';
        this.type = options.type;
        this.ansOptions = options.ansOptions || {};
        this.order = options.order || options.id;
        this.required = options.required || false;
        this.domain = options.domain || '';
        this.weight = options.weight || 1;
    }
    return Questionnaire;
}());

var Question = /** @class */ (function () {
    function Question(options) {
        if (options === void 0) { options = {}; }
        this.ansOptions = [];
        this.qid = options.qid;
        this.key = options.key || '';
        this.label = options.label;
        this.hint = options.hint || '';
        this.type = options.type;
        this.ansOptions = options.ansOptions || [];
        this.order = options.order || -1;
        this.value = options.value || '';
        this.required = options.required || false;
    }
    return Question;
}());

var DomQuestion = /** @class */ (function (_super) {
    __extends(DomQuestion, _super);
    function DomQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.domain = options['domain'] || '';
        _this.weight = options['weight'] || 0;
        return _this;
    }
    return DomQuestion;
}(Question));

var AnswerItem = /** @class */ (function () {
    function AnswerItem(options) {
        if (options === void 0) { options = {}; }
        this.id = options.id;
        this.questionId = options.questionId;
        this.answer = options.answer || {};
        this.domain = options.domain;
        this.weight = options.weight;
        this.sessionId = options.sessionId || -1;
    }
    return AnswerItem;
}());

var Session = /** @class */ (function () {
    function Session(options) {
        if (options === void 0) { options = {}; }
        this.id = options.id;
        this.userId = options.userId;
        this.createDate = options.createDate || '';
        this.updateDate = options.updateDate || '';
    }
    return Session;
}());

var TYPE = [
    // {key: 'demographic', value: 'Demographic'},
    { key: 'questionnaire', value: 'Questionnaire' },
];
var DOMAIN = [
    { key: '1', value: 'Physical' },
    { key: '2', value: 'Behavioral' },
    { key: '3', value: 'Spiritual' },
];
var ANSTYPE = [
    { key: 'textbox', value: 'Text Input Question' },
    { key: 'dropdown', value: 'Drop Down Question' },
    { key: 'radiobutton', value: 'Radio Button Question' }
];
var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());



/***/ }),

/***/ "./src/app/service/http-error-handler.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/http-error-handler.service.ts ***!
  \*******************************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/service/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());



/***/ }),

/***/ "./src/app/service/http.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: API_URL, httpOptions, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/app/service/util.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var HttpService = /** @class */ (function () {
    function HttpService(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
    }
    HttpService.prototype.get = function (url, params, options) {
        if (params === void 0) { params = null; }
        if (options === void 0) { options = {}; }
        options.params = params;
        this._addDefaultHeaderIfNotExists(options, 'Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.get(API_URL + "/" + url, options).toPromise();
    };
    HttpService.prototype.getWithToken = function (url, params, options) {
        if (params === void 0) { params = null; }
        if (options === void 0) { options = {}; }
        this._addDefaultHeaderIfNotExists(options, 'Authorization', this.localStorage.get(_util__WEBPACK_IMPORTED_MODULE_3__["CONST"].LOCAL_STORAGE_TOKEN_KEY));
        return this.get(url, params, options);
    };
    HttpService.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        this._addDefaultHeaderIfNotExists(options, 'Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(API_URL + "/" + url, body, options).toPromise();
    };
    HttpService.prototype.postDemo = function (url, body) {
        return this.httpClient.post(API_URL + "/" + url, body).toPromise();
    };
    HttpService.prototype.postWithToken = function (url, body, options) {
        if (options === void 0) { options = {}; }
        this._addDefaultHeaderIfNotExists(options, 'Authorization', this.localStorage.get(_util__WEBPACK_IMPORTED_MODULE_3__["CONST"].LOCAL_STORAGE_TOKEN_KEY));
        return this.post(url, body, options);
    };
    HttpService.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        this._addDefaultHeaderIfNotExists(options, 'Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.patch(API_URL + "/" + url, body, options).toPromise();
    };
    HttpService.prototype.patchWithToken = function (url, body, options) {
        if (options === void 0) { options = {}; }
        this._addDefaultHeaderIfNotExists(options, 'Authorization', this.localStorage.get(_util__WEBPACK_IMPORTED_MODULE_3__["CONST"].LOCAL_STORAGE_TOKEN_KEY));
        return this.patch(url, body, options);
    };
    HttpService.prototype.delete = function (url, params, options) {
        if (params === void 0) { params = null; }
        if (options === void 0) { options = {}; }
        options.params = params = params;
        this._addDefaultHeaderIfNotExists(options, 'Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.delete(API_URL + "/" + url, options).toPromise();
    };
    HttpService.prototype.deleteWithToken = function (url, params, options) {
        if (params === void 0) { params = null; }
        if (options === void 0) { options = {}; }
        this._addDefaultHeaderIfNotExists(options, 'Authorization', this.localStorage.get(_util__WEBPACK_IMPORTED_MODULE_3__["CONST"].LOCAL_STORAGE_TOKEN_KEY));
        return this.delete(url, params, options);
    };
    HttpService.prototype._addDefaultHeaderIfNotExists = function (options, headerName, headerValue) {
        if (!options.headers) {
            options.headers = {};
        }
        if (!options.headers[headerName]) {
            options.headers[headerName] = headerValue;
        }
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/service/message.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/service/question-control.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/question-control.service.ts ***!
  \*****************************************************/
/*! exports provided: QuestionControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionControlService", function() { return QuestionControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionControlService = /** @class */ (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '');
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    QuestionControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());



/***/ }),

/***/ "./src/app/service/question.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/question.service.ts ***!
  \*********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-data/Question */ "./src/app/mock-data/Question.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/service/http-error-handler.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionService = /** @class */ (function () {
    function QuestionService(http, httpErrorHandler) {
        this.http = http;
        this.handleError = httpErrorHandler.createHandleError('QuestionService');
    }
    /**GET all domains */
    QuestionService.prototype.getAllDomains = function () {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/domain')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllDomains', [])));
    };
    /** GET all questions */
    QuestionService.prototype.getAllQuestions = function () {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/questionnaire')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllQuestions', [])));
    };
    /**GET domain information by id */
    QuestionService.prototype.getDomainById = function (id) {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/domian/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getDomainById', id)));
    };
    /**GET questions by id */
    QuestionService.prototype.getQuestionById = function (id) {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/questionnaire/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getQuestionById', id)));
    };
    /**GET question by domain*/
    QuestionService.prototype.getQuestionByDomain = function (domId) {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/questionnaire/domain/' + domId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getQuestionByDomain', domId)));
    };
    /** GET sessions by user id*/
    QuestionService.prototype.getSessionByUser = function (id) {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/session/getSessionByUser/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getSessionByUserId', id)));
    };
    /**GET score by session id */
    QuestionService.prototype.getScoreBySession = function (id) {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/session/getSessionScoreBySeesionId/' + id);
    };
    /**GET three role score */
    QuestionService.prototype.getRoleScore = function (id) {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/session/getRoleScore/' + id);
    };
    /**GET question answers by session */
    QuestionService.prototype.getAnswersBySession = function (sessionId) {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/session/questionAndAnswer/' + sessionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAnswersBySession', sessionId)));
    };
    /** POST question answers to for one session*/
    QuestionService.prototype.addQuestionAnswer = function (session, sessionId) {
        return this.http.patch(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/session/addSession/' + sessionId, session, _http_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addQuestionAnswer', session)));
    };
    /**POST a new session to start questinnaire*/
    QuestionService.prototype.createSession = function (sessionInfo) {
        return this.http.post(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/session', sessionInfo, _http_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('createSession', sessionInfo)));
    };
    /**POST a new domain */
    QuestionService.prototype.addDomain = function (domain) {
        return this.http.post(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/domain', domain, _http_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addDomain', domain)));
    };
    /** POST a new question */
    QuestionService.prototype.addQuestion = function (question) {
        return this.http.post(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/questionnaire', question, _http_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addQuestion', question)));
    };
    /**DELETE one domain*/
    QuestionService.prototype.deleteDomain = function (id) {
        return this.http.delete(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/domain/' + id, _http_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteDomain', id)));
    };
    /** DELETE one question*/
    QuestionService.prototype.deleteQuestion = function (id) {
        return this.http.delete(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/questionnaire/' + id, _http_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteQuestion', id)));
    };
    /** DELETE one session by id*/
    QuestionService.prototype.deleteSession = function (id) {
        return this.http.delete(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/session/' + id, _http_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteSession', id)));
    };
    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    QuestionService.prototype.getDemoQuestion = function () {
        var questions = [
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 1,
                key: '1',
                label: 'How many children do you have?',
                type: 'dropdown',
                ansOptions: [
                    { key: '1-2', value: '1 - 2' },
                    { key: '3-5', value: '3 - 5' },
                ],
                order: 1,
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 2,
                key: '2',
                label: 'How many children live with you?',
                type: 'dropdown',
                ansOptions: [],
                order: 2
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 3,
                key: '3',
                label: 'How many people do you currently live with?',
                type: 'dropdown',
                ansOptions: [],
                order: 3,
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 4,
                key: '4',
                label: 'Do you own a home?',
                type: 'radiobutton',
                ansOptions: [
                    { key: 'yes', value: "Yes" },
                    { key: 'no', value: 'No' }
                ],
                order: 4,
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 5,
                key: '5',
                label: 'Do you rent?',
                type: 'radiobutton',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' },
                ],
                order: 5
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 6,
                key: '6',
                label: 'Are you employed?',
                type: 'radiobutton',
                ansOptions: [
                    { key: 'Yes', value: 'Yes' },
                    { key: 'no', value: 'No' }
                ],
                order: 6,
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 7,
                key: '7',
                label: 'How many hours per week do you work?',
                type: 'dropdown',
                ansOptions: [],
                order: 7
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 8,
                key: '8',
                label: 'Have you served in the Armed Forces?',
                type: 'radiobutton',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' }
                ],
                order: 8
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 9,
                key: '9',
                label: 'Did you graduate from high school or have a GED',
                type: 'radiobutton',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' }
                ],
                order: 9
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["Question"]({
                qid: 10,
                key: '10',
                label: 'Do you have a valid drivers license?',
                type: 'radiobutton',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' }
                ],
                order: 10,
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionService.prototype.getHealthQues = function () {
        var questions = [
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 1,
                key: '1',
                label: 'How would you rate your overall health on a scale of 1(very poor health)-4(excellent health)?',
                type: 'dropdown',
                ansOptions: [],
                order: 1,
                domain: 'Physical'
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 2,
                key: '2',
                label: 'To what extent do you feel that physical pain prevents you from what you need to do?',
                type: 'dropdown',
                ansOptions: [],
                order: 2,
                domain: 'Physical'
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 3,
                key: '3',
                label: 'Do you have enough energy for everyday activities?',
                type: 'dropdown',
                order: 3,
                domain: 'Physical'
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 4,
                key: '4',
                label: 'Do you take prescribed medications?',
                type: 'dropdown',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' },
                ],
                order: 4,
                domain: 'Physical'
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 5,
                key: '5',
                label: 'Are there times when you do not take your prescribed meds when you are supposed to?',
                type: 'dropdown',
                order: 5,
                domain: 'Physical'
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 6,
                key: '6',
                label: 'Do you feel rested upon awaking?',
                type: 'dropdown',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' },
                ],
                order: 6,
                domain: 'Physical'
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 7,
                key: '7',
                label: 'Is your sleep interrupted?',
                type: 'dropdown',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' },
                ],
                order: 7,
                domain: 'Physical'
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 8,
                key: '8',
                label: 'Do you have nightmares?',
                type: 'dropdown',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'no' },
                ],
                order: 8,
                domain: 'Physical'
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 9,
                key: '9',
                label: 'In the last month, how often do you feel stressed?',
                type: 'dropdown',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' }
                ],
                order: 9,
                domain: 'Physical'
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionService.prototype.getMobilityQues = function () {
        var questions = [
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 1,
                key: '1',
                label: 'Do you have difficulty performing daily tasks?',
                type: 'dropdown',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' }
                ],
                order: 1
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 2,
                key: '2',
                label: 'Have you found that you are doing tasks less frequently? ',
                type: 'dropdown',
                ansOptions: [
                    { key: 'yes', value: 'Yes' },
                    { key: 'no', value: 'No' }
                ],
                order: 2,
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 3,
                key: '3',
                label: 'Have you found that you are doing tasks in a different way that you used to do them',
                type: 'dropdown',
                order: 3,
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 4,
                key: '4',
                label: 'How satisfied are you with your ability to ambulated or move around?',
                type: 'dropdown',
                order: 4,
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 5,
                key: '5',
                label: 'Are you able to run errands and shop without assitance?',
                type: 'dropdown',
                order: 5
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 6,
                key: '6',
                label: 'How many times a week do you exercise weekly?',
                type: 'dropdown',
                order: 6,
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                key: 'brave',
                label: 'Bravery Rating',
                type: 'dropdown',
                ansOptions: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                key: 'firstName',
                label: 'First name',
                type: 'textbox',
                value: 'Bombasto',
                order: 1
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                qid: 4,
                key: 'braveeee',
                label: 'Bravery Ratingeeee',
                type: 'radiobutton',
                ansOptions: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' }
                ],
                order: 4
            }),
            new _mock_data_Question__WEBPACK_IMPORTED_MODULE_1__["DomQuestion"]({
                key: 'emailAddress',
                type: 'textbox',
                label: 'Email',
                order: 2
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpErrorHandler"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/service/state.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/state.service.ts ***!
  \******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = /** @class */ (function () {
    function StateService() {
        this.curSession$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](-1);
        this.selectedQuestion$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](-1);
        this.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
    }
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/service/http-error-handler.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/service/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const api_url = environment.apiUrl;
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http, httpErrorHandler) {
        this.http = http;
        this.handleError = httpErrorHandler.createHandleError('UserService');
    }
    /**POST a new user */
    UserService.prototype.addUser = function (user) {
        return this.http.post(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/User', user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addUser', user)));
    };
    /**PATCH user profile information */
    UserService.prototype.updateUser = function (id, user) {
        return this.http.patch(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/User/' + id, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateuser', user)));
    };
    // /**GET all user list */
    // getAllUsers(): Observable<any[]> {
    //   return this.http.get<any[]>(API_URL + '/User')
    //     .pipe(
    //       catchError(this.handleError('getAllUsers', []))
    //     )
    // }
    /**GET user information by id */
    UserService.prototype.getUserById = function (id) {
        return this.http.get(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/User/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getUserById', id)));
    };
    /** POST post username and password to backend*/
    UserService.prototype.loginCheck = function (LogInfo) {
        return this.http.post(_http_service__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/User/login', LogInfo, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('loginCheck', LogInfo)));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandler"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/service/util.ts":
/*!*********************************!*\
  !*** ./src/app/service/util.ts ***!
  \*********************************/
/*! exports provided: CONST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST", function() { return CONST; });
var CONST = {
    LOCAL_STORAGE_TOKEN_KEY: "token",
    LOCAL_STORAGE_USER_EMAIL: "login-email",
};


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    //apiUrl: '/api'
    apiUrl: 'http://cpath.him.pitt.edu:8080/api',
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yunfanzhou/Desktop/new_healthyU/HealthyUFrontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map