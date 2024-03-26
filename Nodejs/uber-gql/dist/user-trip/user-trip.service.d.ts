import { CreateUserTripInput } from './dto/create-user-trip.input';
import { UpdateUserTripInput } from './dto/update-user-trip.input';
export declare class UserTripService {
    create(createUserTripInput: CreateUserTripInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserTripInput: UpdateUserTripInput): string;
    remove(id: number): string;
}
