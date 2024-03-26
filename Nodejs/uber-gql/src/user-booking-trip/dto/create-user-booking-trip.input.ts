import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserBookingTripInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
