import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messageRepository: MessagesRepository) {}

  create(createMessageDto: CreateMessageDto) {
    return this.messageRepository.create(createMessageDto);
  }

  findAll() {
    return this.messageRepository.findAll();
  }

  findOne(id: number) {
    return this.messageRepository.findOne(id);
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
