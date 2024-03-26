import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVehicleInput {

  @Field()
  Description: string

  @Field()
  VehiclePlate: string

  @Field()
  VehicleColor: string

  @Field(() => Int)
  VehicleDoors: number

  @Field()
  VehicleLicenseNumber: string

  @Field({ nullable: true })
  UserId: string
}
