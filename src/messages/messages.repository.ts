import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async create(createMessageDto: CreateMessageDto) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, createMessageDto };
    await writeFile('messages.json', JSON.stringify(messages));
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async findOne(id: number) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {}

  async remove(id: number) {}
}
