import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Member } from 'src/member/entities/member.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class School {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @ManyToOne(() => User, user => user.school)
  @Field(type => User)
  user: User;

  @OneToMany(() => Teacher, teacher => teacher.school)
  @Field(type => [Teacher])
  teacher?: Teacher[];

  @OneToOne(() => Member, member => member.school) // specify inverse side as a second parameter
  member: Member;
}
