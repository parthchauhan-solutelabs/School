import { forwardRef, Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolResolver } from './school.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { UsersModule } from '../users/users.module';
import { MemberModule } from 'src/member/member.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [TypeOrmModule.forFeature([School]), MemberModule, TeacherModule, forwardRef(() => UsersModule)],
  providers: [SchoolResolver, SchoolService],
  exports: [SchoolService]
})
export class SchoolModule {}
