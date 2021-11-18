import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolService } from 'src/school/school.service';
import { Repository } from 'typeorm';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(@InjectRepository(Teacher) private teacherRepository: Repository<Teacher>) {}

  create(createTeacherInput: CreateTeacherInput) {
    return 'This action adds a new teacher';
  }

  findAll() {
    return `This action returns all teacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherInput: UpdateTeacherInput) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
