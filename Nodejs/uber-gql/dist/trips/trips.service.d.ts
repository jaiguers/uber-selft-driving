import { Repository } from 'typeorm';
import { Trips } from './trip.entity';
import { CreateTripInput } from './dtos/create-trip-input';
import { UserTripService } from 'src/user-trip/user-trip.service';
import { UserBookingTripService } from 'src/user-booking-trip/user-booking-trip.service';
import { UserTrip } from 'src/user-trip/entities/user-trip.entity';
import { UserBookingTrip } from 'src/user-booking-trip/entities/user-booking-trip.entity';
import { UpdateTripInput } from './dtos/update-trip-input';
export declare class TripsService {
    private tripRepository;
    private userTripService;
    private usBookingTripService;
    constructor(tripRepository: Repository<Trips>, userTripService: UserTripService, usBookingTripService: UserBookingTripService);
    findAll(): Promise<Trips[]>;
    findById(id: number): Promise<Trips>;
    findUserTrip(tripId: number): Promise<UserTrip>;
    findUserBookingTrip(tripId: number): Promise<UserBookingTrip>;
    createTrip(tripInput: CreateTripInput): Promise<Trips>;
    update(id: number, updateTripInput: UpdateTripInput): Promise<import("typeorm").UpdateResult>;
}
