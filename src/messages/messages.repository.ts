import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

export class MessagesRepository {
  create(createMessageDto: CreateMessageDto) {
    return createMessageDto;
  }

  async  findAll() {
    return `This action returns all messages`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
