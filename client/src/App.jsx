import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
// import Experience from './components/Experience'; // Uncomment if using
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App bg-[#111827] text-[#E5E7EB] min-h-screen font-sans"> {/* Base styles */}
      <Navbar />
      <main> {/* Wrap sections in main */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;