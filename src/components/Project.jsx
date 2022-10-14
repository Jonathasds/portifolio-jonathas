/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ToDo from "../assets/todolist.jpg";
import Moeda from "../assets/conversormoeda.jpg";
import Calculadora from "../assets/calculadorajs.jpg";
import Instagram from "../assets/cloneinsta.jpg";
import CalculadoraReact from "../assets/calculadoraReact.png";
import PokeCard from "../assets/card2.jpg"

import Portfolio from "../assets/portfolio.png";



const Project = () => {
 
  return (
    <div
      name="project"
      className="w-full shadow-lg md:h-screen text-gray-300 bg-gradient-to-t to-[#091730] from-[#030c1b]"
    >
      <div className="ma-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-3xl animate-pulse font-bold inline border-b-[1px]  border-t-[1px] text-gray-300 border-green-600">
            Project
          </p>
          <p className="py-6">// Check some of my recent project.</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ToDo})` }}
            className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover  */}
                <div className="opacity-0 text-center group-hover:opacity-100">
                    <span className="text-1xl  font-bold text-white tracking-wider">
                         To Do list <br/> HTML, CSS, JS
                     </span>
                    <div className="pt-8 text-center">
                        
                            <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://jonathasds.github.io/To-Do-List/">Demo </a>
                             </button>
                        
                         
                             <button className="text-center  hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://github.com/Jonathasds/To-Do-List">Code</a>
                            </button>
                        
                    </div>
                </div>
          </div>
          

          <div
            style={{ backgroundImage: `url(${PokeCard})` }}
            className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover  */}
                <div className="opacity-0 text-center  group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                         Cards<br/> HTML, CSS, JS, VANILLA JS
                     </span>
                    <div className="pt-8 text-center">
                       
                            <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                    <a target="_blank" href="https://jonathasds.github.io/cards-pokemon/"> Demo </a>
                             </button>
                      
                         
                             <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                    <a target="_blank" href="https://github.com/Jonathasds/cards-pokemon">  Code</a>
                            </button>
                        
                    </div>
                </div>
          </div>
          

          <div
            style={{ backgroundImage: `url(${CalculadoraReact})` }}
            className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover  */}
                <div className="opacity-0 text-center group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                    Calculadora React.js<br/> HTML, CSS, js, HOOKS.
                     </span>
                    <div className="pt-8 text-center">
                        
                            <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://calculadora-react-gilt.vercel.app/">Demo </a>
                             </button>
                      
                        
                             <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                    <a target="_blank" href="https://github.com/Jonathasds/Calculadora-React"> Code </a>
                            </button>
                       
                    </div>
                </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover  */}
                <div className="opacity-0 text-center group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                    Portfolio React.js<br/> HTML, CSS, JS, HOOKS, TAILWIND, React scroll, React Typed.
                     </span>
                    <div className="pt-8 text-center">
                        
                            <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://portifolio-jonathas.vercel.app/"> Demo</a>
                             </button>
                       
                        
                             <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                    <a target="_blank" href="https://github.com/Jonathasds/portifolio-jonathas"> Code  </a>
                            </button>
                       
                    </div>
                </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Moeda})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover  */}
                <div className="opacity-0 text-center group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                   Conversor de Moeda<br/> HTML, CSS, JS.
                     </span>
                    <div className="pt-8 text-center">
                       
                            <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://github.com/Jonathasds/conversor-de-moeda">Demo </a>
                             </button>
                      
                         
                             <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://jonathasds.github.io/conversor-de-moeda/">Code </a>
                            </button>
                        target="_blank"
                    </div>
                </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Calculadora})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div2"
          >
            {/* Hover  */}
                <div className="opacity-0 text-center group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                    Calculadora<br/> HTML, CSS, JS.
                     </span>
                    <div className="pt-8 text-center">
                        
                            <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://jonathasds.github.io/Calcuradora/">Demo </a>
                             </button>
                       
                         
                             <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://github.com/Jonathasds/Calcuradora"> Code</a>
                            </button>
                        
                    </div>
                </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Instagram})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div2"
          >
            {/* Hover  */}
                <div className="opacity-0 text-center group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                    Clone login Instagram <br/> HTML, CSS.
                     </span>
                    <div className="pt-8 text-center">
                        
                            <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                     <a target="_blank" href="https://jonathasds.github.io/RecriandoInstagram/">Demo </a>
                             </button>
                        
                       
                             <button className="text-center hover:bg-green-700 hover:text-gray-200 rounded-lg px-4 py-1 m-5 bg-white text-gray-700 font-bold text-lg">
                                    <a target="_blank" href="https://github.com/Jonathasds/RecriandoInstagram"> Code </a>
                            </button>
                        
                    </div>
                </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
