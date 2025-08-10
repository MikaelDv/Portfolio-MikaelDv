import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactIcon from '../_svg/stack/ReactIcon'
import CssIcon from '../_svg/stack/CssIcon'
import NextIcon from '../_svg/stack/NextIcon'
import ElixirIcon from '../_svg/stack/ElixirIcon'
import FigmaIcon from '../_svg/stack/FigmaIcon'
import HtmlIcon from '../_svg/stack/HtmlIcon'
import JavaIcon from '../_svg/stack/JavaIcon'
import TSIcon from '../_svg/stack/TSIcon'
import JSIcon from '../_svg/stack/JSIcon'
import KotlinIcon from '../_svg/stack/KotlinIcon'
import MongoIcon from '../_svg/stack/MongoIcon'
import PhpIcon from '../_svg/stack/PhpIcon'
import PostgreIcon from '../_svg/stack/PostgreIcon'
import PrismaIcon from '../_svg/stack/PrismaIcon'
import SassIcon from '../_svg/stack/SassIcon'
import SpringIcon from '../_svg/stack/SpringIcon'
import SqlIcon from '../_svg/stack/SqlIcon'
import TailwindIcon from '../_svg/stack/TailwindIcon'
import OracleIcon from '../_svg/stack/OracleIcon'

interface Project {
  id: number
  titulo: string
  descricao: string
  tecnologias: string[]
  imagemUrl: string
  linkProjeto: string
  linkCodigo: string
}

interface ProjetoInterface {
  projeto: Project
}

// const icons: { [key: string]: string } = {
//   css: "/stack/css.svg",
//   elixir: "/stack/elixir.svg",
//   figma: "/stack/figma.svg",
//   html: "/stack/html.svg",
//   java: "/stack/java.svg",
//   js: "/stack/js.svg",
//   kotlin: "/stack/kotlin.svg",
//   mongodb: "/stack/mongodb.svg",
//   next: "/stack/next.svg",
//   node: "/stack/node.svg",
//   oracle: "/stack/oracle.svg",
//   php: "/stack/php.svg",
//   react: "/stack/react.svg",
//   sass: "/stack/sass.svg",
//   spring: "/stack/spring.svg",
//   sql: "/stack/sql.svg",
//   tailwind: "/stack/tailwind.svg",
//   ts: "/stack/ts.svg"
// }

function getTechIcon(tech: string) {
  const commonProps = "w-6 h-6";

  switch (tech.toLowerCase()) {
    case "css":
      return (
        <CssIcon className={commonProps}  />
      )
    case "elixir":
      return (
        <ElixirIcon className={commonProps} />
      )
    case "figma":
      return (
        <FigmaIcon className={commonProps} />
      )
    case "html":
      return (
        <HtmlIcon className={commonProps} />
      )
    case "java":
      return (
        <JavaIcon className="w-6 h-6" />
      )
    case "js":
      return (
        <JSIcon className={commonProps} />
      )
    case "kotlin":
      return (
        <KotlinIcon className={commonProps} />
      )
    case "mongo":
      return (
        <MongoIcon className={commonProps} />
      )
    case "next":
      return (
        <NextIcon className={commonProps} />
      )
    case "oracle":
      return (
        <OracleIcon className="w-10 h-5" />
      )
    case "php":
      return (
        <PhpIcon className={commonProps} />
      )
    case "postgresql":
      return (
        <PostgreIcon className={commonProps} />
      )
    case "prisma":
      return (
        <PrismaIcon className={commonProps} />
      )
    case "react":
      return (
        <ReactIcon className={commonProps} />
      )
    case "sass":
      return (
        <SassIcon className={commonProps} />
      )
    case "spring":
      return (
        <SpringIcon className={commonProps} />
      )
    case "sql":
      return (
        <SqlIcon className={commonProps} />
      )
    case "tailwind":
      return (
        <TailwindIcon className={commonProps} />
      )
    case "ts":
      return (
        <TSIcon className={commonProps} />
      )
    default:
      return null;
  }
}

export default function Project({ projeto }: ProjetoInterface) {
  return (
    <div className="border border-[#6F6F6F] shadow-lg flex flex-col h-full">
      {/* Imagem do projeto */}
      <div className="relative h-[225px] w-full">
        <Image
          src={projeto.imagemUrl || "/placeholder.svg"}
          alt={projeto.titulo}
          loading="lazy"
          fill
          className="object-cover"
        />
      </div>

      {/* Conteúdo do card */}
      <div className="flex flex-col justify-between p-5 flex-1 font-[Sora]">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-[28px] font-semibold mb-2">{projeto.titulo}</h1>
            <p className="text-sm leading-relaxed line-clamp-2">
              {projeto.descricao}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((tech, index) => (
              <div key={index} className="text-blue-700">
                {getTechIcon(tech)}
              </div>
            ))}
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-3 mt-5">
          <Link href={projeto.linkProjeto} target="_blank">
            <button className="hover:from-transparent hover:to-transparent hover:button-project hover:text-[--text-color] w-[112px] h-[39px] font-semibold rounded-md text-[--bg-color] bg-gradient-to-r from-[#5246FF] to-[#7B00FF] transition-all duration-300 ease-in-out">
              PROJETO
            </button>
          </Link>
          <Link href={projeto.linkCodigo} target="_blank">
            <button className="button-project text-[--text-color] w-[115px] h-[40px] font-semibold transition-colors duration-200 hover:bg-gradient-to-r from-[#5246FF] to-[#7B00FF] rounded-md hover:text-[--bg-color]">
              CÓDIGO
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
