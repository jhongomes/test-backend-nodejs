import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatProducts1625526407706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',

                    },
                    {
                        name: 'titulo',
                        type: 'varchar'
                    },
                    {
                        name: 'descricao',
                        type: 'varchar'
                    },
                    {
                        name: 'preco',
                        type:  'decimal(10,2)'
                    },
                    {
                        name: 'category_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKCategory',
                        referencedTableName: 'categories',
                        referencedColumnNames: ['id'],
                        columnNames: ['category_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
