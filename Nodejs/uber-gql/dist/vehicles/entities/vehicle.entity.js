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
exports.Vehicle = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_trip_entity_1 = require("../../user-trip/entities/user-trip.entity");
const users_entity_1 = require("../../users/users.entity");
const typeorm_1 = require("typeorm");
let Vehicle = class Vehicle {
};
exports.Vehicle = Vehicle;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Llave primaria de vehiculos' }),
    __metadata("design:type", Number)
], Vehicle.prototype, "VehicleId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Vehicle.prototype, "Description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Vehicle.prototype, "VehiclePlate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Vehicle.prototype, "VehicleColor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Vehicle.prototype, "VehicleDoors", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Vehicle.prototype, "VehicleLicenseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Vehicle.prototype, "UserId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.Users, (users) => users.Person),
    (0, graphql_1.Field)(() => users_entity_1.Users, { nullable: true }),
    __metadata("design:type", users_entity_1.Users)
], Vehicle.prototype, "User", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_trip_entity_1.UserTrip, (userTrip) => userTrip.Vehicle),
    (0, graphql_1.Field)(() => user_trip_entity_1.UserTrip, { nullable: true }),
    __metadata("design:type", user_trip_entity_1.UserTrip)
], Vehicle.prototype, "UserTrip", void 0);
exports.Vehicle = Vehicle = __decorate([
    (0, typeorm_1.Entity)('Vehicles'),
    (0, graphql_1.ObjectType)()
], Vehicle);
//# sourceMappingURL=vehicle.entity.js.map