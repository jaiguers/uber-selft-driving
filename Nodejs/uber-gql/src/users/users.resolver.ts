import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UserInput } from './dtos/user-input';
import { PersonService } from 'src/person/person.service';
import { VehiclesService } from 'src/vehicles/vehicles.service';

@Resolver()
export class UsersResolver {

    constructor(
        private service: UsersService,
        private personService: PersonService,
        private vehicleService: VehiclesService
    ) { }

    @Query((returns) => [Users], { nullable: true })
    findAll() {
        return this.service.findAll();
    }

    @Query((returns) => Users, { nullable: true })
    findByUserId(@Args('id') id: string) {
        return this.service.findById(id);
    }

    @Query((returns) => Users, { nullable: true })
    findByUserName(@Args('username') userName: string) {
        return this.service.findByUserName(userName);
    }

    @Mutation((returns) => Users)
    async createUser(@Args('newUser') newUser: UserInput) {
        const insertUser = await this.service.createUser(newUser);

        if (newUser.UserType == UserTypes.Person) {
            newUser.newPerson.UserId = insertUser.UserId;
            newUser.newPerson.PersonStatus = 'Active';
            this.personService.create(newUser.newPerson);
        }
        else if (newUser.UserType == UserTypes.Vehicle) {
            newUser.newVehicle.UserId = insertUser.UserId;
            this.vehicleService.create(newUser.newVehicle);
        }

        return insertUser;
    }
}
