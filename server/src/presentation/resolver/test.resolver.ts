import { Resolver, Query } from '@nestjs/graphql';

@Resolver('')
export class TestResolver {
  @Query('hello')
  public async hello(): Promise<string> {
    return 'Hello!';
  }
}
