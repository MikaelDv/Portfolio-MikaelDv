import React from 'react'
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <div className='flex justify-between items-center 2xl:py-12 px-32 lg:py-10 px-24 md:py-8 px-20'>
      <h1 
          className="font-semibold 2xl:text-4xl lg:text-3xl md:text-xl sm:text-2xl "
      >Mikael Sanches<a href="" className="font-black bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default" >.</a></h1>
      <div className='2xl:block xl:block lg:block md:block sm:hidden'>
        <ul className='flex items-center gap-11 font-normal 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs'>
          <Link href={""}><li>{"<Projetos/>"}</li></Link>
          <Link href={""}><li>{"<Sobre/>"}</li></Link>
          <Link href={""}><li>{"<Contato/>"}</li></Link>
          <DarkModeToggle/>
        </ul>
        </div>
    </div>
  )
}
