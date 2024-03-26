import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserBookingTripService } from './user-booking-trip.service';
import { UserBookingTrip } from './entities/user-booking-trip.entity';
import { CreateUserBookingTripInput } from './dto/create-user-booking-trip.input';
import { UpdateUserBookingTripInput } from './dto/update-user-booking-trip.input';

@Resolver(() => UserBookingTrip)
export class UserBookingTripResolver {
  constructor(private readonly userBookingTripService: UserBookingTripService) {}

  @Mutation(() => UserBookingTrip)
  createUserBookingTrip(@Args('createUserBookingTripInput') createUserBookingTripInput: CreateUserBookingTripInput) {
    return this.userBookingTripService.create(createUserBookingTripInput);
  }

  @Query(() => [UserBookingTrip], { name: 'userBookingTrip' })
  findAll() {
    return this.userBookingTripService.findAll();
  }

  @Query(() => UserBookingTrip, { name: 'userBookingTrip' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userBookingTripService.findOne(id);
  }

  @Mutation(() => UserBookingTrip)
  updateUserBookingTrip(@Args('updateUserBookingTripInput') updateUserBookingTripInput: UpdateUserBookingTripInput) {
    return this.userBookingTripService.update(updateUserBookingTripInput.id, updateUserBookingTripInput);
  }

  @Mutation(() => UserBookingTrip)
  removeUserBookingTrip(@Args('id', { type: () => Int }) id: number) {
    return this.userBookingTripService.remove(id);
  }
}
