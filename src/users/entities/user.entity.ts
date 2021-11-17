import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';
import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn } from 'typeorm';
import { Member } from '../../member/entities/member.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  phonenumber: string;

  @Column({ unique: true })
  @Field()
  email: string;
  
  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  role: string;

  @CreateDateColumn({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => School, school => school.user, { nullable: true })
  school: School[];

  @OneToMany(() => Member, member => member.user, { nullable: true })
  member: Member[];

  @OneToMany(() => Student, student => student.user, { nullable: true })
  student: Student[];

  @OneToMany(() => Teacher, teacher => teacher.user, { nullable: true })
  teacher: Teacher[];

}
