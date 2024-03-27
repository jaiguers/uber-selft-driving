import { UserTrip } from 'src/user-trip/entities/user-trip.entity';
import { Users } from 'src/users/users.entity';
export declare class Vehicle {
    VehicleId: number;
    Description: string;
    VehiclePlate: string;
    VehicleColor: string;
    VehicleDoors: number;
    VehicleLicenseNumber: string;
    UserId: string;
    User: Users;
    UserTrip: UserTrip;
}
