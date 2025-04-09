import Image from "next/image";

export default function CarouselSlide({ content, image }) {
    return (
        <div className="flex flex-col w-full h-full">
            <Image
                src= { image }
                alt="Smeagol"
                width={1000} // You can adjust the width here
                height={1000} // Height of the image
                className="object-cover h-[420px]"
            />
            <div className="w-full h-full px-10 py-5">
                {content}
            </div>
        </div>

    )
}