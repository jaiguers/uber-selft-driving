import { VehiclesService } from './vehicles.service';
import { Vehicle } from './entities/vehicle.entity';
import { UpdateVehicleInput } from './dto/update-vehicle.input';
import { Users } from 'src/users/users.entity';
import { CreateVehicleInput } from './dto/create-vehicle.input';
export declare class VehiclesResolver {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    createVehicle(createVehicleInput: CreateVehicleInput): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findOne(id: number): Promise<Vehicle>;
    user(vehicle: Vehicle): Promise<Users>;
    updateVehicle(updateVehicleInput: UpdateVehicleInput): string;
    removeVehicle(id: number): string;
}
