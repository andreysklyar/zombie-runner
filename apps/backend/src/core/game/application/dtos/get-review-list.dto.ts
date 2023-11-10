import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetReviewListDTO {
    @ApiProperty({
      description: 'Pagination page',
      type: 'string'
    })
    @IsOptional()
    @IsNotEmpty()
    public page: number = 1;
  
    @ApiProperty({
      description: 'Pagination sites per page',
      type: 'string'
    })
    @IsOptional()
    @IsNotEmpty()
    public limit: number = 10;
}
