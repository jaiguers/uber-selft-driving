import { Field, InputType, Int } from '@nestjs/graphql'
import { CreateUserBookingTripInput } from 'src/user-booking-trip/dto/create-user-booking-trip.input'

@InputType()
export class UpdateTripInput {

    @Field(() => Int)
    TripId: number

    @Field({ nullable: true })
    TripDescription: string

    @Field({ nullable: true })
    TripDate: Date

    @Field()
    TripStatus: string

    @Field({ nullable: true })
    TripOrigin: string

    @Field({ nullable: true })
    TripDestination: string

    @Field((type) => Int, { nullable: true })
    TripValue: number
}