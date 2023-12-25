import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlayersTable1698524563229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'players',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true },
          { name: 'name', type: 'varchar' },
          { name: 'score', type: 'varchar' }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
