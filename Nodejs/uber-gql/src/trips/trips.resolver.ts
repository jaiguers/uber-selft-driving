import { Args, Int, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TripsService } from './trips.service';
import { Query } from '@nestjs/graphql';

import { Trips } from './trip.entity';
import { CreateTripInput } from './dtos/create-trip-input';
import { UserTrip } from 'src/user-trip/entities/user-trip.entity';
import { UserBookingTrip } from 'src/user-booking-trip/entities/user-booking-trip.entity';
import { UpdateTripInput } from './dtos/update-trip-input';

@Resolver(()=> Trips)
export class TripsResolver {

    constructor(
        private service: TripsService,

    ) { }

    @Query((returns) => [Trips])
    findAllTrips(): Promise<Trips[]> {
        return this.service.findAll();
    }

    @Query((returns) => Trips, { nullable: true })
    findById(@Args('id', { type: () => Int }) id: number) {
        return this.service.findById(id);
    }

    @ResolveField((returns) => UserTrip)
    userTrip(@Parent() trip: Trips): Promise<UserTrip> {
        return this.service.findUserTrip(trip.TripId);
    }

    @ResolveField((returns) => UserBookingTrip)
    userBookingTrip(@Parent() trip: Trips): Promise<UserBookingTrip> {
        return this.service.findUserBookingTrip(trip.TripId);
    }

    @Mutation((returns) => Trips)
    createTrip(@Args('newTrip') newTrip: CreateTripInput) {
        return this.service.createTrip(newTrip)
    }

    @Mutation(() => Trips)
    updateTrips(@Args('updateTripInput') updateTripInput: UpdateTripInput):Promise<Trips> {
      return this.service.update(updateTripInput.TripId, updateTripInput);
    }
}
