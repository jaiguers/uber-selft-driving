import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreatePersonInput {

  @IsNotEmpty({ message: "PersonName es requerido" })
  @IsAlpha('es-ES', { message: "PersonName debe contener solo letras" })
  @Field({ description: 'Nombre de la persona' })
  PersonName: string

  @IsOptional()
  @Field()
  PersonPhone: string

  @IsOptional()
  @Field()
  PersonAddress: string

  @IsOptional()
  @Field()
  PersonStatus: string

  @IsOptional()
  @Field({ nullable: true })
  UserId: string
}
