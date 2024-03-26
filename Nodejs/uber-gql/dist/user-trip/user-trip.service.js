"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTripService = void 0;
const common_1 = require("@nestjs/common");
let UserTripService = class UserTripService {
    create(createUserTripInput) {
        return 'This action adds a new userTrip';
    }
    findAll() {
        return `This action returns all userTrip`;
    }
    findOne(id) {
        return `This action returns a #${id} userTrip`;
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
    (0, common_1.Injectable)()
], UserTripService);
//# sourceMappingURL=user-trip.service.js.map