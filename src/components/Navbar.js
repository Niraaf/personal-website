'use client';

import { useState, useEffect, useRef } from "react";
import Link from 'next/link';

export default function Navbar() {
  {/* State to manage the current theme */ }
  const [currentTheme, setCurrentTheme] = useState('light');
  const themes = ['light', 'dark', 'blue', 'sepia'];

  const changeTheme = () => {
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  {/* State to manage visibility and scroll positions */ }
  const [visible, setVisible] = useState(true);
  const mouseNearTopRef = useRef(true);
  const prevScrollY = useRef(0);
  const currScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
      setVisible(true);
    } else if (currentScrollY > prevScrollY.current && !mouseNearTopRef.current) {
      setVisible(false);
    } else if (currentScrollY < prevScrollY.current) {
      setVisible(true);
    }

    prevScrollY.current = currScrollY.current;
    currScrollY.current = currentScrollY;
  };

  const handleMouseMove = (event) => {
    if (event.clientY < 100) {
      mouseNearTopRef.current = true;
      setVisible(true);
    } else {
      mouseNearTopRef.current = false;
      if (currScrollY.current > prevScrollY.current) {
        setVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-full text-sm w-[400px] z-50 transition-all duration-300 ease-in-out hover:w-[500px] shadow-lg ${visible ? "translate-y-0" : "-translate-y-[200%]"}`}>
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
