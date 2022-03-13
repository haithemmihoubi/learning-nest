import { HttpException, HttpStatus } from '@nestjs/common';
export class CatForbiddenException extends HttpException {
  constructor() {
    super('Forbidden cat exeptions', HttpStatus.FORBIDDEN);
  }
}
