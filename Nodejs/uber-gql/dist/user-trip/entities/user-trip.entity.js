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
exports.UserTrip = void 0;
const graphql_1 = require("@nestjs/graphql");
const trip_entity_1 = require("../../trips/trip.entity");
const vehicle_entity_1 = require("../../vehicles/entities/vehicle.entity");
const typeorm_1 = require("typeorm");
let UserTrip = class UserTrip {
};
exports.UserTrip = UserTrip;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Llave primaria' }),
    __metadata("design:type", Number)
], UserTrip.prototype, "UserTripId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserTrip.prototype, "UserTripDateAcept", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UserTrip.prototype, "UserTripDateEnd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserTrip.prototype, "VehicleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UserTrip.prototype, "UserTripEarnings", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserTrip.prototype, "UserTripWaitingTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], UserTrip.prototype, "UserTripStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserTrip.prototype, "TripId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trip_entity_1.Trips, (trips) => trips.UserTrip),
    (0, typeorm_1.JoinColumn)({
        name: "TripId",
        foreignKeyConstraintName: "USERTRIP_TRIP_FK",
        referencedColumnName: "TripId"
    }),
    (0, graphql_1.Field)(() => trip_entity_1.Trips),
    __metadata("design:type", trip_entity_1.Trips)
], UserTrip.prototype, "Trip", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vehicle_entity_1.Vehicle, (vehicle) => vehicle.UserTrip),
    (0, typeorm_1.JoinColumn)({
        name: "VehicleId",
        foreignKeyConstraintName: "USERTRIP_VEHICLE_FK",
        referencedColumnName: "VehicleId"
    }),
    (0, graphql_1.Field)(() => vehicle_entity_1.Vehicle),
    __metadata("design:type", vehicle_entity_1.Vehicle)
], UserTrip.prototype, "Vehicle", void 0);
exports.UserTrip = UserTrip = __decorate([
    (0, typeorm_1.Entity)('UserTrip'),
    (0, graphql_1.ObjectType)()
], UserTrip);
//# sourceMappingURL=user-trip.entity.js.map