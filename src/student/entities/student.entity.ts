import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Journal } from 'src/journal/entities/journal.entity';
import { School } from 'src/school/entities/school.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Student {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  Roll_no: number;

  @Column()
  @Field(type => Int)
  age: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => Journal, journal => journal.student)
  @Field(type => [Journal], { nullable: true })
  journals?: Journal[];

  @ManyToOne(() => Teacher, teacher => teacher.student)
  @Field(type => Journal)
  teacher: Teacher;

  @ManyToOne(() => School, school => school.student)
  @Field(type => School)
  school: School;

  @ManyToOne(() => User, user => user.student)
  @Field(type => User)
  user: User;
}