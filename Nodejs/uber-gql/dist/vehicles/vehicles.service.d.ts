import { CreateVehicleInput } from './dto/create-vehicle.input';
import { UpdateVehicleInput } from './dto/update-vehicle.input';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
export declare class VehiclesService {
    private vehicleRepo;
    private userService;
    constructor(vehicleRepo: Repository<Vehicle>, userService: UsersService);
    create(createVehicleInput: CreateVehicleInput): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findOne(id: number): Promise<Vehicle>;
    findUserById(id: string): Promise<Users>;
    update(id: number, updateVehicleInput: UpdateVehicleInput): string;
    remove(id: number): string;
}
