import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechMarquee from "./components/TechMarquee/TechMarquee";
import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechMarquee />

        <About />

        <Projects />

        <Expertise />



        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;