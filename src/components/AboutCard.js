"use client";

import { useState } from "react";

export default function AboutCard({ name, bulletPoints }) {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="relative w-100 h-80 cursor-pointer perspective-1000" onClick={handleClick}>
            <div
                className={`relative w-full h-full rounded-3xl transition-transform duration-500 transform-3d text-[var(--background)] ${
                    flipped ? "rotate-y-180" : ""
                }`}
            >
                {/* Front of card */}
                <div className="absolute w-full h-full p-8 bg-[var(--foreground)] rounded-3xl flex flex-col justify-center items-center backface-hidden">
                    <h1 className="text-4xl font-extrabold mb-4">{name}</h1>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full p-8 bg-[var(--accent)] rounded-3xl flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                    <ul className="list-disc pl-5">
                        {bulletPoints.map((point, index) => (
                            <li key={index} className="text-lg">{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
