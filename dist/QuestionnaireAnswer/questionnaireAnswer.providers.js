"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questionnaireAnswer_entity_1 = require("./questionnaireAnswer.entity");
exports.questionnaireAnserProvider = {
    provide: 'QuestionnaireAnswerRepository',
    useFactory: (connection) => connection.getRepository(questionnaireAnswer_entity_1.QuestionnaireAnswerEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=questionnaireAnswer.providers.js.map