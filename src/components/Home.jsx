/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import CV from "../assets/cv.pdf";
import Logo from "../assets/logo.png";
import Typed from "react-typed";

const Home = () => {
  return (
    <div name="home" className="items-center flex w-full h-screen  bg-[#000000]">
      {/* conatiner */}

      <div className="max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-full">
        <p className="text-green-700">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Jônathas Delgado
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
          I'm a web developer{" "}
        </h2>
        <p className="text-gray-500 text-md py-4 mx-w-[700px]">
          I'm a front-end web developer, looking for an internship.<br/> Web
          Applications: <span className="text-green-500 m-1 text-lg uppercase" >
        <Typed
          
          strings={[
            "HTML.",
            "CSS.",
            "JavaScript.",
            "React.JS.",
            "Node.js.",
            "Firebase.",
            "MongoDB.",
            "Bootstrap.",
            "TailWind.",
          ]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        </span>
        </p>
        <div className="m-5">
          <button className="hover:scale-110 cursor-progress ease-in animate-pulse duration-200 hover:text-white  border-[1px]  text-green-500 border-green-500 px-6 py-3 my-2 flex items-center  ">
            
            <a className="cursor-progress" target="_blank" href={CV} dowload>
              
              Download CV
            </a>
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>

      <div className=" hidden lg:flex lg:mr-5 flex-col  justify-center mb-20 mr-20">
        <img className="w-[180px] animate-bounce " src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
