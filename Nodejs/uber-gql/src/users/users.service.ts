import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from './users.entity';
import { UserInput } from './dtos/user-input';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {
    }

    async findAll(): Promise<Users[]> {
        return this.userRepo.find();
    }

    async findById(id: string): Promise<Users> {
        return this.userRepo.findOne({ where: { UserId: id } });
    }

    async findByUserName(username: string): Promise<Users> {
        return this.userRepo.findOne({ where: { UserName: username } });
    }

    async createUser(user: UserInput): Promise<Users> {
        const encryptPassword = await encodePassword(user.UserPassword);
        user.UserPassword = encryptPassword;

        const newUser = this.userRepo.create(user);
        return this.userRepo.save(newUser);
    }
}
