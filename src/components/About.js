import AboutCard from "./AboutCard";

export default function About() {
    return (
        <div className="flex flex-col items-center pt-20 min-h-screen w-full p-4 rounded-3xl bg-[var(--secondary-accent)] text-[var(--accent)]" >
            <h1 className="text-7xl font-extrabold mb-4 ">
                What&apos;s up!
            </h1>
            <p className="text-3xl font-medium mb-6">
                Learn more about me and my interests here :3
            </p>
            <div className="w-full flex flex-wrap gap-15 justify-center items-center py-20 px-15">
                <AboutCard
                    name="Tech & Coding"
                    bulletPoints={[
                        "CS major at UCI",
                        "Love web dev & backend!",
                        "Always learning new technologies",
                        "Familiar with Python, C++, JS, and more"
                    ]}
                />
                <AboutCard
                    name="Hobbies & Interests"
                    bulletPoints={[
                        "Journaling since 2017",
                        "Playing classical pieces and anime songs on the piano",
                        "Co-op video games",
                        "Exploring different boba shops",
                        "Learning multiple languages—spoken, not programming!",
                        "Mechanical keyboards"
                    ]}
                />
                <AboutCard
                    name="Athleticism and Sports"
                    bulletPoints={[
                        "I love running!",
                        "Calisthenics enthusiast",
                        "Part of UCI's roundnet (spike ball) club",
                        "Trying to do a handstand"
                    ]}
                />
                <AboutCard
                    name="Fun Facts"
                    bulletPoints={[
                        "Filipino American",
                        "Loves sushi 🍣",
                        "Has a 4:24 mile time",
                        "High school cross country team 16th in the nation in 2022"
                    ]}
                />

            </div>

        </div>
    )
}