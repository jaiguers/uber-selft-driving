import { Field, InputType, Int } from '@nestjs/graphql'
import { CreateUserBookingTripInput } from 'src/user-booking-trip/dto/create-user-booking-trip.input'

@InputType()
export class CreateTripInput {

    @Field()
    TripDescription: string

    @Field()
    TripDate: Date

    @Field()
    TripStatus: string

    @Field()
    TripOrigin: string

    @Field()
    TripDestination: string

    @Field((type) => Int)
    TripValue: number

    @Field(() => CreateUserBookingTripInput)
    UserBookingTripInput: CreateUserBookingTripInput
}