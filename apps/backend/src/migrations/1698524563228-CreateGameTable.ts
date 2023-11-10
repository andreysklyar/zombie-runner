import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDocumentsTable1671556126765 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'review',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true },
          { name: 'name', type: 'varchar' },
          { name: 'review', type: 'varchar' }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
