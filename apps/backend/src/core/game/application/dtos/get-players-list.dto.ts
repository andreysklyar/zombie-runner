import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetPlayersListDTO {
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
