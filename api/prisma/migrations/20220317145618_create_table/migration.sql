-- CreateTable
CREATE TABLE "Colaborador" (
    "matricula" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "ctps" INTEGER NOT NULL,
    "pis" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "funcaoId" INTEGER NOT NULL,
    "dentistaId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Colaborador_pkey" PRIMARY KEY ("matricula")
);

-- CreateTable
CREATE TABLE "Funcao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Funcao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dentista" (
    "id" SERIAL NOT NULL,
    "cro" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dentista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Especialidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DentistaOnEspecialidade" (
    "dentistaId" INTEGER NOT NULL,
    "especialidadeId" INTEGER NOT NULL,

    CONSTRAINT "DentistaOnEspecialidade_pkey" PRIMARY KEY ("dentistaId","especialidadeId")
);

-- CreateTable
CREATE TABLE "Plano" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "validade" TIMESTAMP(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Plano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "planoId" INTEGER,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultaOnMaterial" (
    "consultaId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,

    CONSTRAINT "ConsultaOnMaterial_pkey" PRIMARY KEY ("consultaId","materialId")
);

-- CreateTable
CREATE TABLE "ConsultaOnServico" (
    "consultaId" INTEGER NOT NULL,
    "servicoId" INTEGER NOT NULL,

    CONSTRAINT "ConsultaOnServico_pkey" PRIMARY KEY ("consultaId","servicoId")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Financeiro" (
    "id" SERIAL NOT NULL,
    "registro" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,
    "colaboradorId" INTEGER NOT NULL,

    CONSTRAINT "Financeiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" SERIAL NOT NULL,
    "consulta" TIMESTAMP(3) NOT NULL,
    "cpf" INTEGER NOT NULL,
    "cro" TEXT NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Colaborador_nome_key" ON "Colaborador"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Colaborador_cpf_key" ON "Colaborador"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Colaborador_dentistaId_key" ON "Colaborador"("dentistaId");

-- CreateIndex
CREATE UNIQUE INDEX "Dentista_cro_key" ON "Dentista"("cro");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_nome_key" ON "Paciente"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_cpf_key" ON "Paciente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_planoId_key" ON "Paciente"("planoId");

-- CreateIndex
CREATE UNIQUE INDEX "Financeiro_colaboradorId_key" ON "Financeiro"("colaboradorId");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_cpf_key" ON "Consulta"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_cro_key" ON "Consulta"("cro");

-- AddForeignKey
ALTER TABLE "Colaborador" ADD CONSTRAINT "Colaborador_funcaoId_fkey" FOREIGN KEY ("funcaoId") REFERENCES "Funcao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colaborador" ADD CONSTRAINT "Colaborador_dentistaId_fkey" FOREIGN KEY ("dentistaId") REFERENCES "Dentista"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentistaOnEspecialidade" ADD CONSTRAINT "DentistaOnEspecialidade_dentistaId_fkey" FOREIGN KEY ("dentistaId") REFERENCES "Dentista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentistaOnEspecialidade" ADD CONSTRAINT "DentistaOnEspecialidade_especialidadeId_fkey" FOREIGN KEY ("especialidadeId") REFERENCES "Especialidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Plano"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultaOnMaterial" ADD CONSTRAINT "ConsultaOnMaterial_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultaOnMaterial" ADD CONSTRAINT "ConsultaOnMaterial_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultaOnServico" ADD CONSTRAINT "ConsultaOnServico_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultaOnServico" ADD CONSTRAINT "ConsultaOnServico_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financeiro" ADD CONSTRAINT "Financeiro_colaboradorId_fkey" FOREIGN KEY ("colaboradorId") REFERENCES "Colaborador"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_cro_fkey" FOREIGN KEY ("cro") REFERENCES "Dentista"("cro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_cpf_fkey" FOREIGN KEY ("cpf") REFERENCES "Paciente"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
