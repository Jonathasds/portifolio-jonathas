import React, {useState, useEffect} from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Project from "./components/Project";
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function() {
    function posicaoScroll() {
      if(window.scrollY > 0){
        setAtivaCor(true);
      }else {
        setAtivaCor(false)
      }
    }
    window.addEventListener( 'scroll', posicaoScroll);
  }, []);
  
  
  return (
  
   <div>
  
    <Navbar acao={ativaCor}/>
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
    
