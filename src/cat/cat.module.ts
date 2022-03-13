import { Module, Global } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
// define this Module a global
@Global()
@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService],
})
export class CatModule {}
