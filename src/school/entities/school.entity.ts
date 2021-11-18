import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Member } from 'src/member/entities/member.entity';
import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class School {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @ManyToOne(() => User, user => user.school)
  @Field(type => User)
  user: User;

  @OneToMany(() => Teacher, teacher => teacher.school)
  @Field(type => [Teacher])
  teacher?: Teacher[];

  @OneToOne(() => School, school => school.member, { nullable: true, createForeignKeyConstraints: false })
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @OneToMany(() => Student, student => student.school)
  @Field(type => [Student])
  student?: Student[];

}
