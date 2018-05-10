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
let DemographicService = class DemographicService {
    constructor(demographicRepository) {
        this.demographicRepository = demographicRepository;
    }
    getAllDemographic() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.demographicRepository.find();
        });
    }
    getDemographicById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.demographicRepository.findOne({ where: { id: id } });
        });
    }
    addDemographic(demographic) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.demographicRepository.save(demographic);
        });
    }
    updateDemographic(demographicId, newDemographic) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedDemographic = yield this.demographicRepository.findOne({ where: { id: demographicId } });
            if (selectedDemographic) {
                yield this.demographicRepository.update(demographicId, newDemographic);
                return yield this.demographicRepository.findOne({ where: { id: demographicId } });
            }
            else {
                return null;
            }
        });
    }
    deleteDemographic(demographicId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedDemographic = yield this.demographicRepository.findOne({ where: { id: demographicId } });
            if (selectedDemographic) {
                yield this.demographicRepository.delete(demographicId);
                return 'delete success';
            }
            else {
                return 'delete fail';
            }
        });
    }
};
DemographicService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('DemographicRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DemographicService);
exports.DemographicService = DemographicService;
//# sourceMappingURL=demographic.service.js.map