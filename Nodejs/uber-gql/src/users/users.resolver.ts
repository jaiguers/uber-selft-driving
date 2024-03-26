import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UserInput } from './dtos/user-input';

@Resolver(() => Users)
export class UsersResolver {

    constructor(private service: UsersService) { }

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
        return this.service.createUser(newUser);
    }
}
