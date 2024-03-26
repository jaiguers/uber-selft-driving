import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Trips } from 'src/trips/trip.entity';
import { Users } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class UserBookingTrip {
  @PrimaryGeneratedColumn('identity')
  @Field()
  UserBookingTripId: number

  @Column()
  @Field()
  UserBookingTripDateInit: Date

  @Column()
  @Field()
  UserBookingTripDateEnd: Date

  @Column()
  @Field()
  TripId: number

  @Column()
  @Field()
  UserTenentId: string

  @ManyToOne(() => Trips, (trip) => trip)
  @Field(() => Trips, { nullable: true })
  Trip: Trips

  @ManyToOne(() => Users, (user) => user.UserBookingTrip)
  @Field(() => Users)
  User: Users

}
