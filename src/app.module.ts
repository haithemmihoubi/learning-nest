import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { CatService } from './cat/cat.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [CatModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService, CatService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cat');
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });
    // apply  for a full controller
    // .forRoutes(CatsController);
    //! The apply() method may either take a single middleware, or multiple arguments to specify multiple middlewares.
    // for more https://docs.nestjs.com/middleware
  }
}
