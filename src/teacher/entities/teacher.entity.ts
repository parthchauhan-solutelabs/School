import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';
import { Student } from 'src/student/entities/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Teacher {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @OneToMany(() => Student, student => student.teacher)
  @Field(type => [Student], { nullable: true })
  student?: Student[];

  @ManyToOne(() => School, school => school.teacher)
  @Field(type => School)
  school: School;
}
