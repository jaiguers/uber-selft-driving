import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TripsService } from './trips.service';
import { TripsResolver } from './trips.resolver';
import { Trips } from './trip.entity';
import { UserTripModule } from 'src/user-trip/user-trip.module';
import { UserBookingTripModule } from 'src/user-booking-trip/user-booking-trip.module';

@Module({
  imports: [TypeOrmModule.forFeature([Trips]), UserTripModule, UserBookingTripModule],
  providers: [TripsService, TripsResolver]
})
export class TripsModule { }
