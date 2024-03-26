"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookingTripService = void 0;
const common_1 = require("@nestjs/common");
let UserBookingTripService = class UserBookingTripService {
    create(createUserBookingTripInput) {
        return 'This action adds a new userBookingTrip';
    }
    findAll() {
        return `This action returns all userBookingTrip`;
    }
    findOne(id) {
        return `This action returns a #${id} userBookingTrip`;
    }
    update(id, updateUserBookingTripInput) {
        return `This action updates a #${id} userBookingTrip`;
    }
    remove(id) {
        return `This action removes a #${id} userBookingTrip`;
    }
};
exports.UserBookingTripService = UserBookingTripService;
exports.UserBookingTripService = UserBookingTripService = __decorate([
    (0, common_1.Injectable)()
], UserBookingTripService);
//# sourceMappingURL=user-booking-trip.service.js.map