import { ServiceUseCase } from 'src/domain';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

import { UserUseCase } from 'src/domain';
import * as model from 'src/inrastructure/model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserResolver } from 'src/presentation/resolver/user/resolver';
import { ServiceResolver } from 'src/presentation/resolver/service/resolver';
import { TestResolver } from 'src/presentation/resolver/test.resolver';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { JWT_SECRET } from './constants';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
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
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: JWT_SECRET,
          signOptions: { expiresIn: '24h' },
        };
      },
    }),
  ],
  providers: [
    TestResolver,
    // UserResolver,
    ServiceResolver,
    UserUseCase,
    ServiceUseCase,
    JwtService,
    JwtStrategy,
  ],
})
export class AppModule {}
