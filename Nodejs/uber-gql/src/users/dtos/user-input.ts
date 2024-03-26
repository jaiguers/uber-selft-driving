import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'
import { CreatePersonInput } from 'src/person/dto/create-person.input'
import { CreateVehicleInput } from 'src/vehicles/dto/create-vehicle.input'

@InputType()
export class UserInput {

    @IsNotEmpty({ message: "UserName es requerido" })
    @MaxLength(100)
    @Field()
    UserName: string

    @MinLength(8, { message: "UserPassword debe tener como minimo 8 caracteres" })
    @Field()
    UserPassword: string

    @IsNotEmpty({ message: "UserType es requerido" })
    @Field()
    UserType: string

    @Field()
    UserStatus: string
}