import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Student } from 'src/student/entities/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Journal {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  Notes: string;

  @ManyToOne(() => Student, student => student.journals)
  @Field(type => Journal)
  student: Student;
}