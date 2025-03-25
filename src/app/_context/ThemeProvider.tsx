"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}: {children: ReactNode}) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("theme") === "dark";
    } 
    return false;
  });

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
