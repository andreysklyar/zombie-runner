import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateReviewDTO {
    @ApiProperty({
      description: 'name',
      type: 'string'
    })
    @IsOptional()
    @IsNotEmpty()
    public name: string;
  
    @ApiProperty({
      description: 'review',
      type: 'string'
    })
    @IsOptional()
    @IsNotEmpty()
    public review: string;
}
