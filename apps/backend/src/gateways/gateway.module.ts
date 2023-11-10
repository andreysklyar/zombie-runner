import { Module } from '@nestjs/common';
import { BinanceGateway } from './binance';

@Module({
  providers: [BinanceGateway]
})
export class GatewayModule {}
