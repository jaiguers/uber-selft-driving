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
const user_trip_entity_1 = require("../user-trip/entities/user-trip.entity");
const user_booking_trip_entity_1 = require("../user-booking-trip/entities/user-booking-trip.entity");
const update_trip_input_1 = require("./dtos/update-trip-input");
let TripsResolver = class TripsResolver {
    constructor(service) {
        this.service = service;
    }
    findAllTrips() {
        return this.service.findAll();
    }
    findById(id) {
        return this.service.findById(id);
    }
    userTrip(trip) {
        return this.service.findUserTrip(trip.TripId);
    }
    userBookingTrip(trip) {
        return this.service.findUserBookingTrip(trip.TripId);
    }
    createTrip(newTrip) {
        return this.service.createTrip(newTrip);
    }
    updateTrips(updateTripInput) {
        return this.service.update(updateTripInput.TripId, updateTripInput);
    }
};
exports.TripsResolver = TripsResolver;
__decorate([
    (0, graphql_2.Query)((returns) => trip_entity_1.Trips),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TripsResolver.prototype, "findAllTrips", null);
__decorate([
    (0, graphql_2.Query)((returns) => trip_entity_1.Trips, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TripsResolver.prototype, "findById", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => user_trip_entity_1.UserTrip),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trip_entity_1.Trips]),
    __metadata("design:returntype", Promise)
], TripsResolver.prototype, "userTrip", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => user_booking_trip_entity_1.UserBookingTrip),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trip_entity_1.Trips]),
    __metadata("design:returntype", Promise)
], TripsResolver.prototype, "userBookingTrip", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => trip_entity_1.Trips),
    __param(0, (0, graphql_1.Args)('newTrip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trip_input_1.CreateTripInput]),
    __metadata("design:returntype", void 0)
], TripsResolver.prototype, "createTrip", null);
__decorate([
    (0, graphql_1.Mutation)(() => trip_entity_1.Trips),
    __param(0, (0, graphql_1.Args)('updateTripInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_trip_input_1.UpdateTripInput]),
    __metadata("design:returntype", Promise)
], TripsResolver.prototype, "updateTrips", null);
exports.TripsResolver = TripsResolver = __decorate([
    (0, graphql_1.Resolver)(() => trip_entity_1.Trips),
    __metadata("design:paramtypes", [trips_service_1.TripsService])
], TripsResolver);
//# sourceMappingURL=trips.resolver.js.map