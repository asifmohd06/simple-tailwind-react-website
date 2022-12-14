import React, { useState } from "react";

const Newsletter = () => {
  const [formValue, setFormvalue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormvalue("");
  };
  return (
    <div className="w-full bg-[#000300]  py-16 text-white px-4">
      <div className="grid lg:grid-cols-3 max-w-[1240px] mx-auto">
        <div className=" lg:col-span-2 text-center lg:text-left my-4">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl ">
            Want tips & tricks to optimize your flow ?
          </p>
          <h1 className="font-bold py-2">
            Signup to our newsletter and stay up to date
          </h1>
        </div>

        <div className="my-4 mx-auto lg:ml-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              name=""
              id=""
              className="rounded w-full p-3 text-black"
              value={formValue}
              onChange={(e) => {
                setFormvalue(e.target.value);
              }}
            />
            <button className="  bg-[#00df9a] rounded w-[12.5em] p-2  my-4 hover:bg-[#077b56d5] text-black sm:ml-4 mx-auto">
              Notify me
            </button>
          </form>
          <p>
            We care about the protection of your data.Read our &nbsp;
            <a href="/" className="text-[#00fd9a]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
