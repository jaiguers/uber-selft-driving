import { Person } from 'src/person/entities/person.entity';
import { UserBookingTrip } from 'src/user-booking-trip/entities/user-booking-trip.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
export declare class Users {
    UserId: string;
    UserName: string;
    UserPassword: string;
    UserStatus: string;
    UserType: string;
    Person: Person;
    Vehicle: Vehicle;
    UserBookingTrip: UserBookingTrip;
}
