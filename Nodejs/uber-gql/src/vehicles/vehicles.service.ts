import { Injectable } from '@nestjs/common';
import { CreateVehicleInput } from './dto/create-vehicle.input';
import { UpdateVehicleInput } from './dto/update-vehicle.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class VehiclesService {

  constructor(@InjectRepository(Vehicle)
  private vehicleRepo: Repository<Vehicle>,
    private userService: UsersService
  ) { }

  create(createVehicleInput: CreateVehicleInput) {
    const newVehicle = this.vehicleRepo.create(createVehicleInput);
    return this.vehicleRepo.save(newVehicle);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepo.find();
  }

  findOne(id: number): Promise<Vehicle> {
    return this.vehicleRepo.findOne({ where: { VehicleId: id } });
  }

  findUserById(id: string): Promise<Users> {
    return this.userService.findById(id);
  }

  update(id: number, updateVehicleInput: UpdateVehicleInput) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
