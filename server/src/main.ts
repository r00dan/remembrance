import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const whiteList = ['http://localhost:3000', 'http://localhost:4000'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin(origin, callback) {
      if (!origin || whiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });
  await app.listen(4000);
}
bootstrap();
