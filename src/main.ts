import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS so frontend can make requests to this API
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('🚀 LearnAPI')
    .setDescription('A simple REST API for learning HTTP methods. Practice CRUD operations from your frontend!')
    .setVersion('1.0')
    .addTag('items', 'CRUD operations for items')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log('');
  console.log('🚀 LearnAPI is running!');
  console.log(`📍 Homepage: http://localhost:${port}`);
  console.log(`📦 Items API: http://localhost:${port}/items`);
  console.log(`📚 Swagger: http://localhost:${port}/api`);
  console.log('');
}
bootstrap();
