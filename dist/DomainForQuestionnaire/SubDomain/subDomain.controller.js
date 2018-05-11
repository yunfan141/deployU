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
const create_SubDomain_dto_1 = require("./DTO/create-SubDomain.dto");
const subDomain_service_1 = require("./subDomain.service");
const swagger_1 = require("@nestjs/swagger");
let SubDomainController = class SubDomainController {
    constructor(subDomainService) {
        this.subDomainService = subDomainService;
    }
    getAllSubDomain() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.subDomainService.getAllSubDomain();
            return msg;
        });
    }
    getSubDomainById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.subDomainService.getSubDomainById(params.id);
            return msg;
        });
    }
    addSubDomain(subDomain) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.subDomainService.addSubDomain(subDomain);
            return msg;
        });
    }
    updateSubDomain(params, newSubDomain) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.subDomainService.updateSubDomain(params.id, newSubDomain);
            return msg;
        });
    }
    deleteSubDomain(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.subDomainService.deleteSubDomain(params.id);
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubDomainController.prototype, "getAllSubDomain", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubDomainController.prototype, "getSubDomainById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_SubDomain_dto_1.CreateSubDomainDto]),
    __metadata("design:returntype", Promise)
], SubDomainController.prototype, "addSubDomain", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_SubDomain_dto_1.CreateSubDomainDto]),
    __metadata("design:returntype", Promise)
], SubDomainController.prototype, "updateSubDomain", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubDomainController.prototype, "deleteSubDomain", null);
SubDomainController = __decorate([
    common_1.Controller('subDomain'),
    swagger_1.ApiUseTags('HealthU'),
    __metadata("design:paramtypes", [subDomain_service_1.SubDomainService])
], SubDomainController);
exports.SubDomainController = SubDomainController;
//# sourceMappingURL=subDomain.controller.js.map