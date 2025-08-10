"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        document.querySelector('.glass-header')?.classList.add('scrolled');
      } else {
        document.querySelector('.glass-header')?.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full fixed top-0 left-0 right-0 box-border z-50 2xl:px-24 2xl:py-6 xl:px-16 xl:py-4 md:px-12 md:py-2'>
      {/* A “glass-header” continua sendo o container principal */}
      <div className="w-full px-4 lg:px-10 py-8 md:py-6 2xl:py-8 2xl:px-12 glass-header">
        
        {/* Linha superior: nome à esquerda, menu desktop OU botão à direita */}
        <div className="flex justify-between items-center">
          <h1 
            className="font-semibold text-2xl 2xl:text-4xl"
          >
            Mikael Sanches
            <a href="" className="font-black bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default">.</a>
          </h1>

          {/* Menu desktop (inalterado) */}
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-11 font-normal 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs'>
              <Link href={"#projects"}><li>{"<Projetos/>"}</li></Link>
              <Link href={"#sobre"}><li>{"<Sobre/>"}</li></Link>
              <Link href={"#contato"}><li>{"<Contato/>"}</li></Link>
              <DarkModeToggle/>
            </ul>
          </div>

          {/* Botão hambúrguer: só aparece no mobile */}
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl
                       border border-black/10 dark:border-white/10
                       bg-white/70 dark:bg-neutral-900/70 backdrop-blur
                       transition active:scale-95"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 011.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                  <path d="M4 18L20 18" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round"></path> 
                  <path d="M4 12L20 12" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round"></path> 
                  <path d="M4 6L20 6" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round"></path> 
                </g>
              </svg>
            )}
          </button>
        </div>

        {/* Opções listadas abaixo no mobile (dentro do glass) */}
        <nav
          id="mobile-menu"
          className={`lg:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300
                      ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col gap-4 py-4 text-base">
            <li><Link href={"#projects"} onClick={() => setOpen(false)}>{"<Projetos/>"}</Link></li>
            <li><Link href={"#sobre"} onClick={() => setOpen(false)}>{"<Sobre/>"}</Link></li>
            <li><Link href={"#contato"} onClick={() => setOpen(false)}>{"<Contato/>"}</Link></li>
            <li><DarkModeToggle/></li>
          </ul>
        </nav>

      </div>
    </div>
  )
}
