import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { CatService } from './cat/cat.service';

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService, CatService],
})
export class AppModule {}
