import { ObjectType, Field } from '@nestjs/graphql'
import { Person } from 'src/person/entities/person.entity'
import { UserBookingTrip } from 'src/user-booking-trip/entities/user-booking-trip.entity'
import { Vehicle } from 'src/vehicles/entities/vehicle.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm'

@Entity('Users')
@ObjectType()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    @Field()
    UserId: string

    @Column()
    @Field()
    UserName: string

    @Column()
    @Field()
    UserPassword: string

    @Column()
    @Field()
    UserStatus: string

    @Column()
    @Field()
    UserType: string

    @OneToOne(() => Person, person => person.User)
    @JoinColumn()
    @Field(() => Person, { nullable: true })
    Person: Person

    @OneToOne(() => Vehicle, vehicle => vehicle.User)
    @Field(() => Vehicle, { nullable: true })
    Vehicle: Vehicle

    @OneToMany(() => UserBookingTrip, userBookingTrip => userBookingTrip.User)
    @Field(() => UserBookingTrip, { nullable: true })
    UserBookingTrip: UserBookingTrip
}