import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ServiceUseCase } from 'src/domain';
import * as model from 'src/inrastructure/model';
import { CreateServiceInput } from '../../input';

@Resolver('Service')
export class ServiceResolver {
  constructor(private readonly serviceUseCase: ServiceUseCase) {}

  @Query('getServices')
  public async getServices(): Promise<model.Service[]> {
    return await this.serviceUseCase.getServices();
  }

  @Query('getService')
  public async getService(id: string): Promise<model.Service> {
    return await this.serviceUseCase.getService(id);
  }

  @Mutation('createService')
  public async createService(
    @Args('createServiceInput') createServiceInput: CreateServiceInput,
  ): Promise<model.Service> {
    return await this.serviceUseCase.createService(createServiceInput);
  }

  @Mutation('removeService')
  public async removeService(id: string): Promise<model.Service> {
    return await this.serviceUseCase.removeService(id);
  }
}
