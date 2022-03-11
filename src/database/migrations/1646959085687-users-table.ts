import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class usersTable1646959085687 implements MigrationInterface {
    private usersTable = new Table({
        name: 'users',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
                length: '50',
            },
            {
                name: 'email',
                type: 'varchar',
            },
            {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
            },
            {
                name: 'update_at',
                type: 'timestamp',
                default: 'now()',
            }
        ]
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.usersTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.usersTable);
    }

}
