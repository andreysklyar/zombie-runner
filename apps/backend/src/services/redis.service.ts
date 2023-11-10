import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  public async get(key: string): Promise<any> {
    console.log(`GET ${key} from REDIS`);
    return await this.cache.get(key);
  }

  public async set(key: string, value: unknown): Promise<any> {
    console.log(`SET ${key} to REDIS`);
    return await this.cache.set(key, value);
  }

  public async del(key: string): Promise<any> {
    console.log(`DELETE ${key} from REDIS`);
    return await this.cache.del(key);
  }
}
