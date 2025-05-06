"use client";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/farinsoriano/", "_blank");
    };

    const handleClickGithub = () => {
        window.open("https://github.com/Niraaf", "_blank");
    };

    const handleClickInstagram = () => {
        window.open("https://www.instagram.com/asiankidflash/", "_blank");
    };

    const handleClickGmail = () => {
        window.open("mailto:farinsoriano@gmail.com");
    };

    return (
        <section className="w-full py-20 flex justify-center items-center bg-transparent">
            <div
                className="w-full max-w-6xl flex flex-col items-center rounded-3xl text-[var(--background)] shadow-2xl p-10 sm:p-16"
                style={{
                    color: "var(--background)",
                    background: `linear-gradient(to bottom left, var(--secondary-accent) 0%, var(--foreground) 100%)`,
                }}
            >

                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-12 text-center">
                    Need to reach me?
                </h1>

                {/* Content Block */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 rounded-3xl bg-[var(--background)] p-8 sm:p-12 shadow-lg">

                    {/* Message Text */}
                    <p className="text-xl sm:text-2xl font-medium text-center lg:text-left max-w-2xl leading-relaxed text-[var(--foreground)]">
                        I would love to hear from you! Whether it’s a question, collaboration, or just a friendly chat — don’t hesitate to reach out.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 flex-wrap justify-center">
                        <button
                            onClick={handleClickLinkedIn}
                            className="p-4 bg-[var(--background)] text-[var(--foreground)] rounded-full shadow-md hover:scale-110"
                        >
                            <FaLinkedin size={32} />
                        </button>
                        <button
                            onClick={handleClickGithub}
                            className="p-4 bg-[var(--background)] text-[var(--foreground)] rounded-full shadow-md hover:scale-110"
                        >
                            <FaGithub size={32} />
                        </button>
                        <button
                            onClick={handleClickInstagram}
                            className="p-4 bg-[var(--background)] text-[var(--foreground)] rounded-full shadow-md hover:scale-110"
                        >
                            <FaInstagram size={32} />
                        </button>
                        <button
                            onClick={handleClickGmail}
                            className="p-4 bg-[var(--background)] text-[var(--foreground)] rounded-full shadow-md hover:scale-110"
                        >
                            <SiGmail size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );

}
