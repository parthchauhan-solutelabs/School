import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateJournalInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  Notes: string;
  
}
