import ProjectCarousel from "./ProjectCarousel";

export default function Work() {


    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
            <h1 className="text-7xl font-extrabold mb-10 mt-5">
                Take a look at my projects~
            </h1>
            <ProjectCarousel />
        </div>
    );
}
