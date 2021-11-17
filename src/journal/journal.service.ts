import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJournalInput } from './dto/create-journal.input';
import { UpdateJournalInput } from './dto/update-journal.input';
import { Journal } from './entities/journal.entity';

@Injectable()
export class JournalService {
  constructor(@InjectRepository(Journal) private journalRepository: Repository<Journal>) {}
  create(createJournalInput: CreateJournalInput) {
    return 'This action adds a new journal';
  }

  findAll() {
    return `This action returns all journal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} journal`;
  }

  update(id: number, updateJournalInput: UpdateJournalInput) {
    return `This action updates a #${id} journal`;
  }

  remove(id: number) {
    return `This action removes a #${id} journal`;
  }
}
