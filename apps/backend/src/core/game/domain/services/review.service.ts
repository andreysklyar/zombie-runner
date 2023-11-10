import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ReviewEntity } from '../entities/review.entity';
import { GetReviewListDTO } from '../../application/dtos/get-review-list.dto';
import { CreateReviewDTO } from '../../application/dtos/create-review.dto';
import { UpdateReviewDTO } from '../../application/dtos/update-review.dto';

@Injectable()
export class ReviewService {
  private promises: Promise<any>[] = [];

  constructor(
    @InjectRepository(ReviewEntity)
    private reviewsRepo: Repository<ReviewEntity>
  ) {}

  public async getAllReviews (query: GetReviewListDTO):Promise<Pagination< ReviewEntity>> {
    const queryBuilder = this.reviewsRepo
      .createQueryBuilder('reviews')
      .orderBy('reviews.id', 'DESC');
    return paginate<ReviewEntity>(queryBuilder, { limit: query.limit, page: query.page });
  }

  public async createReview (payload: CreateReviewDTO):Promise<ReviewEntity> {
    const id = uuid();
    await this.reviewsRepo.save(this.reviewsRepo.create({
      ...payload,
      id
    }));

    return this.getReviewById(id);
  }

  public async getReviewById(id: string): Promise<ReviewEntity | null> {
    const reviewQuery = this.reviewsRepo
      .createQueryBuilder('review')
      .where('review.id = :id', { id });

    return await reviewQuery.getOne();
  }

  public async updateReview (id: string, payload: UpdateReviewDTO): Promise<void> {
    const review = await this.getReviewById(id);

    await this.reviewsRepo.save(this.reviewsRepo.create({
      ...this.reviewsRepo.merge(review, payload)
    }));
  }

  public async deleteReview (id: string): Promise<void> {
    const review = await this.getReviewById(id);

    if (!review) {
      throw new Error('Review not found');
    }

    await this.reviewsRepo
      .createQueryBuilder('review')
      .where('review.id = :id', { id }).delete().execute();
  }
}
