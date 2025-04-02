'use client';

import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const themes = ['light', 'dark', 'blue', 'sepia'];

  const changeTheme = () => {
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-full text-sm w-[400px] z-50 transition-all duration-300 ease-in-out hover:w-[500px] shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4">
          <ul className="flex space-x-8 w-full justify-center">
            <li className="ease-in-out transition transform">
              <Link href="#home">Home</Link>
            </li>
            <li className="ease-in-out transition transform">
              <Link href="#about">About</Link>
            </li>
            <li className="ease-in-out transition transform">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="ease-in-out transition transform">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <button
        onClick={changeTheme}
        className="fixed top-4 right-4 p-4 rounded-full text-sm z-50"
      >
        Theme
      </button>
    </>
  );
}
