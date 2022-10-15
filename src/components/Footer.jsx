/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { TbCopyright } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiWhatsapp }  from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" border-t-[1px] border-blue-900 flex w-full  bg-[#020b13ef] text-gray-200  h-20">
      <div className=" flex contet-center flex-col w-full text-center  pt-2 ">
        
       
        <div className=" lg:hidden flex justify-center gap-24 ">
            
            <a target="_blank" className=" duration-200 hover:scale-125 flex justify-center items-center h-7 w-7  bg-[#333]" href="https://github.com/Jonathasds"><FaGithub size={20} /></a>
            <a target="_blank" className=" duration-200 hover:scale-125 flex justify-center items-center h-7 w-7 bg-blue-500" href="https://www.linkedin.com/in/j%C3%B4nathas-delgado-2a6b51102/"><FaLinkedin  size={20} /></a>
            <a target="_blank" className=" duration-200 hover:scale-125 flex justify-center items-center h-7 w-7 bg-green-600" href="https://wa.me/5522981818181?text=Obrigado+por+entrar+em+contato%2C+deixe+sua+mensagem%2C+assim+que+poss%C3%ADvel+ser%C3%A1+respondido%21%21"><SiWhatsapp  size={20} /></a>
          
        </div>

       
      <h3 className="text-sm p-1 font-bold text-green-700"> Jônathas Delgado da Silva</h3>
     
     
        <div className="flex justify-center items-center">
            <TbCopyright className="text-gray-100" size={20}></TbCopyright>
             <p className="text-sm font-bold"> Web developer 2022</p>  
        </div>  
       
      </div>
    </footer>
  );
};

export default Footer;
