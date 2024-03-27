import { Injectable } from '@nestjs/common';
import { CreateUserTripInput } from './dto/create-user-trip.input';
import { UpdateUserTripInput } from './dto/update-user-trip.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTrip } from './entities/user-trip.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserTripService {

  constructor(@InjectRepository(UserTrip) private userTripRepo: Repository<UserTrip>) { }

  create(createUserTripInput: CreateUserTripInput) {
    createUserTripInput.UserTripDateAcept = new Date();
    const newUserT = this.userTripRepo.create(createUserTripInput);
    return this.userTripRepo.save(newUserT);
  }

  findAll(): Promise<UserTrip[]> {
    return this.userTripRepo.find();
  }

  findOne(id: number) {
    return this.userTripRepo.findOne({ where: { UserTripId: id } });
  }

  findByTrip(TripId: number) {
    return this.userTripRepo.findOne({ where: { TripId } });
  }

  update(id: number, updateUserTripInput: UpdateUserTripInput) {
    return `This action updates a #${id} userTrip`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTrip`;
  }
}
