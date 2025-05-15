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
    <div className="flex justify-between px-28 items-center flex-grow h-screen" id="main">
      <section className="h-full flex flex-col justify-center gap-36 w-1/2">
        <div>
          <h3 className="font-light text-xl font-['Sora']">Olá, eu sou o</h3>
          <div className="border-2 w-20 flex-shrink-0 gradient-bar"></div>
        </div>
        <div>
          <h1 className="text-8xl font-black">Mikael Sanches</h1>
          <div className="loader font-semibold text-3xl">
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
        <div className="font-[Sora] text-xl font-normal flex flex-col gap-3">
          <button className="flex gap-[14%] button-landing w-[21%]" onClick={handleDownload}>
            <Image src={"/save.svg"} alt="save icon" height={25} width={25}/>
            Currículo
          </button>
          <Link href={"https://github.com/MikaelDv"} target="_blank">
            <button className="flex gap-[14%] button-landing w-[21%]">
              <Image src={"/github.svg"} alt="github icon" height={25} width={25}/>
              GitHub
            </button>
          </Link>
        </div>
      </section>
      <section className="right-content relative">
        <Link href={"https://www.linkedin.com/in/mikael-sanches"} target='_blank'>
          <Image 
            src={"/teste.png"} 
            alt={"Forma roxa arredendada"} 
            width={500} 
            height={0}
          />
        </Link>
      </section>
    </div>
  )
}
