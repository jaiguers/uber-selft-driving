import { UserTripService } from './user-trip.service';
import { CreateUserTripInput } from './dto/create-user-trip.input';
import { UpdateUserTripInput } from './dto/update-user-trip.input';
export declare class UserTripResolver {
    private readonly userTripService;
    constructor(userTripService: UserTripService);
    createUserTrip(createUserTripInput: CreateUserTripInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateUserTrip(updateUserTripInput: UpdateUserTripInput): string;
    removeUserTrip(id: number): string;
}
