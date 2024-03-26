import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TripsModule } from './trips/trips.module';
import { UsersModule } from './users/users.module';
import { PersonModule } from './person/person.module';
import { VehiclesModule } from './vehicles/vehicles.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: join(process.cwd(), 'src/schema.gql') }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kesavan.db.elephantsql.com',
      port: 5432,
      username: 'minqfqlc',
      password: 'io0Wgq8ovAxPDSPNlrDqgmb12FlTrBkh',
      database: 'minqfqlc',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    TripsModule,
    UsersModule,
    PersonModule,
    VehiclesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
