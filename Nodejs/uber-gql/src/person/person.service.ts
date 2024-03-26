import { Injectable } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/users.entity';

@Injectable()
export class PersonService {

  constructor(@InjectRepository(Person)
  private personRepo: Repository<Person>,
    private userService: UsersService,
  ) { }

  create(createPersonInput: CreatePersonInput): Promise<Person> {
    const newPerson = this.personRepo.create(createPersonInput);
    return this.personRepo.save(newPerson);
  }

  findAll(): Promise<Person[]> {
    return this.personRepo.find();
  }

  findOne(id: number): Promise<Person> {
    return this.personRepo.findOne({ where: { PersonId: id } });
  }

  findUser(id: string): Promise<Users> {
    return this.userService.findById(id);
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
