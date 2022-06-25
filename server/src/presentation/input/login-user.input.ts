import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserInput {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  public password: string;
}
