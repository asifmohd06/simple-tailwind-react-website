import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] py-16 mx-auto text-white grid md:grid-cols-3 gap-8 px-4">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, rem
          reiciendis nulla maiores recusandae cupiditate quisquam dolore
          veritatis perspiciatis reprehenderit inventore explicabo, quasi sunt
          aliquam minus soluta hic perferendis iusto.
        </p>
        <div className="flex justify-between  md:w-[75%]">
          <a href="www.facebook.com">
            <FaFacebookSquare size={30} />
          </a>
          <a href="www.twiter.com">
            <FaTwitterSquare size={30} />
          </a>
          <a href="www.instagram.com">
            <FaInstagramSquare size={30} />
          </a>
          <a href="www.github.com">
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
      <div className="md:col-span-2 text-center md:mt-[3em] mt-5">
        <div className="grid grid-cols-4 ">
          <div>
            <h1>Solutions</h1>
            <ul>
              <li className="text-gray-400">
                <a href="/">Analytics</a>
              </li>
              <li className="text-gray-400">
                <a href="/">Marketing</a>
              </li>
              <li className="text-gray-400">
                <a href="/">Commerce</a>
              </li>
              <li className="text-gray-400">
                <a href="/">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Support</h1>
            <ul>
              <li className="text-gray-400">
                <a href="/">Pricing</a>
              </li>
              <li className="text-gray-400">
                <a href="/">Documentation</a>
              </li>
              <li className="text-gray-400">
                <a href="/">Guides</a>
              </li>
              <li className="text-gray-400">
                <a href="/">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Company</h1>
            <ul>
              <li className="text-gray-400">
                <a href="/">About</a>
              </li>
              <li className="text-gray-400">
                {" "}
                <a href="/">Blog</a>
              </li>
              <li className="text-gray-400">
                {" "}
                <a href="/">Jobs</a>
              </li>
              <li className="text-gray-400">
                {" "}
                <a href="/">Press</a>
              </li>
              <li className="text-gray-400">
                {" "}
                <a href="/">Partners</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Legal</h1>
            <ul>
              <li className="text-gray-400">
                <a href="/">Claim</a>
              </li>
              <li className="text-gray-400">
                <a href="/">Policy</a>
              </li>
              <li className="text-gray-400">
                <a href="/">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
