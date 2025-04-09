import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {/* Flex container for text and image */}
            <div className="flex w-full mx-auto px-4">
                {/* Left side for text */}
                <div className="flex flex-col justify-center w-1/2 text-left px-5">
                    <h1 className="text-7xl font-extrabold mb-4">
                        Farin Soriano
                    </h1>
                    <p className="text-3xl font-medium mb-6">
                        Aspiring Software Engineer, Web Developer, Innovator.
                    </p>
                    <p className="text-xl mb-8">
                        Creating tools that simplify daily life and help keep things organized. Join me on my journey to build a more efficient future!
                    </p>
                    <Link href="#contact">
                        <button className="w-full px-6 py-2 bg-blue-800 text-white font-semibold rounded-full">
                            Learn More
                        </button>
                    </Link>
                </div>

                {/* Right side for image */}
                <div className="w-1/2 flex justify-center items-center overflow-hidden px-5">
                    <Image
                        src="/umbrella.png"
                        alt="Smeagol"
                        width={1000} // You can adjust the width here
                        height={1000} // Height of the image
                        className="object-cover rounded-lg shadow-lg w-full h-[430px]"
                    />
                </div>
            </div>
        </div>
    );
}
