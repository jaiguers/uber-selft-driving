import { CreateUserBookingTripInput } from './create-user-booking-trip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserBookingTripInput extends PartialType(CreateUserBookingTripInput) {
  @Field(() => Int)
  id: number;
}
