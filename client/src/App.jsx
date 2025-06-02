import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './index.css';

function App() {
  return (
    <> {/* Using Fragment to avoid unnecessary div */}
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Other sections will go here */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App
