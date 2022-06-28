import { IsNotEmpty } from 'class-validator';

export class CreateServiceInput {
  @IsNotEmpty()
  public id!: string;

  @IsNotEmpty()
  public name!: string;

  @IsNotEmpty()
  public password!: string;

  @IsNotEmpty()
  public email!: string;

  public username?: string;

  public phoneNumber?: string;

  public icon?: string;
}
