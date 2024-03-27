import { Module } from '@nestjs/common';
import { UserTripService } from './user-trip.service';
import { UserTripResolver } from './user-trip.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTrip } from './entities/user-trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTrip])],
  providers: [UserTripResolver, UserTripService],
  exports: [UserTripService]
})
export class UserTripModule { }
