import { Global, Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
@Global()
@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
