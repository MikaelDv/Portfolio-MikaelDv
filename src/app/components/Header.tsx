import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <div className='flex justify-between items-center py-12 px-32'>
        <h1 
            className="text-4xl font-semibold"
        >Mikael Sanches<a href="" className="font-black bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default" >.</a></h1>
        <div>
        <ul className='flex items-center gap-11 font-normal text-xl'>
          <Link href={""}><li>{"<Projetos/>"}</li></Link>
          <Link href={""}><li>{"<Sobre/>"}</li></Link>
          <Link href={""}><li>{"<Contato/>"}</li></Link>
          <DarkModeToggle/>
        </ul>
      </div>
    </div>
  )
}
