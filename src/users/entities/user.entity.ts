import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn } from 'typeorm';

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

}
