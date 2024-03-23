import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TripsService } from './trips.service';
import { TripsResolver } from './trips.resolver';
import { Trips } from './trip.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Trips])],
  providers: [TripsService, TripsResolver]
})
export class TripsModule {}
