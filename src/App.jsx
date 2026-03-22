import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div className="text-white">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Tools />
            <Experience />
            <Contact />
        </div>
    );
}