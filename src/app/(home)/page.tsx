import About from "./_components/About";
import Features from "./_components/Features";
import Hero from "./_components/Hero";

export default function Home() {
    return (
        <div>
            <div className="bg-[#F2F7FF]">
                <Hero />
            </div>
            <About />
            <Features />
        </div>
    );
}
