import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { TripsService } from './trips.service';
import { Query } from '@nestjs/graphql';

import { Trips } from './trip.entity';
import { CreateTripInput } from './dtos/create-trip-input';

@Resolver()
export class TripsResolver {

    constructor(private service: TripsService) { }

    @Query((returns) => Trips)
    findAllTrips(): Promise<Trips[]> {
        return this.service.findAll();
    }

    @Query((returns) => Trips, { nullable: true })
    findById(@Args('id', { type: () => Int }) id: number) {
        return this.service.findById(id);
    }

    @Mutation((returns) => Trips)
    createTrip(@Args('newTrip') newTrip: CreateTripInput) {
        return this.service.createTrip(newTrip)
    }
}
