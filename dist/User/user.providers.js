"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./user.entity");
exports.userProvider = {
    provide: 'UserRepository',
    useFactory: (connection) => connection.getRepository(user_entity_1.UserEntity),
    inject: ['TypeORMInstance']
};
//# sourceMappingURL=user.providers.js.map