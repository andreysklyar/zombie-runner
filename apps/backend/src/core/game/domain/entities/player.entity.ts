import {
  Column,
  Entity,
  PrimaryColumn
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// name form database
@Entity('players')
export class PlayerEntity {
  @ApiProperty()
  @PrimaryColumn('varchar', { nullable: false })
  id: string;

  @ApiProperty()
  @Column('varchar', { nullable: false })
  name: string;

  @ApiProperty()
  @Column('varchar', { nullable: false })
  score: string;
}
