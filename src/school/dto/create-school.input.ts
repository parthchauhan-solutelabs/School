import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateSchoolInput {
  @Column()
  @Field()
  name: string;
}
