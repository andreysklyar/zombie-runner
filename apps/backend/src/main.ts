import { initializeTransactionalContext } from 'typeorm-transactional';

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WebSocket } from 'ws';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('transactionsl made');
  initializeTransactionalContext();
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);

  app.setGlobalPrefix('api');
  const swaggerConfig = new DocumentBuilder()
    .setTitle('zombie-runner v1')
    .setDescription('zombie-runner API')
    .setVersion('1.0')
    // You need to provide ALPHABETICAL ORDER here
    .addTag('Reviews')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  const port = config.get<number>('API_PORT');
  app.setGlobalPrefix('api');
  await app.listen(port || 3030, () => {
    console.log('App started', port);
  });

  // const ws = new WebSocket(`wss://fstream.binance.com/ws/!markPrice@arr@1s`);

  // ws.on('message', (data?: string) => {
  //   if (data) {
  //     const trade = JSON.parse(data); // parsing a single-trade record
  //     console.log(trade);
  //   }
  // });
}
bootstrap();
