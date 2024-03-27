import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Trips } from 'src/trips/trip.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserTrip')
@ObjectType()
export class UserTrip {

  @PrimaryGeneratedColumn('identity')
  @Field(() => Int, { description: 'Llave primaria' })
  UserTripId: number;

  @Column()
  @Field()
  UserTripDateAcept: Date

  @Column({ nullable: true })
  @Field({ nullable: true })
  UserTripDateEnd: Date

  @Column()
  @Field(() => Int)
  VehicleId: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  UserTripEarnings: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  UserTripWaitingTime: string

  @Column()
  @Field()
  UserTripStatus: boolean

  @Column()
  @Field(() => Int)
  TripId: number

  @ManyToOne(() => Trips, (trips) => trips.UserTrip)
  @JoinColumn({
    name: "TripId",
    foreignKeyConstraintName: "USERTRIP_TRIP_FK",
    referencedColumnName: "TripId"
  })
  @Field(() => Trips)
  Trip: Trips

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.UserTrip)
  @JoinColumn({
    name: "VehicleId",
    foreignKeyConstraintName: "USERTRIP_VEHICLE_FK",
    referencedColumnName: "VehicleId"
  })
  @Field(() => Vehicle)
  Vehicle: Vehicle
}
