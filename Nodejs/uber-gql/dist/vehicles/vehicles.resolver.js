"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const vehicles_service_1 = require("./vehicles.service");
const vehicle_entity_1 = require("./entities/vehicle.entity");
const update_vehicle_input_1 = require("./dto/update-vehicle.input");
const users_entity_1 = require("../users/users.entity");
const create_vehicle_input_1 = require("./dto/create-vehicle.input");
let VehiclesResolver = class VehiclesResolver {
    constructor(vehiclesService) {
        this.vehiclesService = vehiclesService;
    }
    createVehicle(createVehicleInput) {
        return this.vehiclesService.create(createVehicleInput);
    }
    findAll() {
        return this.vehiclesService.findAll();
    }
    findOne(id) {
        return this.vehiclesService.findOne(id);
    }
    user(vehicle) {
        return this.vehiclesService.findUserById(vehicle.UserId);
    }
    updateVehicle(updateVehicleInput) {
        return this.vehiclesService.update(updateVehicleInput.id, updateVehicleInput);
    }
    removeVehicle(id) {
        return this.vehiclesService.remove(id);
    }
};
exports.VehiclesResolver = VehiclesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => vehicle_entity_1.Vehicle),
    __param(0, (0, graphql_1.Args)('createVehicleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vehicle_input_1.CreateVehicleInput]),
    __metadata("design:returntype", void 0)
], VehiclesResolver.prototype, "createVehicle", null);
__decorate([
    (0, graphql_1.Query)(() => [vehicle_entity_1.Vehicle], { name: 'vehicles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiclesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => vehicle_entity_1.Vehicle, { name: 'vehicle' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VehiclesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => users_entity_1.Users),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vehicle_entity_1.Vehicle]),
    __metadata("design:returntype", Promise)
], VehiclesResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.Mutation)(() => vehicle_entity_1.Vehicle),
    __param(0, (0, graphql_1.Args)('updateVehicleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_vehicle_input_1.UpdateVehicleInput]),
    __metadata("design:returntype", void 0)
], VehiclesResolver.prototype, "updateVehicle", null);
__decorate([
    (0, graphql_1.Mutation)(() => vehicle_entity_1.Vehicle),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VehiclesResolver.prototype, "removeVehicle", null);
exports.VehiclesResolver = VehiclesResolver = __decorate([
    (0, graphql_1.Resolver)(() => vehicle_entity_1.Vehicle),
    __metadata("design:paramtypes", [vehicles_service_1.VehiclesService])
], VehiclesResolver);
//# sourceMappingURL=vehicles.resolver.js.map