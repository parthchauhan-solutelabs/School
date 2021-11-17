import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNumberString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field({ nullable: true })
  name: string;
  
  @IsEmail()
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @IsNumberString()
  @Length(10)
  @Field({ nullable: true })
  phonenumber?: string;

  @Field({ nullable: true })
  role?: string;
}

