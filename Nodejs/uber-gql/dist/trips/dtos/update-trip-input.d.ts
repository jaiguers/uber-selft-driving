import { CreateUserTripInput } from 'src/user-trip/dto/create-user-trip.input';
export declare class UpdateTripInput {
    TripId: number;
    TripStatus: string;
    TripDestination: string;
    TripValue: number;
    UserTrip: CreateUserTripInput;
}
