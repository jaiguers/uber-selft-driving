import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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
}