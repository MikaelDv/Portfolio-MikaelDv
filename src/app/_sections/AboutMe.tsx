import React from 'react'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="flex flex-col h-[90vh] justify-center">
        <h1 className="font-[Sora] font-semibold text-5xl text-center">Sobre mim</h1>
        <div className="flex justify-center items-center gap-28 mt-16">
            <div>
                <Image src={"/eu-sobre-mim.png"} alt={"Imagem do desenvolvedor Mikael Sanches sorrindo, cabelos escuros, branco, utilizando uma polo preta e um óculos vermelho amadeirado."} width={457} height={640}/>
            </div>
            <div className='text-justify max-w-[676px] text-2xl'>
                <h2 className="font-extrabold text-[34px] mb-7">
                    Do front ao back, construindo soluções completas para o seu projeto.
                </h2>
                <p className="">
                        &nbsp;&nbsp;Sou um desenvolvedor <span className="font-bold bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default">Full-Stack</span>, apaixonado por tecnologia e inovação. Atualmente estudo <span className="font-bold">Engenharia de Software</span> na <span className="font-bold">FIAP</span> com bolsa integral e tenho experiência em <a href="" className="bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default font-bold">React<span className="text-[var(--text-color)] font-normal">,</span> TypeScript<span className="text-[var(--text-color)] font-normal">,</span> Node.js<span className="text-[var(--text-color)] font-normal">,</span> Java <span className="text-[var(--text-color)] font-normal">e</span> SQL</a>. 
                </p>
                <p className="">
                    &nbsp;&nbsp;Gosto de transformar ideias em soluções eficientes, unindo <span className="font-bold">back-end robusto</span>, <span className="font-bold">front-end responsivo</span> e <span className="font-bold">inteligência artificial</span>. Acredito na importância da <span className="font-bold">liderança</span> e do <span className="font-bold">trabalho em equipe</span> para criar produtos impactantes.
                </p>
                <p className="">
                    &nbsp;&nbsp;Atualmente, estou focado em <span className="font-bold">arquitetura de software</span>, <span className="font-bold">escalabilidade</span> e <span className="font-bold">boas práticas</span> de desenvolvimento, sempre buscando novos desafios.
                </p>
                <div className="flex gap-3 items-center font-bold">
                    <Image alt="rocket emoji" src={"/foguete.png"} width={24} height={24} />
                    <p>Vamos construir algo incrível <span className="bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default">juntos</span>?</p>
                </div>
            </div>
        </div>
    </div>
  )
}
