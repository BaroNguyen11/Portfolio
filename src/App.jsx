import Background from "./components/Background";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Footer from "./sections/Footer";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
