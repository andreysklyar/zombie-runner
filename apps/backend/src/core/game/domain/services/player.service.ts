import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { PlayerEntity } from '../entities/player.entity';
import { GetPlayersListDTO } from '../../application/dtos/get-players-list.dto';
import { CreatePlayerDTO } from '../../application/dtos/create-player.dto';
import { UpdatePlayerDTO } from '../../application/dtos/update-player.dto';

@Injectable()
export class PlayerService {
  private promises: Promise<any>[] = [];

  constructor(
    @InjectRepository(PlayerEntity)
    private playersRepo: Repository<PlayerEntity>
  ) {}

  public async getAllPlayers (query: GetPlayersListDTO):Promise<Pagination<PlayerEntity>> {
    const queryBuilder = this.playersRepo
      .createQueryBuilder('players')
      .orderBy('players.id', 'DESC');
    return paginate<PlayerEntity>(queryBuilder, { limit: query.limit, page: query.page });
  }

  public async createPlayer (payload: CreatePlayerDTO):Promise<PlayerEntity> {
    const id = uuid();
    await this.playersRepo.save(this.playersRepo.create({
      ...payload,
      id
    }));

    return this.getPlayerById(id);
  }

  public async getPlayerById(id: string): Promise<PlayerEntity | null> {
    const playerQuery = this.playersRepo
      .createQueryBuilder('player')
      .where('player.id = :id', { id });

    return await playerQuery.getOne();
  }

  public async updatePlayer (id: string, payload: UpdatePlayerDTO): Promise<void> {
    const player = await this.getPlayerById(id);

    await this.playersRepo.save(this.playersRepo.create({
      ...this.playersRepo.merge(player, payload)
    }));
  }

  public async deletePlayer (id: string): Promise<void> {
    const player = await this.getPlayerById(id);

    if (!player) {
      throw new Error('Player not found');
    }

    await this.playersRepo
      .createQueryBuilder('player')
      .where('player.id = :id', { id }).delete().execute();
  }
}
