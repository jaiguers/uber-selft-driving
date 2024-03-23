import { Field, InputType, Int } from '@nestjs/graphql'

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
}