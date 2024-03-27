import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Users } from 'src/users/users.entity';
import { Column, Entity, In, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Person')
@ObjectType()
export class Person {

  @PrimaryGeneratedColumn('identity')
  @Field((type) => Int, { description: 'LLave primaria' })
  PersonId: number

  @Column()
  @Field()
  PersonName: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  PersonPhone?: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  PersonAddress?: string

  @Column()
  @Field()
  PersonStatus: string

  @Column()
  @Field({ description: 'Relación con Users' })
  UserId: string

  @OneToOne(() => Users, (users) => users.Person)
  @Field(() => Users, { nullable: true })
  User: Users
}
