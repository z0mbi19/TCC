import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEspecialidade1642440831239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "especialidade",
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
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: true
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        isNullable: true
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("planoSaude")

    }

}
