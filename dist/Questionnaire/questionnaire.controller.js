"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_Questionnaire_dto_1 = require("./DTO/create-Questionnaire.dto");
const questionnaire_service_1 = require("./questionnaire.service");
const swagger_1 = require("@nestjs/swagger");
let QuestionnaireController = class QuestionnaireController {
    constructor(questionnaireService) {
        this.questionnaireService = questionnaireService;
    }
    getAllQuestionnaire() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.questionnaireService.getAllQuestionnaire();
            return msg;
        });
    }
    getQuestionnaireById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.questionnaireService.getQuestionnaireById(params.id);
            return msg;
        });
    }
    addQuestionnaire(questionnaire) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.questionnaireService.addQuestionnaire(questionnaire);
            return msg;
        });
    }
    updateQuestionnaire(params, newQuestionnaire) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.questionnaireService.updateQuestionnaire(params.id, newQuestionnaire);
            return msg;
        });
    }
    deleteQuestionnaire(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.questionnaireService.deleteQuestionnaire(params.id);
            return msg;
        });
    }
    getQuestionnairesByDomain(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.questionnaireService.getQuestionnaireByDomain(params.id);
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionnaireController.prototype, "getAllQuestionnaire", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionnaireController.prototype, "getQuestionnaireById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Questionnaire_dto_1.CreateQuestionnaireDto]),
    __metadata("design:returntype", Promise)
], QuestionnaireController.prototype, "addQuestionnaire", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_Questionnaire_dto_1.CreateQuestionnaireDto]),
    __metadata("design:returntype", Promise)
], QuestionnaireController.prototype, "updateQuestionnaire", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionnaireController.prototype, "deleteQuestionnaire", null);
__decorate([
    common_1.Get('domain/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionnaireController.prototype, "getQuestionnairesByDomain", null);
QuestionnaireController = __decorate([
    common_1.Controller('questionnaire'),
    swagger_1.ApiUseTags('HealthU'),
    __metadata("design:paramtypes", [questionnaire_service_1.QuestionnaireService])
], QuestionnaireController);
exports.QuestionnaireController = QuestionnaireController;
//# sourceMappingURL=questionnaire.controller.js.map