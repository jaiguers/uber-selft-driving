import { UserTripService } from './user-trip.service';
import { UserTrip } from './entities/user-trip.entity';
import { CreateUserTripInput } from './dto/create-user-trip.input';
import { UpdateUserTripInput } from './dto/update-user-trip.input';
export declare class UserTripResolver {
    private readonly userTripService;
    constructor(userTripService: UserTripService);
    createUserTrip(createUserTripInput: CreateUserTripInput): Promise<UserTrip>;
    findAll(): Promise<UserTrip[]>;
    findOne(id: number): Promise<UserTrip>;
    updateUserTrip(updateUserTripInput: UpdateUserTripInput): string;
    removeUserTrip(id: number): string;
}
