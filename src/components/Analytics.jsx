import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto justify-center">
        <img src={laptop} alt="/" className="w-[30em] my-4 mx-auto" />
        <div className="flex flex-col justify-center mx-auto">
          <p className="text-[#00df9a] uppercase font-bold text-xl">
            data analytics dashboard
          </p>
          <h1 className="text-black font-bold text-3xl md:text-4xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-black font-bold text-2sm md:text-xl py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptatum accusamus nostrum praesentium odit sed iusto, dicta quasi
            facere sequi itaque, quae voluptatibus corporis in a ipsa nobis
            fuga? Accusamus.
          </p>
          <button className="bg-black rounded w-[12.5em] p-2 mx-auto my-5  text-[#00df9a] md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
