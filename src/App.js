import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import About from './components/About/About';
import Services from './components/Services/Services';
import Navbar from './components/Navbar/Navbar';
import SliderComponent from './components/Review/SliderComponent';
import Contact from './components/Contact/Contact';
function App() {

 return (
    <div className='App'>
      <Navbar />
      <Home/>
      <About />
      <Services />
     <SliderComponent />
     <Contact />
    </div>

      
  );
}

export default App;
