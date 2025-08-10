/*
  Warnings:

  - The `tecnologias` column on the `Projeto` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Technology" AS ENUM ('css', 'elixir', 'figma', 'html', 'java', 'js', 'kotlin', 'mongo', 'next', 'node', 'oracle', 'php', 'react', 'sass', 'spring', 'sql', 'tailwind', 'ts');

-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "tecnologias",
ADD COLUMN     "tecnologias" "Technology"[];
