"use client"
import React, { useEffect, useState } from 'react'
import Project from '../_components/Project';

type Projeto = {
  id: number
  titulo: string,
  descricao: string,
  tecnologias: string[],
  imagemUrl: string,
  linkProjeto: string,
  linkCodigo:  string
}

export default function Projects() {
  const [ projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    async function buscarProjetos() {
      try {
        const res = await fetch('/api/projetos');

        const data = await res.json()
        setProjetos(data)
      } catch (error) {
        console.error('Erro ao buscar projetos:', error)
      }
    }

    buscarProjetos()
  }, [])

  return (
    <div className="mt-12 md:px-4 px-2">
      <h1 className="font-[Sora] font-semibold text-5xl text-center">Projetos</h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 mt-16">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="min-w-[300px] max-w-[400px] flex-1">
            <Project  projeto={projeto} />
          </div>
        ))}
      </div>
    </div>  
  )
}
