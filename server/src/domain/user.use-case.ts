import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import * as model from 'src/inrastructure/model';
import { CreateUserInput, PayloadInput } from 'src/presentation/input';

@Injectable()
export class UserUseCase {
  constructor(
    @InjectRepository(model.User)
    private readonly userRepository: Repository<model.User>,
    private readonly jwtService: JwtService,
  ) {}

  public async getAllUsers(): Promise<model.User[]> {
    return this.userRepository.find();
  }

  public async createUser(input: CreateUserInput): Promise<model.User> {
    const { email, password } = input;
    console.log(await this.isUserExists(email));
    if (await this.isUserExists(email)) {
      return null;
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    input.password = hash;

    const user = await this.userRepository.create(input);
    await this.userRepository.save(user);

    return user;
  }

  private async isUserExists(email: string): Promise<boolean> {
    const result = await this.userRepository.findOne({ where: { email } });
    return !!result;
  }

  private async validateUser({
    username,
    password,
  }: Partial<model.User>): Promise<any> {
    const foundUser = await this.userRepository.findOne({
      where: { username },
    });

    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        const { password, ...result } = foundUser;
        return result;
      }
      return null;
    }
    return null;
  }

  private async getToken(payload: PayloadInput): Promise<{ token: string }> {
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
