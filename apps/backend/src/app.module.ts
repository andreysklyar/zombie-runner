import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ProductsModule } from './products/products.module';
import DatabaseModule from './config/modules/database';
import RedisModule from './config/modules/redis';
import { GraphQLModule } from '@nestjs/graphql';
//import { ConfigDatabaseModule } from './config/modules';
import { ApolloDriver } from '@nestjs/apollo';
import { GatewayModule } from './gateways/gateway.module';
import { RedisService } from './services/redis.service';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    // GraphQLModule.forRoot({
    //   driver: ApolloDriver,
    //   autoSchemaFile: 'schema.gql',
    //   sortSchema: true,
    //   playground: true
    // }),

    //ConfigDatabaseModule,
    GatewayModule,
    DatabaseModule,
    RedisModule,
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService, RedisService]
})
export class AppModule {}
