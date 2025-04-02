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
  const [visible, setVisible] = useState(true); // Navbar visibility state
  const mouseNearTopRef = useRef(true); // Track mouse position using useRef
  const prevScrollY = useRef(0); // Track previous scroll position using useRef
  const currScrollY = useRef(0); // Track current scroll position using useRef

  // Handle scroll events
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
      // Show navbar if at the top
      setVisible(true);
    } else if (currentScrollY > prevScrollY.current && !mouseNearTopRef.current) {
      // Hide navbar when scrolling down and mouse is far from top
      setVisible(false);
    } else if (currentScrollY < prevScrollY.current) {
      // Show navbar when scrolling up
      setVisible(true);
    }

    prevScrollY.current = currScrollY.current; // Update the previous scroll position
    currScrollY.current = currentScrollY; // Update the current scroll position
  };

  // Handle mouse movement events
  const handleMouseMove = (event) => {
    if (event.clientY < 100) {
      mouseNearTopRef.current = true; // Set the ref directly
      setVisible(true); // Show navbar when mouse is near the top
    } else {
      mouseNearTopRef.current = false; // Set the ref directly
      if (currScrollY.current > prevScrollY.current) {
        setVisible(false); // Hide navbar when mouse is not near the top and scrolling down
      }
    }
  };

  // Set up event listeners for scroll and mousemove
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
