import { CreateUserBookingTripInput } from './dto/create-user-booking-trip.input';
import { UpdateUserBookingTripInput } from './dto/update-user-booking-trip.input';
export declare class UserBookingTripService {
    create(createUserBookingTripInput: CreateUserBookingTripInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserBookingTripInput: UpdateUserBookingTripInput): string;
    remove(id: number): string;
}
