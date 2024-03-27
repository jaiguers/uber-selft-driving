import { UserBookingTripService } from './user-booking-trip.service';
import { UserBookingTrip } from './entities/user-booking-trip.entity';
import { CreateUserBookingTripInput } from './dto/create-user-booking-trip.input';
import { UpdateUserBookingTripInput } from './dto/update-user-booking-trip.input';
export declare class UserBookingTripResolver {
    private readonly userBookingTripService;
    constructor(userBookingTripService: UserBookingTripService);
    createUserBookingTrip(createUserBookingTripInput: CreateUserBookingTripInput): Promise<UserBookingTrip>;
    findAll(): Promise<UserBookingTrip[]>;
    findOne(id: number): Promise<UserBookingTrip>;
    updateUserBookingTrip(updateUserBookingTripInput: UpdateUserBookingTripInput): string;
    removeUserBookingTrip(id: number): string;
}
