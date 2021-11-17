import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { Student } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalModule } from 'src/journal/journal.module';
import { MemberModule } from 'src/member/member.module';
import { TeacherModule } from 'src/teacher/teacher.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), JournalModule, UsersModule, TeacherModule, MemberModule],
  providers: [StudentResolver, StudentService],
  exports: [StudentService]
})
export class StudentModule {}
