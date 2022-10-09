/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import CV from "../assets/cv.pdf";
import Logo from "../assets/logo.png";

const Home = () => {
  return (
    <div name="home" className="items-center flex w-full h-screen bg-[#000000]">
      {/* conatiner */}

      <div className="max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-full">
        <p className="text-green-700">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Jônathas Delgado
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
          I'm a web developer{" "}
        </h2>
        <p className="text-gray-500 py-4 mx-w-[700px]">
          I'm a Front-tend web developer, looking for an internship. Applying
          responsive, React.Js
        </p>
        <div className="m-5">
          <button className="hover:scale-110 ease-in duration-200 hover:text-white  border-2  text-green-600 border-green-500 px-6 py-3 my-2 flex items-center  ">
            {" "}
            <a target="_blank" href={CV} dowload>
              {" "}
              Dawload CV{" "}
            </a>
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>

      <div className=" hidden lg:flex lg:mr-5 flex-col  justify-center mb-20 mr-20">
        <img className="w-[180px] p-2" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
