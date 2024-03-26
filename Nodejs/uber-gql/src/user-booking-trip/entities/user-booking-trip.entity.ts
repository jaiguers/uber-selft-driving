import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserBookingTrip {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
