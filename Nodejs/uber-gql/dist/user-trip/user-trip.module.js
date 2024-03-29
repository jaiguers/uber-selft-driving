"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTripModule = void 0;
const common_1 = require("@nestjs/common");
const user_trip_service_1 = require("./user-trip.service");
const user_trip_resolver_1 = require("./user-trip.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const user_trip_entity_1 = require("./entities/user-trip.entity");
let UserTripModule = class UserTripModule {
};
exports.UserTripModule = UserTripModule;
exports.UserTripModule = UserTripModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_trip_entity_1.UserTrip])],
        providers: [user_trip_resolver_1.UserTripResolver, user_trip_service_1.UserTripService],
        exports: [user_trip_service_1.UserTripService]
    })
], UserTripModule);
//# sourceMappingURL=user-trip.module.js.map