import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserTrip } from 'src/user-trip/entities/user-trip.entity';
import { Users } from 'src/users/users.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vehicles')
@ObjectType()
export class Vehicle {
  @PrimaryGeneratedColumn('identity')
  @Field(() => Int, { description: 'Llave primaria de vehiculos' })
  VehicleId: number

  @Column()
  @Field()
  Description: string

  @Column()
  @Field()
  VehiclePlate: string

  @Column()
  @Field()
  VehicleColor: string

  @Column()
  @Field(() => Int)
  VehicleDoors: number

  @Column()
  @Field()
  VehicleLicenseNumber:string

  @Column()
  @Field()
  UserId: string

  @OneToOne(() => Users, (users) => users.Person)
  @Field(() => Users, { nullable: true })
  User: Users

  @OneToMany(()=> UserTrip, (userTrip)=> userTrip.Vehicle)
  @Field(()=> UserTrip, {nullable:true})
  UserTrip:UserTrip

}
