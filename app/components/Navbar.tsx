'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    function alternarTema() {
        setDarkMode(!darkMode)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 bg-[var(--bg-primary)]/80 backdrop-blur-md text-[var(--text-primary)] shadow-md border-b border-[var(--accent)]/50" style={{ padding: "0 3rem" }}>
        <span className="text-lg font-semibold tracking-wide">Jennifer Jurischka</span>            <ul className="flex gap-4">
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
      <button
        onClick={alternarTema}
        className="hover:bg-[var(--accent)] hover:text-white transition-all w-10 h-10 rounded-full flex items-center justify-center">
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}