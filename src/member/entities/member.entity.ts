import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Member {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  age: number;

  @OneToOne(() => School, school => school.member, { nullable: true, createForeignKeyConstraints: false })
  @JoinColumn({ name: 'school_id' })
  school: School;

  @ManyToOne(() => User, user => user.school)
  @Field(type => User)
  user: User;

  @OneToOne(() => User, user => user.member, { nullable: true, createForeignKeyConstraints: false })
  @JoinColumn({ name: 'created_by' })
  created_by: User;
}
