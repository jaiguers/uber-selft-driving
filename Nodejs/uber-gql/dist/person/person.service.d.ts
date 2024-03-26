import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/users.entity';
export declare class PersonService {
    private personRepo;
    private userService;
    constructor(personRepo: Repository<Person>, userService: UsersService);
    create(createPersonInput: CreatePersonInput): Promise<Person>;
    findAll(): Promise<Person[]>;
    findOne(id: number): Promise<Person>;
    findUser(id: string): Promise<Users>;
    update(id: number, updatePersonInput: UpdatePersonInput): string;
    remove(id: number): string;
}
