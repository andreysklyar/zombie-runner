import { Controller, Get, Param, Post, Delete, Body, Put, ParseUUIDPipe, Query, ValidationPipe} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiBadRequestResponse
} from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CreatePlayerDTO } from '../dtos/create-player.dto';
import { GetPlayersListDTO } from '../dtos/get-players-list.dto';
import { UpdatePlayerDTO } from '../dtos/update-player.dto';
import { PlayerEntity } from '../../domain/entities/player.entity';
import { PlayerService } from '../../domain/services/player.service';

@ApiTags('Top players WS')
@Controller('/player/')
export class PlayerController {
  constructor(
    private readonly playerService: PlayerService
  ) {}

  @ApiOperation({ summary: 'Get, Create, Change, Delete Player' })
  @ApiOkResponse({
    description: 'Start or stop getting players'
  })
  // get Players
  //controller
  @ApiBadRequestResponse({ type: Error })
  @Get('/')
  async getAllPlayers(
    @Query(new ValidationPipe({ transform: true })) query: GetPlayersListDTO
  ): Promise<Pagination< PlayerEntity>> {
    return this.playerService.getAllPlayers(query);
  }

  @ApiOperation({
    summary: 'Create a Player'
  })
  @Post('/')
  async createPlayer(
    @Body() payload: CreatePlayerDTO,
  ): Promise<PlayerEntity> {
    return await this.playerService.createPlayer(payload);
  }

  @Put('/:playerId')
  async updatePlayer(
    @Body() payload: UpdatePlayerDTO,
    @Param('playerId', new ParseUUIDPipe()) id: string
  ): Promise<PlayerEntity> {
    await this.playerService.updatePlayer(id, payload);
    return this.playerService.getPlayerById(id);
  }

  @Delete('/:playerId')
  async deletePlayer(@Param('playerId', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.playerService.deletePlayer( id );
  }
}

