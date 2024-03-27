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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTripService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_trip_entity_1 = require("./entities/user-trip.entity");
const typeorm_2 = require("typeorm");
let UserTripService = class UserTripService {
    constructor(userTripRepo) {
        this.userTripRepo = userTripRepo;
    }
    create(createUserTripInput) {
        createUserTripInput.UserTripDateAcept = new Date();
        const newUserT = this.userTripRepo.create(createUserTripInput);
        return this.userTripRepo.save(newUserT);
    }
    findAll() {
        return this.userTripRepo.find();
    }
    findOne(id) {
        return this.userTripRepo.findOne({ where: { UserTripId: id } });
    }
    findByTrip(TripId) {
        return this.userTripRepo.findOne({ where: { TripId } });
    }
    update(id, updateUserTripInput) {
        return `This action updates a #${id} userTrip`;
    }
    remove(id) {
        return `This action removes a #${id} userTrip`;
    }
};
exports.UserTripService = UserTripService;
exports.UserTripService = UserTripService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_trip_entity_1.UserTrip)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserTripService);
//# sourceMappingURL=user-trip.service.js.map