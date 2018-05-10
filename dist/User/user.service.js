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
const typeorm_1 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find();
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOne({ where: { id: userId } });
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.save(user);
        });
    }
    updateUser(userId, newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedUser = yield this.userRepository.findOne({ where: { id: userId } });
            if (selectedUser) {
                yield this.userRepository.update(userId, newUser);
                return yield this.userRepository.findOne({ where: { id: userId } });
            }
            else {
                return null;
            }
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedUser = yield this.userRepository.findOne({ where: { id: userId } });
            if (selectedUser) {
                yield this.userRepository.delete(userId);
                return 'delete success';
            }
            else {
                return 'delete fail';
            }
        });
    }
    getUserSecurityQuestion(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedUser = yield this.userRepository.findOne({ where: { id: userId } });
            if (selectedUser) {
                const securityQuestions = selectedUser.security.map((item) => {
                    return { question: item.q };
                });
                return securityQuestions;
            }
            else {
                return 'User does not exist';
            }
        });
    }
    checkUserSecurityQuestion(userId, answers) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = true;
            const selectedUser = yield this.userRepository.findOne({ where: { id: userId } });
            for (let i = 0; i < answers.length; i++) {
                if (answers[i].q !== selectedUser.security[i].q) {
                    result = false;
                }
            }
            return yield result;
        });
    }
    checkUserLogin(logInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedUser = yield this.userRepository.findOne({ where: { userName: logInfo.userName, password: logInfo.password, userType: logInfo.userType } });
            if (selectedUser) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    checkUserExisting(UserName) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedUser = yield this.userRepository.findOne({ where: { userName: UserName.username } });
            if (selectedUser) {
                return false;
            }
            else {
                return true;
            }
        });
    }
};
UserService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('UserRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map