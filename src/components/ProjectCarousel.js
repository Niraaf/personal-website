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
            title="Repple (In Progress!)"
            content="A workout timer and routine app that helps users build custom workouts, track sessions with guided timers, and log performance data — designed for a seamless fitness experience and progress tracking."
            image="/repple.png"
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
        <div className="flex flex-col w-full h-full items-center px-6">
            <div className="flex items-center w-full h-full space-x-4 max-w-5xl">
                <button
                    className="p-3 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:scale-110 hover:bg-[var(--accent)] transition-all duration-300"
                    onClick={handleLeftClick}
                >
                    <FaArrowLeft size={24} />
                </button>

                <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.25)] transition-all duration-500">
                    <div
                        className={`flex ${isTransitioning ? "transition-all ease-in-out" : ""}`}
                        style={{
                            transform: `translateX(-${carouselPos * 100}%)`,
                            ...(isTransitioning ? { transitionDuration: `${timeoutDuration}ms` } : {})
                        }}
                    >
                        {extendedSlides.map((slide, idx) => {
                            const normalizedIdx = idx === 0 ? extendedSlides.length - 2 : idx === extendedSlides.length - 1 ? 1 : idx;
                            return (
                                <div
                                    key={idx}
                                    className={`w-full h-120 flex-shrink-0 backdrop-blur-md text-[var(--background)] ${normalizedIdx % 2 !== 0
                                            ? "bg-[var(--foreground)]/70"
                                            : "bg-[var(--accent)]/70"
                                        } rounded-3xl overflow-hidden`}
                                >
                                    {slide}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    className="p-3 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:scale-110 hover:bg-[var(--accent)] transition-all duration-300"
                    onClick={handleRightClick}
                >
                    <FaArrowRight size={24} />
                </button>
            </div>

            <div className="flex justify-center w-full space-x-3 mt-5">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === ((carouselPos % slides.length) + slides.length - 1) % slides.length
                                ? 'bg-[var(--foreground)] scale-125 shadow-md'
                                : 'bg-[var(--accent)]'
                            }`}
                    />
                ))}
            </div>
        </div>

    );
}
