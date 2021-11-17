import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';
import { Student } from 'src/student/entities/student.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Teacher {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  age: number;

  @CreateDateColumn({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => Student, student => student.teacher)
  @Field(type => [Student], { nullable: true })
  student?: Student[];

  @ManyToOne(() => School, school => school.teacher)
  @Field(type => School)
  school: School;

  @ManyToOne(() => User, user => user.school)
  @Field(type => User)
  user: User;
}
