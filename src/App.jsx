import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Project from "./components/Project";
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
   </div>
  )
}

export default App;
