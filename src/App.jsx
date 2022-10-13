import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Project from "./components/Project";
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
  return (
  
   <div>
  
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Skills/>
    <Contact/>
    <Footer/>
    
   </div>
  
  )
}

export default App;
    
