export default function About() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center pt-20 min-h-screen p-4 rounded-3xl bg-[var(--secondary-accent)] text-[var(--accent)]" >
                <div className="p-6 ">
                    <h1 className="text-7xl font-extrabold mb-4 ">
                        What's up!
                    </h1>
                    <p className="text-3xl font-medium mb-6">
                        I'm a current CS major at UC Irvine, and I'm passionate about tech and self-improvement.
                    </p>
                </div>
            </div>
        </div>
    )
}