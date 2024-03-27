import { CreateUserBookingTripInput } from './dto/create-user-booking-trip.input';
import { UpdateUserBookingTripInput } from './dto/update-user-booking-trip.input';
import { UserBookingTrip } from './entities/user-booking-trip.entity';
import { Repository } from 'typeorm';
export declare class UserBookingTripService {
    private userBookingRepo;
    constructor(userBookingRepo: Repository<UserBookingTrip>);
    create(createUserBookingTripInput: CreateUserBookingTripInput): Promise<UserBookingTrip>;
    findAll(): Promise<UserBookingTrip[]>;
    findOne(id: number): Promise<UserBookingTrip>;
    findByTrip(TripId: number): Promise<UserBookingTrip>;
    update(id: number, updateUserBookingTripInput: UpdateUserBookingTripInput): string;
    remove(id: number): string;
}
