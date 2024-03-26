import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserTrip {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
