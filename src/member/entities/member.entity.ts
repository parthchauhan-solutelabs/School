import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Member {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @OneToOne(() => School, school => school.member, { nullable: true, createForeignKeyConstraints: false })
  @JoinColumn({ name: 'school_id' })
  school: School;
}
