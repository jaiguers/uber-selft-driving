import { Field, InputType, Int } from '@nestjs/graphql'
import { CreateUserBookingTripInput } from 'src/user-booking-trip/dto/create-user-booking-trip.input'
import { CreateUserTripInput } from 'src/user-trip/dto/create-user-trip.input'

@InputType()
export class UpdateTripInput {

    @Field(() => Int)
    TripId: number

    @Field()
    TripStatus: string

    @Field({ nullable: true })
    TripDestination: string

    @Field((type) => Int, { nullable: true })
    TripValue: number

    @Field({ nullable: true })
    UserTrip: CreateUserTripInput
}