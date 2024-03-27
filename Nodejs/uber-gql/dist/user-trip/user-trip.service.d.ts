import { CreateUserTripInput } from './dto/create-user-trip.input';
import { UpdateUserTripInput } from './dto/update-user-trip.input';
import { UserTrip } from './entities/user-trip.entity';
import { Repository } from 'typeorm';
export declare class UserTripService {
    private userTripRepo;
    constructor(userTripRepo: Repository<UserTrip>);
    create(createUserTripInput: CreateUserTripInput): Promise<UserTrip>;
    findAll(): Promise<UserTrip[]>;
    findOne(id: number): Promise<UserTrip>;
    findByTrip(TripId: number): Promise<UserTrip>;
    update(id: number, updateUserTripInput: UpdateUserTripInput): string;
    remove(id: number): string;
}
