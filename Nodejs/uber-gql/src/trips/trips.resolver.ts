import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TripsService } from './trips.service';
import { Query } from '@nestjs/graphql';

import { Trips } from './trip.entity';
import { CreateTripInput } from './dtos/create-trip-input';

@Resolver()
export class TripsResolver {

    constructor(private service: TripsService) { }

    @Query((returns) => Trips, { nullable: true })
    findById(@Args('id') id: number) {
        return this.service.findById(id);
    }

    @Mutation((returns) => Trips)
    createTrip(@Args('newTrip') newTrip: CreateTripInput) {
       return this.service.createTrip(newTrip)
    }
}
