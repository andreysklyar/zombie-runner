import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

export default TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: config.get<'postgres'>('TYPEORM_CONNECTION'),
    host: config.get<string>('TYPEORM_HOST'),
    port: config.get<number>('TYPEORM_PORT'),
    username: config.get<string>('TYPEORM_USERNAME'),
    password: config.get<string>('TYPEORM_PASSWORD'),
    database: config.get<string>('TYPEORM_DATABASE'),
    synchronize: false,
    autoLoadEntities: true,
    logging: config.get('TYPEORM_LOGGING'),
    migrationsRun: true,
    migrations: [`${__dirname}/../../migrations/*{.ts,.js}`],
    entities: [
      `${__dirname}/../../**/entities/*.entity{.ts,.js}`,
      `${__dirname}/../../**/infrastructure/*.repository{.ts,.js}`
    ],
    migrationsTableName: 'migrations',
    extra: {
      max: process.env.DB_MAX_POOL_SIZE || '3',
      connectionTimeoutMillis: process.env.DB_MAX_CONNECTION_TIMEOUT || '2000',
      idleTimeoutMillis: process.env.DB_MAX_IDLE_TIMEOUT || '30000'
    }
  }),
  dataSourceFactory: async (options) => {
    const dataSource = await new DataSource(options).initialize();
    return addTransactionalDataSource(dataSource);
  }
});
