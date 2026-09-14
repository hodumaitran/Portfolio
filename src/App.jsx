import "./App.css";
import { useEffect, useState } from "react";
import { Information } from "./components/Information";
import { Header } from "./components/Navbar";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { Timeline } from "./components/Timeline";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
