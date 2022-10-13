/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiWhatsapp }  from "react-icons/si";





const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => setNav(!nav);
  


  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#10381ddc]  text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      

      {/* menu */}

      <ul className="hidden md:flex">
        
        <li className=" after-text-white text-green-500 hover:text-white hover:scale-110 ease-in duration-400">
          <Link  to="home" smooth={true} duration={800}>Home</Link>
        </li>   
          
        
        <li className="hover:text-green-500 hover:scale-110 ease-i duration-400">
        <Link  to="about" smooth={true} duration={800}>About</Link>
        </li>
        
        <li className="hover:text-green-500 hover:scale-110 ease-in duration-400">
        <Link  to="project" smooth={true} duration={800}>Project</Link>
        </li>
        
        <li className="hover:text-green-500 hover:scale-110 ease-in duration-400">
        <Link  to="skills" smooth={true} duration={800}>Skills</Link>
        </li>
       
        <li className="hover:text-green-500 hover:scale-110 ease-in duration-400">
        <Link  to="contact" smooth={true} duration={800}> Contact</Link>
        </li>
      </ul>

   

      {/* menu Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaTimes /> : <FaBars /> }
      </div>
      {/* mobile menu */}

      <ul
        className={
          nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192fe8] flex flex-col justify-center items-center"
        }
      >
        <li className="z-10 py-6 text-4xl text-green-500 hover:text-white hover:scale-110 ease-i duration-400">
        <Link onClick={handleClick} to="home" smooth={true} duration={800}>Home</Link>
        </li>
        <li className="z-10 py-6 text-4xl hover:text-green-500 hover:scale-110 ease-i duration-400">
        <Link onClick={handleClick} to="about" smooth={true} duration={800}>About</Link>
        </li>
        <li className="z-10 py-6 text-4xl hover:text-green-500 hover:scale-110 ease-i duration-400">
        <Link onClick={handleClick} to="project" smooth={true} duration={800}>Project</Link>
        </li>
        <li className="z-10 py-6 text-4xl hover:text-green-500 hover:scale-110 ease-i duration-400">
        <Link onClick={handleClick} to="skills" smooth={true} duration={800}>Skills</Link>
        </li>
        <li className="z-10 py-6 text-4xl hover:text-green-500 hover:scale-110 ease-i duration-400">
        <Link onClick={handleClick} to="contact" smooth={true} duration={800}> Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed  flex-col top-[35%] left-0">
        <ul className="">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-500 ">
            <a
            target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/j%C3%B4nathas-delgado-2a6b51102/"
            >
              {" "}
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#333] ">
            <a
            target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Jonathasds"
            >
              {" "}
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200  bg-green-600 ">
            <a
            target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://wa.me/5522981818181?text=Obrigado+por+entrar+em+contato%2C+deixe+sua+mensagem%2C+assim+que+poss%C3%ADvel+ser%C3%A1+respondido%21%21"
            >
              {" "}
              Whatsapp <SiWhatsapp size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-500">
            <a
             target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              {" "}
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
