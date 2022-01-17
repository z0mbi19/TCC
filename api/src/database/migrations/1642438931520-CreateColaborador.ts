import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateColaborador1642438931520 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "colaborador",
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
                        name: "ctps",
                        type: "varchar"
                    },
                    {
                        name: "pis",
                        type: "varchar"
                    },
                    {
                        name: "funcaoId",
                        type: "uuid"
                    },
                    {
                        name: "dentistaId",
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
                        name: "fk_colaborador_funcao",
                        columnNames: ["funcaoId"],
                        referencedTableName: "funcao",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_colaborador_dentista",
                        columnNames: ["dentistaId"],
                        referencedTableName: "dentista",
                        referencedColumnNames: ["id"]
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("colaborador")

    }

}
