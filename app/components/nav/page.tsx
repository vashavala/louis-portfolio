"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    const oppositeTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.remove(oppositeTheme)
    document.documentElement.classList.add(theme)
  }, [theme])

  const [menuVisible, setMenuVisible] = useState(false)
  const goLink = () => {
    setMenuVisible(false)
  }
  return (
    <nav className="z-20 fixed left-0 right-0 h-24 flex justify-center shadow-[0_20px_120px_0_rgba(255,255,255,.12)]">
      <div className="w-8/12 flex items-center justify-between pl-4 pr-4 text-xl">
        <div>Louis Liu</div>
        <div className="flex gap-8">
          <div className="flex gap-8 max-md:hidden">
            <Link href="#Home" scroll={false}>Home</Link>
            <Link href="#About" scroll={false}>About</Link>
            <Link href="#Skills" scroll={false}>Skills</Link>
            <Link href="#Contact Me" scroll={false}>Contact Me</Link>
          </div>
          <svg viewBox="0 0 100 100" className="w-8 aspect-square cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {
              theme === 'dark' ? (
                <React.Fragment>
                  <path d="M 50 20 C 0 20, 0 80, 50 80" stroke="#fff" fill="#fff" strokeWidth="4" />
                  <path d="M 50 20 C 25 20, 25 80, 50 80" stroke="#fff" strokeWidth="4" />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <circle cx="50" cy="50" r="20" fill="#000" />
                  <circle cx="50" cy="50" r="40" stroke="#000" fill="transparent" strokeWidth="20" strokeDasharray="16" />
                </React.Fragment>
              )
            }
          </svg>
          <svg viewBox="0 0 100 100" className="w-8 aspect-square md:hidden cursor-pointer" onClick={() => setMenuVisible(true)}>
            <path d="m20 20 h80" strokeWidth="12" stroke={theme === 'dark' ? '#fff' : '#000'} strokeLinecap="round" />
            <path d="m20 50 h80" strokeWidth="12" stroke={theme === 'dark' ? '#fff' : '#000'} strokeLinecap="round" />
            <path d="m20 80 h80" strokeWidth="12" stroke={theme === 'dark' ? '#fff' : '#000'} strokeLinecap="round" />
          </svg>

          {menuVisible && (
            <div className="z-50 fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center gap-12 font-black text-3xl bg-[rgb(var(--background-color))]">
              <div>Home</div>
              <div>Projects</div>
              <div>Skills</div>
              <div>Contact Me</div>
              <svg viewBox="0 0 100 100" className="absolute right-8 top-8 aspect-square w-8" onClick={() => goLink()}>
                <path d="M 10 10 L 90 90" strokeWidth="20" stroke={theme === 'dark' ? '#fff' : '#000'} strokeLinecap="round" />
                <path d="M 90 10 L 10 90" strokeWidth="20" stroke={theme === 'dark' ? '#fff' : '#000'} strokeLinecap="round" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
