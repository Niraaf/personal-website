import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
      <section id="home" className="w-full">
        <Hero />
      </section>
      <section id="about" className="w-full mb-10">
        <About />
      </section>
      <section id="work" className="w-full mb-20">
        <Work />
      </section>
      <section id="contact" className="w-full">
        <Contact />
      </section>
    </div>
  );
}
