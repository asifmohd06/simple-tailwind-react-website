import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Carrds = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-20 md:gap-8">
        <div className=" w-full border shadow-xl hover:scale-105 duration-300 flex flex-col justify-center p-4 my-4 items-center  mx-auto rounded-lg">
          <img
            src={single}
            alt=""
            className="w-[8rem] mt-[-5em] mx-auto bg-white"
          />
          <h2 className="font-bold text-2xl my-8">Single User</h2>
          <p className="font-bold text-3xl ">$149</p>
          <div className="font-medium text-center w-full px-5">
            <p className="border-t border-b  py-2 mt-6 ">500GB Storage</p>
            <p className="border-b  py-2  ">1 User Allowed</p>
            <p className="border-b  py-2  pb-4">Send Upto 2GB</p>
          </div>
          <button className="  bg-[#00df9a] rounded w-[12.5em] p-2  my-8 hover:bg-[#077b56d5] text-black  mx-auto">
            Start Trial
          </button>
        </div>
        <div className=" w-full border shadow-xl hover:scale-105 duration-300 flex flex-col justify-center p-4 my-4 items-center  mx-auto rounded-lg bg-gray-100 md:my-0">
          <img
            src={double}
            alt=""
            className="w-[8rem] mt-[-5em] mx-auto bg-transparent"
          />
          <h2 className="font-bold text-2xl my-8">Partnership</h2>
          <p className="font-bold text-3xl ">$299</p>
          <div className="font-medium text-center w-full px-5">
            <p className="border-t border-b  py-2 mt-6 ">3TB Storage</p>
            <p className="border-b  py-2  ">3 User Allowed</p>
            <p className="border-b  py-2  pb-4">Send Upto 5GB</p>
          </div>
          <button className="  bg-black rounded w-[12.5em] p-2  my-8 hover:bg-[#171717d5] text-[#00df9a]  mx-auto">
            Start Trial
          </button>
        </div>
        <div className=" w-full border shadow-xl hover:scale-105 duration-300 flex flex-col justify-center p-4 my-4 items-center  mx-auto rounded-lg">
          <img
            src={triple}
            alt=""
            className="w-[8rem] mt-[-5em] mx-auto bg-white"
          />
          <h2 className="font-bold text-2xl my-8">Group</h2>
          <p className="font-bold text-3xl ">$499</p>
          <div className="font-medium text-center w-full px-5">
            <p className="border-t border-b  py-2 mt-6 ">5TB Storage</p>
            <p className="border-b  py-2  ">5 User Allowed</p>
            <p className="border-b  py-2  pb-4">Send Upto 5GB</p>
          </div>
          <button className="  bg-[#00df9a] rounded w-[12.5em] p-2  my-8 hover:bg-[#077b56d5] text-black  mx-auto">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrds;
