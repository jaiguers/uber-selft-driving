import { UserBookingTrip } from 'src/user-booking-trip/entities/user-booking-trip.entity';
import { UserTrip } from 'src/user-trip/entities/user-trip.entity';
export declare class Trips {
    TripId: number;
    TripDescription: string;
    TripDate: Date;
    TripStatus: string;
    TripOrigin: string;
    TripDestination: string;
    TripValue: number;
    UserTrip: UserTrip;
    UserBookingTrip: UserBookingTrip[];
}
