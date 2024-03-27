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
exports.Users = void 0;
const graphql_1 = require("@nestjs/graphql");
const person_entity_1 = require("../person/entities/person.entity");
const user_booking_trip_entity_1 = require("../user-booking-trip/entities/user-booking-trip.entity");
const vehicle_entity_1 = require("../vehicles/entities/vehicle.entity");
const typeorm_1 = require("typeorm");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Users.prototype, "UserId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Users.prototype, "UserName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Users.prototype, "UserPassword", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Users.prototype, "UserStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Users.prototype, "UserType", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => person_entity_1.Person, person => person.User),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => person_entity_1.Person, { nullable: true }),
    __metadata("design:type", person_entity_1.Person)
], Users.prototype, "Person", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => vehicle_entity_1.Vehicle, vehicle => vehicle.User),
    (0, graphql_1.Field)(() => vehicle_entity_1.Vehicle, { nullable: true }),
    __metadata("design:type", vehicle_entity_1.Vehicle)
], Users.prototype, "Vehicle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_booking_trip_entity_1.UserBookingTrip, userBookingTrip => userBookingTrip.User),
    (0, graphql_1.Field)(() => user_booking_trip_entity_1.UserBookingTrip, { nullable: true }),
    __metadata("design:type", user_booking_trip_entity_1.UserBookingTrip)
], Users.prototype, "UserBookingTrip", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)('Users'),
    (0, graphql_1.ObjectType)()
], Users);
//# sourceMappingURL=users.entity.js.map