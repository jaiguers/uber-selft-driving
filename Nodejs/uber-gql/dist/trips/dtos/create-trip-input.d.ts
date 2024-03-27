import { CreateUserBookingTripInput } from 'src/user-booking-trip/dto/create-user-booking-trip.input';
export declare class CreateTripInput {
    TripDescription: string;
    TripDate: Date;
    TripStatus: string;
    TripOrigin: string;
    TripDestination: string;
    TripValue: number;
    UserBookingTripInput: CreateUserBookingTripInput;
}
