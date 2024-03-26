import { Injectable } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {

  constructor(@InjectRepository(Person) private personRepo: Repository<Person>) { }

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

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
