import React from 'react'
import Image from "next/image";

export default function Main() {
  return (
    <div className="flex justify-between px-28 items-center flex-grow">
      <section className="left-content">
        <div>
          <h3 className="font-light text-xl font-['Sora']">Olá, eu sou o</h3>
          <div className="border-2 w-20 flex-shrink-0 gradient-bar"></div>
        </div>
        <div className="h-1/3">
          <h1 className="text-8xl font-black">Mikael Sanches</h1>
          <div className="loader font-semibold text-2xl">
              <p>Desenvolvedor</p>
              <div className="words">
              <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Back-End</span>
              <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Front-End</span>
              <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Full-Stack</span>
              <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">UX/UI</span>
            </div>
          </div>
        {/* <h2 className="font-semibold text-4xl ">Desenvolvedor <a href="" className="bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default">Full-Stack</a></h2> */}
        </div>
        <div className="font-[Sora] text-xl font-normal">
          <button className="flex items-center button-landing">
            <Image src={"/save.svg"} alt="save icon" height={25} width={25}/>
            Currículo
          </button>
          <button className="flex items-center button-landing">
            <Image src={"/github.svg"} alt="github icon" height={25} width={25}/>
            GitHub
          </button>
        </div>
      </section>
      <section className="right-content relative">
        <Image 
          src={"/teste.png"} 
          alt={"Forma roxa arredendada"} 
          width={500} 
          height={0}
        />
      </section>
    </div>
  )
}
