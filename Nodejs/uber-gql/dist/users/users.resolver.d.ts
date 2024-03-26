import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UserInput } from './dtos/user-input';
export declare class UsersResolver {
    private service;
    constructor(service: UsersService);
    findAll(): Promise<Users[]>;
    findByUserId(id: string): Promise<Users>;
    findByUserName(userName: string): Promise<Users>;
    createUser(newUser: UserInput): Promise<Users>;
}
