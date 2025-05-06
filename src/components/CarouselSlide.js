import Image from "next/image";

export default function CarouselSlide({ title, content, image, link }) {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    };

    return (
        <div
            className="relative flex flex-col w-full h-full cursor-pointer group overflow-hidden"
            onClick={handleClick}
        >
            {/* Title Overlay */}
            <h1 className="absolute top-6 left-6 text-3xl font-bold text-[var(--background)] backdrop-blur-sm bg-[var(--foreground)]/60 px-4 py-2 rounded-xl z-10">
                {title}
            </h1>

            {/* Project Image */}
            <Image
                src={image}
                alt="Project image"
                width={1000}
                height={1000}
                className="object-cover h-[420px] w-full transition-opacity duration-300 ease-in-out group-hover:opacity-60"
            />

            {/* Content Text */}
            <div className="flex items-center justify-center w-full h-full px-8 text-lg leading-relaxed text-[var(--background)] font-medium">
                {content}
            </div>
        </div>

    )
}