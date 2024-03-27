import { TripsService } from './trips.service';
import { Trips } from './trip.entity';
import { CreateTripInput } from './dtos/create-trip-input';
import { UserTrip } from 'src/user-trip/entities/user-trip.entity';
import { UserBookingTrip } from 'src/user-booking-trip/entities/user-booking-trip.entity';
import { UpdateTripInput } from './dtos/update-trip-input';
export declare class TripsResolver {
    private service;
    constructor(service: TripsService);
    findAllTrips(): Promise<Trips[]>;
    findById(id: number): Promise<Trips>;
    userTrip(trip: Trips): Promise<UserTrip>;
    userBookingTrip(trip: Trips): Promise<UserBookingTrip>;
    createTrip(newTrip: CreateTripInput): Promise<Trips>;
    updateTrips(updateTripInput: UpdateTripInput): Promise<Trips>;
}
