import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateConsulta1642444393697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "consulta",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "dtConsulta",
                        type: "varchar(100)",
                    },
                    {
                        name: "cpf",
                        type: "varchar"
                    },
                    {
                        name: "cro",
                        type: "varchar(100)"
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
                ],
                foreignKeys: [
                    {
                        name: "fk_consulta_paciente",
                        columnNames: ["cpf"],
                        referencedTableName: "pacientes",
                        referencedColumnNames: ["cpf"]
                    },
                    {
                        name: "fk_consulta_dentista",
                        columnNames: ["cro"],
                        referencedTableName: "dentista",
                        referencedColumnNames: ["cro"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("consulta")

    }

}
