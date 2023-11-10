import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';

export default CacheModule.registerAsync({
  useFactory: async (configService: ConfigService) => ({
    store: await redisStore({
      url: configService.get('REDIS_URL'),
      ttl: 5000
    })
  }),
  isGlobal: true,
  inject: [ConfigService]
});
