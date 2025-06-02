import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Experience from './components/Experience';
//import Contact from './components/Contact';
//import Footer from './components/Footer';
import Playground from './components/Playground'; // Added Playground

function App() {
  return (
    // Ensure you're using the custom font classes from tailwind.config.js
    // and the dark theme background/text colors
    <div className="App bg-dark-bg text-light-text min-h-screen font-sans selection:bg-violet-flask selection:text-white">
      <Navbar />
      <main>
        {/* Add IDs to these main section components directly */}
        {/* If the component itself is a <section>, add ID there */}
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="playground"><Playground /></div> 
        {/*<div id="contact"><Contact /></div>*/}
      </main>
      {/*<Footer />*/}
    </div>
  );
}

export default App;