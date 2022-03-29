import React from 'react';
import './App.css';
import HomeSection from "./PageSections/HomeSection";
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
function App() {

  
  

  return (
    <div>
      <Navbar />
      <HomeSection/>
      <About />
      <Services />
      <Portfolio  />
    </div>

      
  );
}

export default App;
