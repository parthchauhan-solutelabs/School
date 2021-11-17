import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { Student } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolModule } from 'src/school/school.module';
import { JournalModule } from 'src/journal/journal.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), JournalModule],
  providers: [StudentResolver, StudentService]
})
export class StudentModule {}
