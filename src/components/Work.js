"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function Work() {
    const [carouselPos, setCarouselPos] = useState(0);
    const totalSlides = 3;

    const handleLeftClick = () => {
        setCarouselPos((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleRightClick = () => {
        setCarouselPos((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex items-center w-full min-h-screen">
            <button className="p-3 rounded-full" onClick={handleLeftClick}>
                left
            </button>
            <div className="flex w-full min-h-screen mx-10 bg-[var(--secondary-accent)] rounded-3xl flex items-center">
                <div 
                className="flex-shrink-0 bg-[var(--foreground)] text-[var(--background)] w-full h-full p-10 rounded-3xl transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${carouselPos * 100}%)` }}
                >
                    example text here
                </div>
                <div 
                className="flex-shrink-0 bg-[var(--foreground)] text-[var(--background)] w-full h-full p-10 rounded-3xl transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${carouselPos * 100}%)` }}
                >
                    example text here
                </div>
                <div 
                className="flex-shrink-0 bg-[var(--foreground)] text-[var(--background)] w-full h-full p-10 rounded-3xl transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${carouselPos * 100}%)` }}
                >
                    example text here
                </div>
            </div>
            <button className="p-3 rounded-full" onClick={handleRightClick}>
                right
            </button>
        </div>
    );
}
