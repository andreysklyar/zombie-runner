import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePlayerDTO {
    @ApiProperty({
      description: 'name',
      type: 'string'
    })
    @IsOptional()
    @IsNotEmpty()
    public name: string;
  
    @ApiProperty({
      description: 'score',
      type: 'string'
    })
    @IsOptional()
    @IsNotEmpty()
    public score: string;
}
