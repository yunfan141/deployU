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
const questionnaireAnswer_service_1 = require("./questionnaireAnswer.service");
const create_QuestionnaireAnswer_dto_1 = require("./DTO/create-QuestionnaireAnswer.dto");
const swagger_1 = require("@nestjs/swagger");
let QuestionnaireAnswerController = class QuestionnaireAnswerController {
    constructor(quesionnaireAnswerService) {
        this.quesionnaireAnswerService = quesionnaireAnswerService;
    }
    getAllQuestionnaireAnswer() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.quesionnaireAnswerService.getAllQuestionnaireAnswer();
            return msg;
        });
    }
    getQuestionnaireAnswerById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.quesionnaireAnswerService.getQuestionnaireAnswerById(params.id);
            return msg;
        });
    }
    addQuestionnaireAnswer(questionnaireAnswer) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.quesionnaireAnswerService.addQuestionnaireAnswer(questionnaireAnswer);
            return msg;
        });
    }
    updateQuestionnaireAnswer(params, newQuestionnaireAnswer) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.quesionnaireAnswerService.updateQuestionnaireAnswer(params.id, newQuestionnaireAnswer);
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionnaireAnswerController.prototype, "getAllQuestionnaireAnswer", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionnaireAnswerController.prototype, "getQuestionnaireAnswerById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_QuestionnaireAnswer_dto_1.CreateQuestionnaireAnswerDto]),
    __metadata("design:returntype", Promise)
], QuestionnaireAnswerController.prototype, "addQuestionnaireAnswer", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_QuestionnaireAnswer_dto_1.CreateQuestionnaireAnswerDto]),
    __metadata("design:returntype", Promise)
], QuestionnaireAnswerController.prototype, "updateQuestionnaireAnswer", null);
QuestionnaireAnswerController = __decorate([
    common_1.Controller('questionnaireAnswer'),
    swagger_1.ApiUseTags('HealthU'),
    __metadata("design:paramtypes", [questionnaireAnswer_service_1.QuestionnaireAnswerService])
], QuestionnaireAnswerController);
exports.QuestionnaireAnswerController = QuestionnaireAnswerController;
//# sourceMappingURL=questionnaireAnswer.controller.js.map