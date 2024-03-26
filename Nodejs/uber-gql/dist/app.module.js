"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const trips_module_1 = require("./trips/trips.module");
const users_module_1 = require("./users/users.module");
const person_module_1 = require("./person/person.module");
const vehicles_module_1 = require("./vehicles/vehicles.module");
const user_trip_module_1 = require("./user-trip/user-trip.module");
const user_booking_trip_module_1 = require("./user-booking-trip/user-booking-trip.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({ driver: apollo_1.ApolloDriver, autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql') }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'kesavan.db.elephantsql.com',
                port: 5432,
                username: 'minqfqlc',
                password: 'io0Wgq8ovAxPDSPNlrDqgmb12FlTrBkh',
                database: 'minqfqlc',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                autoLoadEntities: true,
            }),
            auth_module_1.AuthModule,
            trips_module_1.TripsModule,
            users_module_1.UsersModule,
            person_module_1.PersonModule,
            vehicles_module_1.VehiclesModule,
            user_trip_module_1.UserTripModule,
            user_booking_trip_module_1.UserBookingTripModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map