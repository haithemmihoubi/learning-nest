import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  create(createMessageDto: CreateMessageDto) {
    return createMessageDto;
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
  }

  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {}

  async remove(id: number) {}
}
