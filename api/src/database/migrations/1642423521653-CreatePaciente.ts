import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePaciente1642423521653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pacientes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "sexo",
                        type: "varchar"
                    },
                    {
                        name: "endereco",
                        type: "varchar"
                    },
                    {
                        name: "cep",
                        type: "varchar(8)"
                    },
                    {
                        name: "cidade",
                        type: "varchar"
                    },
                    {
                        name: "uf",
                        type: "varchar(2)"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "telefone",
                        type: "varchar"
                    },
                    {
                        name: "planoId",
                        type: "uuid"
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
                        name: "fk_paciente_plano",
                        columnNames: ["planoId"],
                        referencedTableName: "planoSaude",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pacientes")
    }

}
