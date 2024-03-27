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
exports.TripsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const trip_entity_1 = require("./trip.entity");
const user_trip_service_1 = require("../user-trip/user-trip.service");
const user_booking_trip_service_1 = require("../user-booking-trip/user-booking-trip.service");
const Status_1 = require("../utils/Status");
let TripsService = class TripsService {
    constructor(tripRepository, userTripService, usBookingTripService) {
        this.tripRepository = tripRepository;
        this.userTripService = userTripService;
        this.usBookingTripService = usBookingTripService;
    }
    findAll() {
        return this.tripRepository.find();
    }
    async findById(id) {
        return this.tripRepository.findOne({ where: { TripId: id } });
    }
    findUserTrip(tripId) {
        return this.userTripService.findOne(tripId);
    }
    findUserBookingTrip(tripId) {
        return this.usBookingTripService.findByTrip(tripId);
    }
    async createTrip(tripInput) {
        tripInput.TripStatus = Status_1.Status.Searching;
        tripInput.TripDate = new Date();
        const newTrip = this.tripRepository.create(tripInput);
        const trips = await this.tripRepository.save(newTrip);
        tripInput.UserBookingTripInput.TripId = trips.TripId;
        this.usBookingTripService.create(tripInput.UserBookingTripInput);
        return trips;
    }
    async update(id, updateTripInput) {
        if (updateTripInput.TripStatus == Status_1.Status.Assigned)
            this.userTripService.create(updateTripInput.UserTrip);
        this.tripRepository.update(id, { TripStatus: updateTripInput.TripStatus });
        return this.findById(id);
    }
};
exports.TripsService = TripsService;
exports.TripsService = TripsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trip_entity_1.Trips)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_trip_service_1.UserTripService,
        user_booking_trip_service_1.UserBookingTripService])
], TripsService);
//# sourceMappingURL=trips.service.js.map