import { UserBookingTripService } from './user-booking-trip.service';
import { CreateUserBookingTripInput } from './dto/create-user-booking-trip.input';
import { UpdateUserBookingTripInput } from './dto/update-user-booking-trip.input';
export declare class UserBookingTripResolver {
    private readonly userBookingTripService;
    constructor(userBookingTripService: UserBookingTripService);
    createUserBookingTrip(createUserBookingTripInput: CreateUserBookingTripInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateUserBookingTrip(updateUserBookingTripInput: UpdateUserBookingTripInput): string;
    removeUserBookingTrip(id: number): string;
}
