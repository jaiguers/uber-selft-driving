import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Trips } from 'src/trips/trip.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class UserTrip {

  @PrimaryGeneratedColumn('identity')
  @Field(() => Int, { description: 'Llave primaria' })
  UserTripId: number;

  @Column()
  @Field()
  UserTripDateAcept: Date

  @Column()
  @Field()
  UserTripDateEnd: Date

  @Column()
  @Field(() => Int)
  VehicleId: number

  @Column()
  @Field()
  UserTripEarnings: number

  @Column()
  @Field()
  UserTripWaitingTime: string

  @Column()
  @Field()
  UserTripStatus: boolean

  @Column()
  @Field(() => Int)
  TripId: number

  @ManyToOne(() => Trips, (trips) => trips.UserTrip)
  @Field(() => Trips, { nullable: true })
  Trips: Trips

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.UserTrip)
  @Field(() => Vehicle)
  Vehicle: Vehicle
}
