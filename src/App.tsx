import CursorGlow from "./components/effects/CursorGlow";
import NeuralField from "./components/effects/NeuralField";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import SemanticSpace from "./components/sections/SemanticSpace";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full border border-teal bg-ink px-4 py-2 font-mono text-sm text-teal focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000]"
      >
        Skip to content
      </a>
      <CursorGlow />
      <NeuralField />
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <SemanticSpace />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
