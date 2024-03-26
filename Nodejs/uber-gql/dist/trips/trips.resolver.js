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
exports.TripsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const trips_service_1 = require("./trips.service");
const graphql_2 = require("@nestjs/graphql");
const trip_entity_1 = require("./trip.entity");
const create_trip_input_1 = require("./dtos/create-trip-input");
let TripsResolver = class TripsResolver {
    constructor(service) {
        this.service = service;
    }
    findById(id) {
        return this.service.findById(id);
    }
    createTrip(newTrip) {
        return this.service.createTrip(newTrip);
    }
};
exports.TripsResolver = TripsResolver;
__decorate([
    (0, graphql_2.Query)((returns) => trip_entity_1.Trips, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TripsResolver.prototype, "findById", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => trip_entity_1.Trips),
    __param(0, (0, graphql_1.Args)('newTrip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trip_input_1.CreateTripInput]),
    __metadata("design:returntype", void 0)
], TripsResolver.prototype, "createTrip", null);
exports.TripsResolver = TripsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [trips_service_1.TripsService])
], TripsResolver);
//# sourceMappingURL=trips.resolver.js.map