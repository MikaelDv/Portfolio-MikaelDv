"use client";
import React, { useEffect } from 'react'
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        document.querySelector('.glass-header')?.classList.add('scrolled');
      } else {
        document.querySelector('.glass-header')?.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='w-full px-24 py-6 fixed top-0 box-border z-50'>
      <div className="flex justify-between items-center px-12  md:px-16 lg:px-10   py-8 md:py-6 2xl:py-8  glass-header">
        <h1 
            className="font-semibold 2xl:text-4xl lg:text-3xl md:text-xl sm:text-2xl "
        >Mikael Sanches<a href="" className="font-black bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default" >.</a></h1>
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-11 font-normal 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs'>
            <Link href={""}><li>{"<Projetos/>"}</li></Link>
            <Link href={""}><li>{"<Sobre/>"}</li></Link>
            <Link href={"#contato"}><li>{"<Contato/>"}</li></Link>
            <DarkModeToggle/>
          </ul>
        </div>
      </div>
    </div>
  )
}
