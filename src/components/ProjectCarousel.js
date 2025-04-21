"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarouselSlide from "./CarouselSlide";

export default function WorkCarousel() {
    const slides = [
        <CarouselSlide
            key="1"
            title="Personal Website"
            content="Built with react and fully custom components. You're looking at it right now, what do you think :)"
            image="/personalWebsite.png"
            link="#home"
        />,
        <CarouselSlide
            key="2"
            title="Reel In"
            content="A collaborative web platform that connects individuals in the STEM field to share and find 
                    collaborative projects and gain industry experience"
            image="/reelin.png"
        />,
        <CarouselSlide
            key="3"
            title="HobbyClock (In Progress!)"
            content="An application designed to help users track the time spent on hobbies and activities, promoting a healthy and balanced lifestyle."
            image="/smeagol.png"
        />
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
        if (isTransitioning || slides.length === 1) return;

        setCarouselPos((prev) => prev - 1);
        setIsTransitioning(true);
        setTimeout(() => {
            setCarouselPos((prev) => (prev === 0 ? extendedSlides.length - 2 : prev));
            setIsTransitioning(false);
        }, timeoutDuration);
    };

    const handleRightClick = () => {
        if (isTransitioning || slides.length === 1) return;

        setCarouselPos((prev) => prev + 1);
        setIsTransitioning(true);
        setTimeout(() => {
            setCarouselPos((prev) => (prev === extendedSlides.length - 1 ? 1 : prev));
            setIsTransitioning(false);
        }, timeoutDuration);
    };


    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex items-center w-full h-full space-x-4">
                <button className="p-3 rounded-full" onClick={handleLeftClick}>
                    <FaArrowLeft size={30} />
                </button>

                <div className="w-full h-full overflow-hidden rounded-3xl hover:scale-102 shadow-xl transition-transform duration-300">
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

            <div className="flex justify-center w-full space-x-2 mt-5">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-5 h-5 rounded-full transition-all duration-300 ${index === ((carouselPos % slides.length) + slides.length - 1) % slides.length
                            ? 'bg-[var(--foreground)] scale-125'
                            : 'bg-[var(--accent)]'
                            }`}
                    ></div>
                ))}
            </div>
        </div>

    );
}
