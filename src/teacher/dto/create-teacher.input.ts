import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateTeacherInput {
  @Column()
  @Field(type => Int)
  age: number;
}
