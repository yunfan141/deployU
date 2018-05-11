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
const session_entity_1 = require("./session.entity");
const typeorm_1 = require("typeorm");
const questionnaireAnswer_entity_1 = require("../QuestionnaireAnswer/questionnaireAnswer.entity");
let SessionService = class SessionService {
    constructor(sessionRepository, questionnaireAnswerRepository) {
        this.sessionRepository = sessionRepository;
        this.questionnaireAnswerRepository = questionnaireAnswerRepository;
    }
    getAllSession() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.find();
        });
    }
    getSessionById(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.findOne({ where: { id: sessionId } });
        });
    }
    addSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedSession = yield this.sessionRepository.save(session);
            for (let answer of yield session.questionnaireAnswer) {
                const selectedAnswer = yield this.questionnaireAnswerRepository.save(answer);
                yield typeorm_1.getConnection().createQueryBuilder().relation(questionnaireAnswer_entity_1.QuestionnaireAnswerEntity, "session")
                    .of(selectedAnswer.id).set(selectedSession.id);
            }
            return yield this.sessionRepository.findOne({ where: { id: selectedSession.id } });
        });
    }
    updateSession(sessionId, newSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedSession = yield this.sessionRepository.findOne({ where: { id: sessionId } });
            if (selectedSession) {
                yield this.sessionRepository.update(sessionId, newSession);
                const requiredSession = yield typeorm_1.getConnection().getRepository(session_entity_1.SessionEntity).createQueryBuilder("session")
                    .leftJoinAndSelect("session.questionnaireAnswer", "questionnaireAnswer").where("session.id = :id", { id: sessionId })
                    .getOne();
                for (let i = 0; i < (yield requiredSession.questionnaireAnswer.length); i++) {
                    yield typeorm_1.getConnection().createQueryBuilder().update(questionnaireAnswer_entity_1.QuestionnaireAnswerEntity)
                        .set(newSession.questionnaireAnswer[i]).where("id = :id", { id: requiredSession.questionnaireAnswer[i].id })
                        .execute();
                }
                return yield this.sessionRepository.findOne({ where: { id: sessionId } });
            }
            else {
                return null;
            }
        });
    }
    deleteSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedSession = yield typeorm_1.getConnection().getRepository(session_entity_1.SessionEntity)
                .createQueryBuilder("session").leftJoinAndSelect("session.questionnaireAnswer", "questionnaireAnswer")
                .where("session.id = :id", { id: sessionId })
                .getOne();
            for (let answer of yield selectedSession.questionnaireAnswer) {
                yield typeorm_1.getConnection().createQueryBuilder().relation(questionnaireAnswer_entity_1.QuestionnaireAnswerEntity, "session")
                    .of(answer.id).set(null);
            }
            yield typeorm_1.getConnection().createQueryBuilder().delete()
                .from(session_entity_1.SessionEntity).where("id = :id", { id: sessionId })
                .execute();
            const deletedSession = yield this.sessionRepository.findOne({ where: { id: sessionId } });
            if (deletedSession) {
                return 'delete fail';
            }
            else {
                return 'delete success';
            }
        });
    }
    getSessionWithQuestionnaireAnswer(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionWithQuestionnaireAnswer = yield typeorm_1.getConnection().getRepository(session_entity_1.SessionEntity)
                .createQueryBuilder("session").leftJoinAndSelect("session.questionnaireAnswer", "questionnaireAnswer")
                .where("session.id = :id", { id: sessionId }).getOne();
            return sessionWithQuestionnaireAnswer;
        });
    }
};
SessionService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('SessionRepository')),
    __param(1, common_1.Inject('QuestionnaireAnswerRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map