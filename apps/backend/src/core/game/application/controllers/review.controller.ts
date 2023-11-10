import { Controller, Get, Param, Post, Delete, Body, Put, ParseUUIDPipe, Query, ValidationPipe} from '@nestjs/common';
import { ReviewService } from '../../domain/services/review.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiBadRequestResponse
} from '@nestjs/swagger';
import { ReviewEntity } from '../../domain/entities/review.entity';
import { GetReviewListDTO } from '../dtos/get-review-list.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateReviewDTO } from '../dtos/create-review.dto';
import { UpdateReviewDTO } from '../dtos/update-review.dto';

@ApiTags('Game WS')
@Controller('/review/')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService
  ) {}

  @ApiOperation({ summary: 'Get, Create, Change, Delete Reviews' })
  @ApiOkResponse({
    description: 'Start or stop getting reviews'
  })
  // get review
  //controller
  @ApiBadRequestResponse({ type: Error })
  @Get('/')
  async getAllReviews(
    @Query(new ValidationPipe({ transform: true })) query: GetReviewListDTO
  ): Promise<Pagination< ReviewEntity>> {
    return this.reviewService.getAllReviews(query);
  }

  @ApiOperation({
    summary: 'Create a Review'
  })
  @Post('/')
  async createReview(
    @Body() payload: CreateReviewDTO,
  ): Promise<ReviewEntity> {
    return await this.reviewService.createReview(payload);
  }

  @Put('/:reviewId')
  async updateReview(
    @Body() payload: UpdateReviewDTO,
    @Param('reviewId', new ParseUUIDPipe()) id: string
  ): Promise<ReviewEntity> {
    await this.reviewService.updateReview(id, payload);
    return this.reviewService.getReviewById(id);
  }

  @Delete('/:reviewId')
  async deleteReview(@Param('reviewId', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.reviewService.deleteReview( id );
  }
}

