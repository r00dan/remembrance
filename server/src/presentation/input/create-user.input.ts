import { IsEmail, IsNotEmpty, Min, Max, Length } from 'class-validator';

export class CreateUserInput {
  @IsNotEmpty()
  public id!: string;

  @IsNotEmpty()
  public username!: string;

  @IsNotEmpty()
  @IsEmail()
  public email!: string;

  @IsNotEmpty()
  public password!: string;

  @Length(4, 4)
  @Min(0)
  @Max(9999)
  @IsNotEmpty()
  public secureCode!: string;
}
