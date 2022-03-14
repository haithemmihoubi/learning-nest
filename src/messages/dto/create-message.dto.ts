import { IsString } from 'class-validator';
//npm i --save class-validator class-transformer
export class CreateMessageDto {
  @IsString()
  private content: string;
}
