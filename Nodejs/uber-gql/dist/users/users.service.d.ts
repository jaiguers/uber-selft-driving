import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { UserInput } from './dtos/user-input';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<Users>);
    findAll(): Promise<Users[]>;
    findById(id: string): Promise<Users>;
    findByUserName(username: string): Promise<Users>;
    createUser(user: UserInput): Promise<Users>;
}
