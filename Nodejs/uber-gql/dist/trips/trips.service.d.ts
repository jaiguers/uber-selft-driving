import { Repository } from 'typeorm';
import { Trips } from './trip.entity';
import { CreateTripInput } from './dtos/create-trip-input';
export declare class TripsService {
    private tripRepository;
    constructor(tripRepository: Repository<Trips>);
    findById(id: number): Promise<Trips>;
    createTrip(trip: CreateTripInput): Promise<Trips>;
}
