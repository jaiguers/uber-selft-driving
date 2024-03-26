import { Injectable } from '@nestjs/common';
import { CreateUserBookingTripInput } from './dto/create-user-booking-trip.input';
import { UpdateUserBookingTripInput } from './dto/update-user-booking-trip.input';

@Injectable()
export class UserBookingTripService {
  create(createUserBookingTripInput: CreateUserBookingTripInput) {
    return 'This action adds a new userBookingTrip';
  }

  findAll() {
    return `This action returns all userBookingTrip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBookingTrip`;
  }

  update(id: number, updateUserBookingTripInput: UpdateUserBookingTripInput) {
    return `This action updates a #${id} userBookingTrip`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBookingTrip`;
  }
}
