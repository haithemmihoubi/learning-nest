import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
  create(createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }

  findAll(): string {
    return `This action returns all cat`;
  }

  findOne(id: number): string {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto): string {
    return `This action updates a #${id} cat`;
  }

  remove(id: number): string {
    return `This action removes a #${id} cat`;
  }
}
