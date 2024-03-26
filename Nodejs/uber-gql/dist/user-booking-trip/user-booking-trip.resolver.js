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
exports.UserBookingTripResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_booking_trip_service_1 = require("./user-booking-trip.service");
const user_booking_trip_entity_1 = require("./entities/user-booking-trip.entity");
const create_user_booking_trip_input_1 = require("./dto/create-user-booking-trip.input");
const update_user_booking_trip_input_1 = require("./dto/update-user-booking-trip.input");
let UserBookingTripResolver = class UserBookingTripResolver {
    constructor(userBookingTripService) {
        this.userBookingTripService = userBookingTripService;
    }
    createUserBookingTrip(createUserBookingTripInput) {
        return this.userBookingTripService.create(createUserBookingTripInput);
    }
    findAll() {
        return this.userBookingTripService.findAll();
    }
    findOne(id) {
        return this.userBookingTripService.findOne(id);
    }
    updateUserBookingTrip(updateUserBookingTripInput) {
        return this.userBookingTripService.update(updateUserBookingTripInput.id, updateUserBookingTripInput);
    }
    removeUserBookingTrip(id) {
        return this.userBookingTripService.remove(id);
    }
};
exports.UserBookingTripResolver = UserBookingTripResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_booking_trip_entity_1.UserBookingTrip),
    __param(0, (0, graphql_1.Args)('createUserBookingTripInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_booking_trip_input_1.CreateUserBookingTripInput]),
    __metadata("design:returntype", void 0)
], UserBookingTripResolver.prototype, "createUserBookingTrip", null);
__decorate([
    (0, graphql_1.Query)(() => [user_booking_trip_entity_1.UserBookingTrip], { name: 'userBookingTrip' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserBookingTripResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => user_booking_trip_entity_1.UserBookingTrip, { name: 'userBookingTrip' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserBookingTripResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_booking_trip_entity_1.UserBookingTrip),
    __param(0, (0, graphql_1.Args)('updateUserBookingTripInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_booking_trip_input_1.UpdateUserBookingTripInput]),
    __metadata("design:returntype", void 0)
], UserBookingTripResolver.prototype, "updateUserBookingTrip", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_booking_trip_entity_1.UserBookingTrip),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserBookingTripResolver.prototype, "removeUserBookingTrip", null);
exports.UserBookingTripResolver = UserBookingTripResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_booking_trip_entity_1.UserBookingTrip),
    __metadata("design:paramtypes", [user_booking_trip_service_1.UserBookingTripService])
], UserBookingTripResolver);
//# sourceMappingURL=user-booking-trip.resolver.js.map