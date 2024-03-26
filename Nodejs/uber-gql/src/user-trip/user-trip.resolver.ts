import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserTripService } from './user-trip.service';
import { UserTrip } from './entities/user-trip.entity';
import { CreateUserTripInput } from './dto/create-user-trip.input';
import { UpdateUserTripInput } from './dto/update-user-trip.input';

@Resolver(() => UserTrip)
export class UserTripResolver {
  constructor(private readonly userTripService: UserTripService) {}

  @Mutation(() => UserTrip)
  createUserTrip(@Args('createUserTripInput') createUserTripInput: CreateUserTripInput) {
    return this.userTripService.create(createUserTripInput);
  }

  @Query(() => [UserTrip], { name: 'userTrip' })
  findAll() {
    return this.userTripService.findAll();
  }

  @Query(() => UserTrip, { name: 'userTrip' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userTripService.findOne(id);
  }

  @Mutation(() => UserTrip)
  updateUserTrip(@Args('updateUserTripInput') updateUserTripInput: UpdateUserTripInput) {
    return this.userTripService.update(updateUserTripInput.id, updateUserTripInput);
  }

  @Mutation(() => UserTrip)
  removeUserTrip(@Args('id', { type: () => Int }) id: number) {
    return this.userTripService.remove(id);
  }
}
