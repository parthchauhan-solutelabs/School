import { forwardRef, Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { SchoolModule } from '../school/school.module';

@Module({
  imports: [TypeOrmModule.forFeature([Member]), forwardRef(()=>SchoolModule)],
  providers: [MemberResolver, MemberService],
  exports: [MemberService]
})
export class MemberModule {}
