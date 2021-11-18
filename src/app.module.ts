import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { SchoolModule } from './school/school.module';
import { MemberModule } from './member/member.module';
import { JournalModule } from './journal/journal.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { getMetadataArgsStorage } from 'typeorm';
import * as ormconfig from './ormconfig';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   username: 'password1',
    //   host: 'localhost',
    //   password: 'password',
    //   database: 'SchoolDb',
    //   entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
    //   synchronize: false,
    //   migrations: ["dist/src/db/migrations/*{.ts,.js}"],
    //   cli: { migrationsDir: 'src/db/migrations'}
    // }),
    TypeOrmModule.forRoot(ormconfig),
    StudentModule,
    TeacherModule,
    SchoolModule,
    MemberModule,
    JournalModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
