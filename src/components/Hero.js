import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center h-screen overflow-hidden">
            {/* Radial stars background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundColor: "var(--background)",
                    maskImage: "radial-gradient(circle at center, black 50%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 75%)",
                }}
            >
                <div
                    style={{
                        backgroundImage: "radial-gradient(var(--foreground) 1.7px, transparent 1.7px)",
                        backgroundSize: "32px 32px",
                        width: "100%",
                        height: "100%",
                        opacity: 0.08,
                        animation: "moveStars 40s linear infinite",
                    }}
                />
            </div>
            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto px-8">
                {/* Image in circle frame */}
                <div
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-xl mb-8 md:mb-0 md:mr-12 transform transition-transform duration-700 hover:scale-105"
                    style={{ borderColor: "var(--accent)" }}
                >
                    <Image
                        src="/umbrella.png"
                        alt="Profile image"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text block */}
                <div className="text-center md:text-left space-y-4">
                    <h1
                        className="text-6xl md:text-7xl font-extrabold"
                        style={{ color: "var(--foreground)" }}
                    >
                        Farin Soriano
                    </h1>
                    <p className="text-lg md:text-2xl" style={{ color: "var(--foreground)" }}>
                        Building creative web experiences and intuitive tools.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-block px-8 py-3 font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
                        style={{
                            backgroundColor: "var(--accent)",
                            color: "var(--background)"
                        }}
                    >
                        Let’s Chat
                    </Link>
                </div>
            </div>
        </section>
    );
}