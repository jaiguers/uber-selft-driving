import { Module } from '@nestjs/common';
import { UserBookingTripService } from './user-booking-trip.service';
import { UserBookingTripResolver } from './user-booking-trip.resolver';

@Module({
  providers: [UserBookingTripResolver, UserBookingTripService],
})
export class UserBookingTripModule {}
