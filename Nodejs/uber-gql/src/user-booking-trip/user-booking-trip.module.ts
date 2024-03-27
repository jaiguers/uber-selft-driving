import { Module } from '@nestjs/common';
import { UserBookingTripService } from './user-booking-trip.service';
import { UserBookingTripResolver } from './user-booking-trip.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBookingTrip } from './entities/user-booking-trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserBookingTrip])],
  providers: [UserBookingTripResolver, UserBookingTripService],
  exports: [UserBookingTripService]
})
export class UserBookingTripModule { }
