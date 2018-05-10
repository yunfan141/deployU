"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("./Shared/DataBase/database.module");
const user_module_1 = require("./User/user.module");
const domain_module_1 = require("./DomainForQuestionnaire/Domain/domain.module");
const subDomain_module_1 = require("./DomainForQuestionnaire/SubDomain/subDomain.module");
const demographic_module_1 = require("./Demograpic/demographic.module");
const questionnaire_module_1 = require("./Questionnaire/questionnaire.module");
const userDemographic_module_1 = require("./UsersDemographic/userDemographic.module");
const questionnaireAnswer_module_1 = require("./QuestionnaireAnswer/questionnaireAnswer.module");
const session_module_1 = require("./Session/session.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        modules: [
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            domain_module_1.DomainModule,
            subDomain_module_1.SubDomainModule,
            demographic_module_1.DemographicModule,
            questionnaire_module_1.QuestionnaireModule,
            userDemographic_module_1.UserDemographicModule,
            questionnaireAnswer_module_1.QuestionnaireAnswerModule,
            session_module_1.SessionModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map