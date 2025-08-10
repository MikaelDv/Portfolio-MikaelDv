"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from '../_context/ThemeProvider';
import Github from '../_svg/icons/Github';
import Linkedin from '../_svg/icons/Linkedin';
import Email from '../_svg/icons/email';

export default function Footer() {
  const darkMode = useTheme().darkMode; 

  const [ linkedin, setLikedin ] = useState<"dark-linkedin.svg" | "linkedin.svg">("dark-linkedin.svg");
  const [ github, setGithub ] = useState<"dark-github2.svg" | "github2.svg">("dark-github2.svg");
  const [ email, setEmail] = useState<"dark-email.svg" | "email.svg">("dark-email.svg");
  const [ arrowUp, setArrowUp] = useState<"dark-arrow-up.svg"| "arrow-up.svg">("dark-arrow-up.svg");
    
  useEffect(() => {
    if (darkMode) {
      setLikedin("linkedin.svg"); setGithub("github2.svg"); setEmail("email.svg"); setArrowUp("dark-arrow-up.svg");
    } else {
      setLikedin("dark-linkedin.svg"); setGithub("dark-github2.svg"); setEmail("dark-email.svg"); setArrowUp("arrow-up.svg");
    }
  }, [darkMode]);

  return (
    <div id="contato" className="footer font-[Sora] w-full text-[#101010] flex flex-col items-center justify-between pt-16 lg:pt-24 pb-8 lg:pb-6 h-auto lg:h-[40vh]">
      {/* Container: empilhado no mobile, lado a lado no desktop */}
      <div className="w-full lg:w-[78%] px-4 lg:px-0 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10">
        {/* Texto (topo no mobile, esquerda no desktop) */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold">Entre em <span className="bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default">contato</span>!</h1>
          <p className="text-sm sm:text-base font-light max-w-none lg:max-w-[70%] mx-auto lg:mx-0">Quer bater um papo sobre tecnologia ou tem um projeto incrível em mente? Fique à vontade para me chamar!</p>
        </div>

        {/* Núcleo (embaixo no mobile, direita no desktop) */}
        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-4 h-16">
            <Link href={"https://www.linkedin.com/in/mikael-sanches"} target="_blank" className="flex justify-center items-center w-16 bg-[--text-color] rounded-xl">
              <Linkedin/>
            </Link>
            <Link href={"https://www.github.com/MikaelDv"} target="_blank" className="flex justify-center items-center w-16 bg-[--text-color] rounded-xl">
              <Github/>
            </Link>
            <Link href={"mailto:mikaelsanchesdev@gmail.com"} target="_blank" className="flex justify-center items-center w-16 bg-[--text-color] rounded-xl">
              <Email/>
            </Link>
          </div>

          <Link href={"#main"}>
            <button className="flex items-center gap-1 sm:gap-[6px]">
              <p className="text-sm sm:text-base font-normal footer-top">Voltar ao topo</p>
              <Image alt="arrow up" src={arrowUp} width={12} height={12}/>
            </button>
          </Link>
        </div>
      </div>

      {/* Créditos (sempre centralizados) */}
      <div className="flex gap-1 items-center mt-6">
        <p className="font-light text-[#373737] copy text-xs sm:text-sm">&copy; Pensado e desenvolvido por Mikael Sanches</p>
        <Image alt="purple umbrella image" src={"/guarda_chuva.png"} width={16} height={16} />
      </div>
    </div>
  )
}
