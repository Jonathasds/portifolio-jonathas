import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-t shadow-xl from-[#0a192ff8]  to-[#02030c] p-3 text-gray-500 ">
        <div className=" flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8">
                <div className="sm:text-center pb-8 pl-1 text-center" >
                    <h2 className="text-4xl font-bold inline border-b-4   border-green-700"> About</h2>
                </div>
                <div></div>

            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2  gap-8">
                <div className=" sm:text-right text-4xl font-bold">
                    <p>Hi. I'm <span className="text-green-600">Jônathas</span>, nice to meet you. Please take a look around.</p>
                </div>
                <div className="mt-2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat a non 
                        illum dicta mollitia exercitationem facere ad ut repudiandae impedit,
                         dolore ea autem fuga commodi provident laborum aspernatur recusandae sapiente?</p>
                </div>
            </div>

        </div>

    </div>
  )
};

export default About;
