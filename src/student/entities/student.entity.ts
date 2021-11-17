import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Journal } from 'src/journal/entities/journal.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Student {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @OneToMany(() => Journal, journal => journal.student)
  @Field(type => [Journal], { nullable: true })
  journals?: Journal[];

  @ManyToOne(() => Teacher, teacher => teacher.student)
  @Field(type => Journal)
  teacher: Teacher;
}