"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

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
    <div>
      <h1>Projetos</h1>
      <ul>
        {projetos.map((projeto) => (
          <li key={projeto.id}>
            <strong>{projeto.titulo}</strong>: {projeto.descricao}
            <Image alt='a' src={projeto.imagemUrl} width={100} height={100}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
