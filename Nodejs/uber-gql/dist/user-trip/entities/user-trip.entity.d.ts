import { Trips } from 'src/trips/trip.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
export declare class UserTrip {
    UserTripId: number;
    UserTripDateAcept: Date;
    UserTripDateEnd: Date;
    VehicleId: number;
    UserTripEarnings: number;
    UserTripWaitingTime: string;
    UserTripStatus: boolean;
    TripId: number;
    Trip: Trips;
    Vehicle: Vehicle;
}
