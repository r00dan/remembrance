import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import * as model from 'src/inrastructure/model';
import { CreateUserInput } from 'src/presentation/input/create-user.input';

@Injectable()
export class UserUseCase {
  constructor(
    @InjectRepository(model.User)
    private readonly userRepository: Repository<model.User>,
  ) {}

  public async getAllUsers(): Promise<model.User[]> {
    return this.userRepository.find();
  }

  public async createUser(input: CreateUserInput): Promise<model.User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(input.password, salt);
    input.password = hash;

    const user = this.userRepository.create(input);
    this.userRepository.save(user);

    return user;
  }

  // public async validateUser(Partial<model.User>)
}
