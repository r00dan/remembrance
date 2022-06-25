import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserUseCase } from './domain/user.use-case';
import * as model from 'src/inrastructure/model';
import { join } from 'path';
import { UserResolver } from './presentation/resolver/user.resolver';
import { TestResolver } from './presentation/resolver/test.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/graphql-types.ts') },
      driver: ApolloDriver,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      entities: [model.User, model.Service],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([model.User]),
  ],
  controllers: [],
  providers: [UserResolver, TestResolver, UserUseCase],
})
export class AppModule {}
