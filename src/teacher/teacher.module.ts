import { forwardRef, Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherResolver } from './teacher.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { SchoolModule } from 'src/school/school.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher]), UsersModule, forwardRef(() => SchoolModule) ],
  providers: [TeacherResolver, TeacherService],
  exports: [TeacherService]

})
export class TeacherModule {}
