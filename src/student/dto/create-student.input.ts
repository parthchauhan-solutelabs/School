import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateStudentInput {
  @Column()
  @Field(type => Int)
  Roll_no: number;

  @Column()
  @Field(type => Int)
  age: number;
}
