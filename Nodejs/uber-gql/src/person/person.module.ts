import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { Person } from './entities/person.entity';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [TypeOrmModule.forFeature([Person]), UsersModule],
  providers: [PersonResolver, PersonService],
  exports: [PersonService]
})
export class PersonModule { }
