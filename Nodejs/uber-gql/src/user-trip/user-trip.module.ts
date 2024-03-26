import { Module } from '@nestjs/common';
import { UserTripService } from './user-trip.service';
import { UserTripResolver } from './user-trip.resolver';

@Module({
  providers: [UserTripResolver, UserTripService],
})
export class UserTripModule {}
