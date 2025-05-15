"use client";

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useTheme } from '../_context/ThemeProvider';

export default function Footer() {
    const darkMode = useTheme().darkMode; 

    return (
        <div className='font-[Sora] h-[40vh] w-full flex flex-col items-center justify-between pb-6 pt-24 text-[#101010] footer' id="contato">
            <div className='flex justify-between w-[78%] items-center'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-4xl font-semibold'>Entre em <span className='bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default'>contato</span>!</h1>
                    <p className='text-base font-light max-w-[70%]'>Quer bater um papo sobre tecnologia ou tem um projeto incrível em mente? Fique à vontade para me chamar!</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <div className='flex gap-6'>
                        <Link href={"https://www.linkedin.com/in/mikael-sanches"} target='_blank'>
                            <Image alt='linkedin icon' src={`/${!darkMode ? "dark-" : ""}linkedin.svg`} width={64} height={64}/>
                        </Link>
                        <Link href={"https://www.github.com/MikaelDv"} target='_blank'>
                            <Image alt='github icon' src={`/${!darkMode ? "dark-" : ""}github2.svg`} width={64} height={64}/>
                        </Link>
                        <Link href={"mailto:mikaelsanchesdev@gmail.com"} target='_blank'>
                            <Image alt='email icon' src={`/${!darkMode ? "dark-" : ""}email.svg`} width={64} height={64}/>
                        </Link>
                    </div>
                    <Link href={"#main"}>
                        <div>
                            <button className='flex gap-[6px]'>
                                <p className='text-base font-normal footer-top'>Voltar ao topo</p>
                                <Image alt='arrow up' src={`/${!darkMode ? "" : "dark-"}arrow-up.svg`} width={12} height={12}/>
                            </button>
                        </div>
                    </Link> 
                            
                </div>
            </div>
            <div className='flex  gap-1 items-center'>
                <p className='font-light text-[#373737] copy'>&copy; Pensado e desenvolvido por Mikael Sanches</p>
                <Image alt="purple umbrella image" src={"/guarda_chuva.png"} width={16} height={16} />
            </div>
        </div>
    )
}
