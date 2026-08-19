import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import StackSchematic from "./components/StackSchematic";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <StackSchematic />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
