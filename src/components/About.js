import AboutCard from "./AboutCard";

export default function About() {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-screen p-20 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl"
            style={{
                color: "var(--background)",
                background: `linear-gradient(to bottom left, var(--secondary-accent) 0%, var(--foreground) 100%)`,
            }}
        >

            <div className="relative z-10 w-full max-w-7xl">
                <h2
                    className="text-5xl font-bold mb-4 inline-block"
                    style={{
                        borderBottom: "4px solid var(--accent)",
                        paddingBottom: '0.25rem',
                    }}
                >
                    What&apos;s up!
                </h2>
                <p
                    className="text-xl mb-12"
                    style={{ opacity: 0.85 }}
                >
                    Learn more about me and my interests here~
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            name: "Tech & Coding",
                            bulletPoints: [
                                "CS major at UCI",
                                "Love web dev & backend!",
                                "Always learning new technologies",
                                "Familiar with Python, C++, JS, and more"
                            ]
                        },
                        {
                            name: "Hobbies & Interests",
                            bulletPoints: [
                                "Journaling since 2017",
                                "Playing classical pieces and anime songs on the piano",
                                "Co-op video games",
                                "Exploring different boba shops"
                            ]
                        },
                        {
                            name: "Athleticism & Sports",
                            bulletPoints: [
                                "I love running!",
                                "Calisthenics enthusiast",
                                "UCI Spikeball club member",
                                "Working towards a handstand"
                            ]
                        },
                        {
                            name: "Fun Facts",
                            bulletPoints: [
                                "Filipino American",
                                "Sushi aficionado 🍣",
                                "4:24 mile personal best",
                                "High school XC team: #16 nationwide"
                            ]
                        }
                    ].map((card, idx) => (
                        <AboutCard
                            key={idx}
                            name={card.name}
                            bulletPoints={card.bulletPoints}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}