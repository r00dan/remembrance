import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import * as model from 'src/inrastructure/model';
import {
  CreateUserInput,
  LoginUserInput,
  PayloadInput,
} from 'src/presentation/input';
import { JWT_SECRET } from 'src/constants';

@Injectable()
export class UserUseCase {
  constructor(
    @InjectRepository(model.User)
    private readonly userRepository: Repository<model.User>,
    private readonly jwtService: JwtService,
  ) {}

  private readonly salt: string = '$2b$10$ructDmRJrek3Ns4qwkCVie';

  public async getAllUsers(): Promise<model.User[]> {
    return await this.userRepository.find();
  }

  public async getCurrentUserInfo(email: string): Promise<model.User> {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  public async createUser(input: CreateUserInput): Promise<model.User> {
    const { email, password } = input;
    const candidate = await this.userRepository.findOne({ where: { email } });

    if (candidate) {
      return null; // пиздануть ошибку
    }
    const hash = await bcrypt.hash(password, this.salt);
    input.password = hash;

    const user = await this.userRepository.create(input);
    await this.userRepository.save(user);

    return user;
  }

  public async loginUser(
    input: LoginUserInput,
  ): Promise<{ jwt: string; user: Partial<model.User> } | null> {
    const { email, password } = input;
    const user = await this.validateUser({ email, password });
    if (user) {
      const hashedPassword = await bcrypt.hash(password, this.salt);

      console.log({
        user: user.password,
        hashed: hashedPassword,
      });

      if (user.password === hashedPassword) {
        const { id: userId, username } = user;
        const jwt = await this.getToken({ userId, username });
        return {
          jwt,
          user,
        };
      }
      return null;
    }
    return null;
  }

  private async validateUser({
    email,
    password,
  }: Partial<model.User>): Promise<Partial<model.User> | null> {
    const foundUser = await this.userRepository.findOne({
      where: { email },
    });

    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        return foundUser;
      }
      return null;
    }
    return null;
  }

  private async getToken(payload: PayloadInput): Promise<string> {
    return await this.jwtService.sign(payload, {
      secret: JWT_SECRET,
    });
  }
}
