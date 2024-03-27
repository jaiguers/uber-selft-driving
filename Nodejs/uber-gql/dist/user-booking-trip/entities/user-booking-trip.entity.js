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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookingTrip = void 0;
const graphql_1 = require("@nestjs/graphql");
const trip_entity_1 = require("../../trips/trip.entity");
const users_entity_1 = require("../../users/users.entity");
const typeorm_1 = require("typeorm");
let UserBookingTrip = class UserBookingTrip {
};
exports.UserBookingTrip = UserBookingTrip;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserBookingTrip.prototype, "UserBookingTripId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserBookingTrip.prototype, "UserBookingTripDateInit", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UserBookingTrip.prototype, "UserBookingTripDateEnd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserBookingTrip.prototype, "TripId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ description: 'Relación con Users tipo Person' }),
    __metadata("design:type", String)
], UserBookingTrip.prototype, "UserTenentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trip_entity_1.Trips, (trips) => trips.UserBookingTrip),
    (0, typeorm_1.JoinColumn)({
        name: "TripId",
        foreignKeyConstraintName: "USERBOKINGTRIP_TRIP_FK",
        referencedColumnName: "TripId"
    }),
    (0, graphql_1.Field)(() => trip_entity_1.Trips),
    __metadata("design:type", trip_entity_1.Trips)
], UserBookingTrip.prototype, "Trip", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (user) => user.UserBookingTrip),
    (0, typeorm_1.JoinColumn)({
        name: "UserTenentId",
        foreignKeyConstraintName: "USERBOKINGTRIP_USER_FK",
        referencedColumnName: "UserId"
    }),
    (0, graphql_1.Field)(() => users_entity_1.Users),
    __metadata("design:type", users_entity_1.Users)
], UserBookingTrip.prototype, "User", void 0);
exports.UserBookingTrip = UserBookingTrip = __decorate([
    (0, typeorm_1.Entity)('UserBookingTrip'),
    (0, graphql_1.ObjectType)()
], UserBookingTrip);
//# sourceMappingURL=user-booking-trip.entity.js.map