import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Playground from './components/Playground';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App min-h-screen font-sans selection:bg-violet-flask selection:text-white">
      <Navbar />
      <main>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="playground"><Playground /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;