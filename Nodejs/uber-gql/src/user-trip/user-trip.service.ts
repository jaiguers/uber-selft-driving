import { Injectable } from '@nestjs/common';
import { CreateUserTripInput } from './dto/create-user-trip.input';
import { UpdateUserTripInput } from './dto/update-user-trip.input';

@Injectable()
export class UserTripService {
  create(createUserTripInput: CreateUserTripInput) {
    return 'This action adds a new userTrip';
  }

  findAll() {
    return `This action returns all userTrip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTrip`;
  }

  update(id: number, updateUserTripInput: UpdateUserTripInput) {
    return `This action updates a #${id} userTrip`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTrip`;
  }
}
