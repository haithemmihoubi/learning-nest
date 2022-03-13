import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { CatService } from './cat/cat.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService, CatService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cat');
  }
}
