/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ToDo from "../assets/todolist.jpg";
import Moeda from "../assets/conversormoeda.jpg";
import Calculadora from "../assets/calculadorajs.jpg";
import Instagram from "../assets/cloneinsta.jpg";


const Project = () => {
  return (
    <div
      name="project"
      className="w-full shadow-lg md:h-screen text-gray-300 bg-gradient-to-t to-[#091730] from-[#030c1b]"
    >
      <div className="ma-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Project
          </p>
          <p className="py-6">// Check some of my recent project.</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:m-20 m-10">

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ToDo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover  */}
                <div className="opacity-0  group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                         HTML5, CSS3, JS e Storange Application
                     </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                     Demo
                             </button>
                         </a>
                         <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                     Code
                            </button>
                        </a>
                    </div>
                </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Moeda})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover  */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                         HTML5, CSS3, JS e Storange Application
                     </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                     Demo
                             </button>
                         </a>
                         <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                     Code
                            </button>
                        </a>
                    </div>
                </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Calculadora})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div2"
          >
            {/* Hover  */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                         HTML5, CSS3, JS e Storange Application
                     </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                     Demo
                             </button>
                         </a>
                         <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                     Code
                            </button>
                        </a>
                    </div>
                </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Instagram})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div2"
          >
            {/* Hover  */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-1xl font-bold text-white tracking-wider">
                         HTML5, CSS3, JS e Storange Application
                     </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                     Demo
                             </button>
                         </a>
                         <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                     Code
                            </button>
                        </a>
                    </div>
                </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
