import { Injectable } from '@nestjs/common';
import { CreateVehicleInput } from './dto/create-vehicle.input';
import { UpdateVehicleInput } from './dto/update-vehicle.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';

@Injectable()
export class VehiclesService {

  constructor(@InjectRepository(Vehicle) private vehicleRepo: Repository<Vehicle>) { }

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

  update(id: number, updateVehicleInput: UpdateVehicleInput) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
