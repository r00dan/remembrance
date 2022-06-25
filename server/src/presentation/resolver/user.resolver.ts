import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UserUseCase } from 'src/domain/user.use-case';
import { CreateUserInput } from '../input/create-user.input';
import * as model from 'src/inrastructure/model';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Query('getAllUsers')
  public async getAllUsers(): Promise<model.User[]> {
    return this.userUseCase.getAllUsers();
  }

  @Mutation('createUser')
  public async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<model.User> {
    return this.userUseCase.createUser(createUserInput);
  }
}
