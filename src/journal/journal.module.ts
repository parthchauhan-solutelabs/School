import { forwardRef, Module } from '@nestjs/common';
import { JournalService } from './journal.service';
import { JournalResolver } from './journal.resolver';
import { StudentModule } from '../student/student.module';
import { Journal } from './entities/journal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Journal]), ],
  providers: [JournalResolver, JournalService],
  exports: [JournalService]
})
export class JournalModule {}
