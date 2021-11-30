import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({ keys: ['asdfasdf'] }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const options = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('User API with sessions')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer' }, 'access-token')
    .build();

  const documents = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, documents);
  await app.listen(3000);
}
bootstrap();
