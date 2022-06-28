import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as model from 'src/inrastructure/model';
import { CreateServiceInput } from 'src/presentation/input';

@Injectable()
export class ServiceUseCase {
  constructor(
    @InjectRepository(model.Service)
    private readonly serviceRepository: Repository<model.Service>,
  ) {}

  public async getService(id: string): Promise<model.Service> {
    const service = await this.serviceRepository.findOne({ where: { id } });
    return service || null;
  }

  public async getServices(): Promise<model.Service[]> {
    return (await this.serviceRepository.find()) || [];
  }

  public async createService(
    input: CreateServiceInput,
  ): Promise<model.Service> {
    const creationTime = new Date().toISOString();
    const modified = { ...input, creationTime, updateTime: creationTime };
    const service = await this.serviceRepository.create(modified);
    await this.serviceRepository.save(service);
    return service;
  }

  // public async updateService(): Promise<void> {}

  public async removeService(id: string): Promise<model.Service> {
    const service = await this.serviceRepository.findOne({ where: { id } });
    if (service) {
      this.serviceRepository.remove(service);
      return service;
    }
    return null;
  }
}
