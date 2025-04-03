"use client";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
        <div className="flex flex-col items-center p-20 w-full rounded-3xl bg-[var(--foreground)] text-[var(--background)]" >
            <h1 className="text-7xl font-extrabold mb-15">
                Need to reach me?
            </h1>
            <div className="flex w-full bg-[var(--secondary-accent)] text-[var(--accent)] p-10 rounded-3xl">
                <p className="text-3xl font-medium w-1/2">
                    I would love to hear from you! Whether it&apos;s a question, collaboration, or just a friendly chat, don&apos;t hesitate to reach out.
                </p>
                <div className="flex items-center justify-center w-1/2 space-x-3">
                    <button onClick={handleClickLinkedIn} className="p-3 cursor-pointer rounded-full hover:mx-5">
                        <FaLinkedin size={40} />
                    </button>
                    <button onClick={handleClickGithub} className="p-3 cursor-pointer rounded-full hover:mx-5">
                        <FaGithub size={40} />
                    </button>
                    <button onClick={handleClickInstagram} className="p-3 cursor-pointer rounded-full hover:mx-5">
                        <FaInstagram size={40} />
                    </button>
                    <button onClick={handleClickGmail} className="p-3 cursor-pointer rounded-full hover:mx-5">
                        <SiGmail size={40} />
                    </button>
                </div>
            </div>
        </div>
    )
}
