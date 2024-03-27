import { Trips } from 'src/trips/trip.entity';
import { Users } from 'src/users/users.entity';
export declare class UserBookingTrip {
    UserBookingTripId: number;
    UserBookingTripDateInit: Date;
    UserBookingTripDateEnd: Date;
    TripId: number;
    UserTenentId: string;
    Trip: Trips;
    User: Users;
}
