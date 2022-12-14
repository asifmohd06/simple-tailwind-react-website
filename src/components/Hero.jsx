import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className=" text-white max-w-[800px] w-full mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center   ">
        <p className="uppercase text-[#00df9a] font-bold p-2 text-md sm:text-xl">
          Growing With Data Analytics
        </p>
        <h1 className="uppercase font-bold text-4xl sm:text-6xl md:text-7xl">
          grow with data
        </h1>
        <div className="flex  mx-auto py-4">
          <h1 className=" text-xl sm:text-4xl md:text-5xl font-bold ">
            Fast, flexible financing for
          </h1>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={["BTB", 2000, "BTC", 2000, "SASS", 2000]}
            speed={1} // Custom Speed from 1-99 - Default Speed: 40
            className="text-gray-600 text-xl sm:text-4xl md:text-5xl font-bold pl-2 md:pl-4"
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
          {/* <Typed
            className="text-gray-600 text-xl sm:text-4xl md:text-5xl font-bold pl-2 md:pl-4"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          /> */}
        </div>
        <p className="text-gray-600 text-md sm:text-xl md:text-2xl font-bold ">
          Monitor your data analytics to increase revenue <br /> for BTC BTB
          SASS platforms
        </p>
        <button className="bg-[#00df9a] rounded w-[12.5em] p-2 mx-auto my-5 hover:bg-[#077b56d5] text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
