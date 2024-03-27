import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Trips } from 'src/trips/trip.entity';
import { Users } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserBookingTrip')
@ObjectType()
export class UserBookingTrip {
  @PrimaryGeneratedColumn('identity')
  @Field(() => Int)
  UserBookingTripId: number

  @Column()
  @Field()
  UserBookingTripDateInit: Date

  @Column({ nullable: true })
  @Field({ nullable: true })
  UserBookingTripDateEnd: Date

  @Column()
  @Field(() => Int)
  TripId: number

  @Column()
  @Field({ description: 'Relación con Users tipo Person' })
  UserTenentId: string

  @ManyToOne(() => Trips, (trips) => trips.UserBookingTrip)
  @JoinColumn({
    name: "TripId",
    foreignKeyConstraintName: "USERBOKINGTRIP_TRIP_FK",
    referencedColumnName: "TripId"
  })
  @Field(() => Trips)
  Trip: Trips

  @ManyToOne(() => Users, (user) => user.UserBookingTrip)
  @JoinColumn({
    name: "UserTenentId",
    foreignKeyConstraintName: "USERBOKINGTRIP_USER_FK",
    referencedColumnName: "UserId"
  })
  @Field(() => Users)
  User: Users

}
