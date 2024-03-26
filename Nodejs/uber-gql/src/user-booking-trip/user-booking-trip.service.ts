import { Injectable } from '@nestjs/common';
import { CreateUserBookingTripInput } from './dto/create-user-booking-trip.input';
import { UpdateUserBookingTripInput } from './dto/update-user-booking-trip.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBookingTrip } from './entities/user-booking-trip.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserBookingTripService {

  constructor(@InjectRepository(UserBookingTrip) private userBookingRepo: Repository<UserBookingTrip>) { }

  create(createUserBookingTripInput: CreateUserBookingTripInput) {
    const newBooking = this.userBookingRepo.create(createUserBookingTripInput);
    return this.userBookingRepo.save(newBooking);
  }

  findAll() {
    return this.userBookingRepo.find();
  }

  findOne(id: number) {
    return this.userBookingRepo.findOne({ where: { UserBookingTripId: id } });
  }

  update(id: number, updateUserBookingTripInput: UpdateUserBookingTripInput) {
    return `This action updates a #${id} userBookingTrip`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBookingTrip`;
  }
}
