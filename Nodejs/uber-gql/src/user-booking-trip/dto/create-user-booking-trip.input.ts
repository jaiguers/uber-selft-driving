import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserBookingTripInput {
  @Field({ nullable: true })
  UserBookingTripDateInit: Date

  @Field({ nullable: true })
  UserBookingTripDateEnd: Date

  @Field(() => Int, { nullable: true })
  TripId: number

  @Field()
  UserTenentId: string
}
