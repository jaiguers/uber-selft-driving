import { ObjectType, Field, Int } from '@nestjs/graphql'
import { UserBookingTrip } from 'src/user-booking-trip/entities/user-booking-trip.entity'
import { UserTrip } from 'src/user-trip/entities/user-trip.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'

@Entity('Trips')
@ObjectType()
export class Trips {
    @PrimaryGeneratedColumn('identity')
    @Field((type) => Int)
    TripId: number

    @Column()
    @Field()
    TripDescription: string

    @Column()
    @Field()
    TripDate: Date

    @Column()
    @Field()
    TripStatus: string

    @Column()
    @Field()
    TripOrigin: string

    @Column()
    @Field()
    TripDestination: string

    @Column()
    @Field((type) => Int)
    TripValue: number

    @OneToMany(() => UserTrip, (userTrip) => userTrip.Trip)
    @Field(() => UserTrip)
    UserTrip: UserTrip

    @OneToMany(() => UserBookingTrip, (userBookingTrip) => userBookingTrip.Trip)
    @Field(() => UserBookingTrip)
    UserBookingTrip: UserBookingTrip[]
}