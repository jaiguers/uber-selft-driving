import { TripsService } from './trips.service';
import { Trips } from './trip.entity';
import { CreateTripInput } from './dtos/create-trip-input';
export declare class TripsResolver {
    private service;
    constructor(service: TripsService);
    findById(id: number): Promise<Trips>;
    createTrip(newTrip: CreateTripInput): Promise<Trips>;
}
