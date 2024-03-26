import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Trips } from './trip.entity'
import { CreateTripInput } from './dtos/create-trip-input';

@Injectable()
export class TripsService {

    constructor(@InjectRepository(Trips) private tripRepository: Repository<Trips>) { }

    findAll(): Promise<Trips[]> {
        return this.tripRepository.find();
    }

    async findById(id: number): Promise<Trips> {
        return this.tripRepository.findOne({ where: { TripId: id } });
    }

    async createTrip(trip: CreateTripInput): Promise<Trips> {

        const newTrip = this.tripRepository.create(trip)
        return this.tripRepository.save(newTrip);
    }
}
