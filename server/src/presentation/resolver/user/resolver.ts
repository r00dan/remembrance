import { JwtAuthGuard } from '../../../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UserUseCase } from 'src/domain';
import { CreateUserInput, LoginUserInput } from 'src/presentation/input';
import * as model from 'src/inrastructure/model';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Query('getAllUsers')
  public async getAllUsers(): Promise<model.User[]> {
    return await this.userUseCase.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Query('getCurrentUserInfo')
  public async getAbout(email: string): Promise<model.User> {
    return await this.userUseCase.getCurrentUserInfo(email);
  }

  @Query('loginUser')
  public async loginUser(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
  ): Promise<{ jwt: string; user: Partial<model.User> } | null> {
    return await this.userUseCase.loginUser(loginUserInput);
  }

  @Mutation('createUser')
  public async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<model.User> {
    return await this.userUseCase.createUser(createUserInput);
  }
}
