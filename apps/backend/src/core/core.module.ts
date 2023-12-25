import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { PlayerModule } from './game/player.module';

@Module({
  imports: [
    GameModule,
    PlayerModule
  ]
})
export class CoreModule {}
