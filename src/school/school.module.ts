import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolResolver } from './school.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([School]), UsersModule],
  providers: [SchoolResolver, SchoolService],
  exports: [SchoolService]
})
export class SchoolModule {}
