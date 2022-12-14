import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleMenu = () => {
    setNav(!nav);
  };

  return (
    <nav className=" text-white flex justify-between mx-auto px-4 h-24 max-w-[1240px] items-center">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
      <ul className="hidden md:flex">
        <a href="/">
          <li className="p-4">Company</li>
        </a>
        <a href="/">
          <li className="p-4">Resources</li>
        </a>
        <a href="/">
          <li className="p-4">Home</li>
        </a>
        <a href="/">
          <li className="p-4">About</li>
        </a>
        <a href="/">
          <li className="p-4">Contact</li>
        </a>
      </ul>
      <div className=" flex md:hidden ">
        {nav ? (
          <AiOutlineClose size={30} onClick={handleMenu} />
        ) : (
          <AiOutlineMenu size={30} onClick={handleMenu} />
        )}
      </div>
      <div
        className={`${
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-600 bg-[#101110]  translate-x-[0%] ease-in-out duration-500"
            : "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-200 bg-[#101110] translate-x-[-100%] duration-500"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 pl-8 mx-auto">
          REACT
        </h1>
        <ul className="uppercase  p-4">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
            <a href="#company">Company</a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
            <a href="#resource">Resources</a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
            <a href="#about">About</a>
          </li>
          <li className="p-4 hover:text-[#00df9a]">
            <a href="#contact ">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
