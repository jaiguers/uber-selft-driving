import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
import { UpdatePersonInput } from './dto/update-person.input';
import { Users } from 'src/users/users.entity';
import { CreatePersonInput } from './dto/create-person.input';
export declare class PersonResolver {
    private readonly personService;
    constructor(personService: PersonService);
    createPerson(createPersonInput: CreatePersonInput): Promise<Person>;
    findAllPerson(): Promise<Person[]>;
    findOne(id: number): Promise<Person>;
    user(person: Person): Promise<Users>;
    updatePerson(updatePersonInput: UpdatePersonInput): string;
    removePerson(id: number): string;
}
