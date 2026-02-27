import "./App.css";
import { Information } from "./components/Information";
import { Header } from "./components/Navbar";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { Timeline } from "./components/Timeline";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full flex justify-center items-center px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <Information />
          <div className="section-divider" />
          <section id="about">
            <About />
          </section>
          <div className="section-divider" />
          <section id="skill">
            <Skill />
          </section>
          <div className="section-divider" />
          <section id="project">
            <Project />
          </section>
          <div className="section-divider" />
          <section id="timeline">
            <Timeline />
          </section>
          <div className="section-divider" />
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
