import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './domain/entities/review.entity';
import { ReviewService } from './domain/services/review.service';
import { ReviewController } from './application/controllers/review.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReviewEntity
    ])
  ],
  controllers: [
    ReviewController
  ],
  providers: [
    ReviewService
  ]
})
export class GameModule {}
