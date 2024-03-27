import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserTripInput {

  @Field()
  UserTripDateAcept: Date

  @Field({ nullable: true })
  UserTripDateEnd: Date

  @Field(() => Int)
  VehicleId: number

  @Field({ nullable: true })
  UserTripEarnings: number

  @Field({ nullable: true })
  UserTripWaitingTime: string

  @Field()
  UserTripStatus: boolean

  @Field(() => Int)
  TripId: number
}
