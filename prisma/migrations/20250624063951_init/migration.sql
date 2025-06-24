-- CreateTable
CREATE TABLE "Projeto" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tecnologias" TEXT[],
    "imagemUrl" TEXT NOT NULL,
    "linkProjeto" TEXT NOT NULL,
    "linkCodigo" TEXT NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);
