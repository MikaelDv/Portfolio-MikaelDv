"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Main() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/api/download");
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "curriculo-mikael.pdf";
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }

  return (
    <div id="main" className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-28 gap-8 lg:gap-0 min-h-[100vh] lg:min-h-0 lg:h-screen pt-24 lg:pt-0 flex-grow">
      {/* FOTO: em cima no mobile, à direita no desktop (sem mudar o design do desktop) */}
      <section className="right-content relative w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2">
        <Link href={"https://www.linkedin.com/in/mikael-sanches"} target="_blank">
          <Image src={"/teste.png"} alt={"Forma roxa arredendada"} width={500} height={500} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[500px] h-auto object-contain"/>
        </Link>
      </section>

      {/* TEXTO + BOTÕES: abaixo no mobile, à esquerda no desktop (mantém w-1/2, gap e h-full no desktop) */}
      <section className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center gap-8 sm:gap-12 lg:gap-36 order-2 lg:order-1">
        <div>
          <h3 className="font-light text-base sm:text-lg md:text-xl font-['Sora']">Olá, eu sou o</h3>
          <div className="border-2 w-20 flex-shrink-0 gradient-bar"></div>
        </div>

        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black">Mikael Sanches</h1>
          <div className="loader font-semibold text-xl sm:text-2xl lg:text-3xl">
            <p>Desenvolvedor</p>
            <div className="words">
              <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Back-End</span>
              <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Front-End</span>
              <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Full-Stack</span>
              <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">UX/UI</span>
            </div>
          </div>
        </div>

        <div className="font-['Sora'] text-base sm:text-lg md:text-xl font-normal flex flex-col gap-3 w-full max-w-sm sm:max-w-md lg:max-w-none">
          <button className="button-landing w-full sm:w-64 lg:w-[21%] flex items-center justify-center gap-3 lg:gap-[14%]" onClick={handleDownload}>
            <Image src={"/save.svg"} alt="save icon" height={25} width={25}/>
            Currículo
          </button>
          <Link href={"https://github.com/MikaelDv"} target="_blank">
            <button className="button-landing w-full sm:w-64 lg:w-[21%] flex items-center justify-center gap-3 lg:gap-[14%]">
              <Image src={"/github.svg"} alt="github icon" height={25} width={25}/>
              GitHub
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
