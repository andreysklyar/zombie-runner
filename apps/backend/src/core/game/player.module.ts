import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './domain/entities/player.entity';
import { PlayerController } from './application/controllers/player.controller';
import { PlayerService } from './domain/services/player.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlayerEntity
    ])
  ],
  controllers: [
    PlayerController
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule {}
