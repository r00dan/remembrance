import { join } from 'path';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserUseCase } from 'src/domain';
import * as model from 'src/inrastructure/model';
import { UserResolver } from 'src/presentation/resolver/user.resolver';
import { TestResolver } from 'src/presentation/resolver/test.resolver';
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
    TypeOrmModule.forFeature([model.User, model.Service]),
  ],
  providers: [UserResolver, TestResolver, UserUseCase, JwtService],
})
export class AppModule {}
