import {
  Column,
  Entity,
  PrimaryColumn
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// name form database
@Entity('review')
export class ReviewEntity {
  @ApiProperty()
  @PrimaryColumn('varchar', { nullable: false })
  id: string;

  @ApiProperty()
  @Column('varchar', { nullable: false })
  name: string;

  @ApiProperty()
  @Column('varchar', { nullable: false })
  review: string;
}
