import { CreateUserTripInput } from './create-user-trip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserTripInput extends PartialType(CreateUserTripInput) {
  @Field(() => Int)
  id: number;
}
