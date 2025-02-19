"use client"
import React from 'react'
import Image from "next/image";
import { useTheme } from '../context/ThemeProvider'

export default function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button onClick={toggleDarkMode}>
            <Image src={"/sun.svg"} alt={"Sun Icon"} width={30} height={30}
                className="hidden dark:block "></Image>
            <Image src={"/moon.svg"} alt={"Sun Icon"} width={30} height={30}
                className="dark:hidden"></Image>
        </button>
    )
}
