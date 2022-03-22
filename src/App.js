import React from 'react';
import './App.css';
import HomeSection from "./PageSections/HomeSection";
import About from './components/About';
import Services from './components/Services';
function App() {
  return (
    <div>
      <HomeSection/>
      <About />
      <Services />
    </div>

      
  );
}

export default App;
