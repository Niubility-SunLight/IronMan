import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000, '127.0.0.1', (): void => {
    console.log(`服务已经启动:http://127.0.0.1:3000`);
  });
}
bootstrap();
