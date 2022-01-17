import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFuncao1642430934456 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "funcao",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar(100)",
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        isNullable: true,
                        default: "now()"
                    },
                    {
                        name: "deleted_at",
                        isNullable: true,
                        type: "timestamp"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("funcao")
    }

}
