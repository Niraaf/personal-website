import Image from "next/image";

export default function CarouselSlide({ title, content, image, link }) {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    };

    return (
        <div className="flex flex-col w-full h-full cursor-pointer" onClick={handleClick}>
            <h1 className="absolute text-3xl font-bold w-full p-10 text-[var(--background)] z-1 ">
                { title }
            </h1>
            <Image
                src= { image }
                alt="Smeagol"
                width={1000}
                height={1000}
                className="object-cover h-[420px] opacity-75 hover:opacity-50 transition-opacity duration-300 ease-in-out"
            />
            <div className="flex items-center w-full h-full px-10">
                { content }
            </div>
        </div>

    )
}