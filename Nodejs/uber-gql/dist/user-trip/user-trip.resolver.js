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
exports.UserTripResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_trip_service_1 = require("./user-trip.service");
const user_trip_entity_1 = require("./entities/user-trip.entity");
const create_user_trip_input_1 = require("./dto/create-user-trip.input");
const update_user_trip_input_1 = require("./dto/update-user-trip.input");
let UserTripResolver = class UserTripResolver {
    constructor(userTripService) {
        this.userTripService = userTripService;
    }
    createUserTrip(createUserTripInput) {
        return this.userTripService.create(createUserTripInput);
    }
    findAll() {
        return this.userTripService.findAll();
    }
    findOne(id) {
        return this.userTripService.findOne(id);
    }
    updateUserTrip(updateUserTripInput) {
        return this.userTripService.update(updateUserTripInput.id, updateUserTripInput);
    }
    removeUserTrip(id) {
        return this.userTripService.remove(id);
    }
};
exports.UserTripResolver = UserTripResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_trip_entity_1.UserTrip),
    __param(0, (0, graphql_1.Args)('createUserTripInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_trip_input_1.CreateUserTripInput]),
    __metadata("design:returntype", void 0)
], UserTripResolver.prototype, "createUserTrip", null);
__decorate([
    (0, graphql_1.Query)(() => [user_trip_entity_1.UserTrip], { name: 'userTrip' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserTripResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => user_trip_entity_1.UserTrip, { name: 'userTrip' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserTripResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_trip_entity_1.UserTrip),
    __param(0, (0, graphql_1.Args)('updateUserTripInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_trip_input_1.UpdateUserTripInput]),
    __metadata("design:returntype", void 0)
], UserTripResolver.prototype, "updateUserTrip", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_trip_entity_1.UserTrip),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserTripResolver.prototype, "removeUserTrip", null);
exports.UserTripResolver = UserTripResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_trip_entity_1.UserTrip),
    __metadata("design:paramtypes", [user_trip_service_1.UserTripService])
], UserTripResolver);
//# sourceMappingURL=user-trip.resolver.js.map