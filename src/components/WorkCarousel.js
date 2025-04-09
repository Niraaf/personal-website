"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarouselSlide from "./CarouselSlide";

export default function WorkCarousel() {
    const slides = [
        <CarouselSlide content="Hello there!" image="/smeagol.png" />,
        <CarouselSlide content="This is an example!" image="/smeagol.png" />,
        <CarouselSlide content="And this is another example." image="/smeagol.png" />
    ];

    const extendedSlides = [
        ...slides.slice(-1),
        ...slides,
        ...slides,
        ...slides.slice(0, 1)
    ];

    const [carouselPos, setCarouselPos] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const timeoutDuration = 500;

    const handleLeftClick = () => {
        if (isTransitioning) return;

        setCarouselPos((prev) => prev - 1);
        setIsTransitioning(true);
        setTimeout(() => {
            setCarouselPos((prev) => (prev === 0 ? extendedSlides.length - 2 : prev));
            setIsTransitioning(false);
        }, timeoutDuration);
    };

    const handleRightClick = () => {
        if (isTransitioning) return;

        setCarouselPos((prev) => prev + 1);
        setIsTransitioning(true);
        setTimeout(() => {
            setCarouselPos((prev) => (prev === extendedSlides.length - 1 ? 1 : prev));
            setIsTransitioning(false);
        }, timeoutDuration);
    };


    return (
        <div className="flex items-center w-full h-full space-x-4">
            <button className="p-3 rounded-full" onClick={handleLeftClick}>
                <FaArrowLeft size={30} />
            </button>

            <div className="w-full h-full overflow-hidden rounded-3xl">
                <div className={`flex ${isTransitioning === true ? "transition-all ease-in-out" : ""}`} style={{ transform: `translateX(-${carouselPos * 100}%)`, ...(isTransitioning ? { transitionDuration: `${timeoutDuration}ms` } : {}) }}>
                    {extendedSlides.map((slide, idx) => {
                        const normalizedIdx = idx === 0 ? extendedSlides.length - 2 : idx === extendedSlides.length - 1 ? 1 : idx;
                        return (
                            <div
                                key={idx}
                                className={`w-full h-120 flex-shrink-0 text-[var(--background)] ${normalizedIdx % 2 !== 0 ? "bg-[var(--foreground)]" : "bg-[var(--accent)]"
                                    }`}
                            >
                                {slide}
                            </div>
                        )
                    })}
                </div>
            </div>

            <button className="p-3 rounded-full" onClick={handleRightClick}>
                <FaArrowRight size={30} />
            </button>
        </div>
    );
}
