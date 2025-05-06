"use client";

import { useState } from "react";

export default function AboutCard({ name, bulletPoints }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <div
            className="perspective-1000 cursor-pointer"
            onClick={() => setFlipped(!flipped)}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
            <div
                className={`relative w-full h-80 rounded-xl transition-transform hover:scale-105 duration-500 ${flipped ? 'rotate-y-180 hover:rotate-2' : 'hover:-rotate-2'
                    }`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 p-6 flex flex-col justify-center items-center backface-hidden"
                    style={{
                        backgroundColor: 'var(--background)',
                        border: '4px solid var(--accent)',
                        borderImage: 'linear-gradient(to right, var(--accent), var(--secondary-accent)) 1',
                        color: 'var(--foreground)'
                    }}
                >
                    <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                </div>
                {/* Back */}
                <div
                    className="absolute inset-0 p-6 flex flex-col justify-start backface-hidden rotate-y-180"
                    style={{
                        backgroundColor: 'var(--background)',
                        border: '4px solid var(--secondary-accent)',
                        borderImage: 'linear-gradient(to right, var(--secondary-accent), var(--accent)) 1',
                        color: 'var(--foreground)'
                    }}
                >
                    <ul className="list-disc pl-5 space-y-1">
                        {bulletPoints.map((point, i) => (
                            <li key={i} className="text-base">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}