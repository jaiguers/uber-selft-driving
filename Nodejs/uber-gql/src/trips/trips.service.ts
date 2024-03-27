import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Trips } from './trip.entity'
import { CreateTripInput } from './dtos/create-trip-input';
import { UserTripService } from 'src/user-trip/user-trip.service';
import { UserBookingTripService } from 'src/user-booking-trip/user-booking-trip.service';
import { UserTrip } from 'src/user-trip/entities/user-trip.entity';
import { UserBookingTrip } from 'src/user-booking-trip/entities/user-booking-trip.entity';
import { Status } from 'src/utils/Status';
import { UpdateUserTripInput } from 'src/user-trip/dto/update-user-trip.input';
import { UpdateTripInput } from './dtos/update-trip-input';

@Injectable()
export class TripsService {

    constructor(
        @InjectRepository(Trips)
        private tripRepository: Repository<Trips>,
        private userTripService: UserTripService,
        private usBookingTripService: UserBookingTripService
    ) { }

    findAll(): Promise<Trips[]> {
        return this.tripRepository.find();
    }

    async findById(id: number): Promise<Trips> {
        return this.tripRepository.findOne({ where: { TripId: id } });
    }

    findUserTrip(tripId: number): Promise<UserTrip> {
        return this.userTripService.findOne(tripId);
    }

    findUserBookingTrip(tripId: number): Promise<UserBookingTrip> {
        return this.usBookingTripService.findByTrip(tripId);
    }

    async createTrip(tripInput: CreateTripInput): Promise<Trips> {
        tripInput.TripStatus = Status.Waiting;
        tripInput.TripDate = new Date();
        const newTrip = this.tripRepository.create(tripInput)
        const trips = await this.tripRepository.save(newTrip);

        tripInput.UserBookingTripInput.TripId = trips.TripId;
        this.usBookingTripService.create(tripInput.UserBookingTripInput);

        return trips;
    }

    async update(id: number, updateTripInput: UpdateTripInput): Promise<Trips> {
        if (updateTripInput.TripStatus == Status.Assigned)
            this.userTripService.create(updateTripInput.UserTrip)

        this.tripRepository.update(id, { TripStatus: updateTripInput.TripStatus });
        return this.findById(id);
    }
}
