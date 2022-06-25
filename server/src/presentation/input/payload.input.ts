import { IsNotEmpty } from 'class-validator';

export class PayloadInput {
  @IsNotEmpty()
  public username: string;

  @IsNotEmpty()
  public userId: string;
}
