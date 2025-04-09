import WorkCarousel from "./WorkCarousel";

export default function Work() {


    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
            <h1 className="text-7xl font-extrabold my-15">
                Take a look at my work~
            </h1>
            <WorkCarousel />
        </div>
    );
}
