import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
const Hero = () => {
  const [search, setSearch] = useState(false);
  return (
    <div
      name="home"
      className="w-full h-[70vh] lg:h-screen max-w-[1600px] bg-[#004d40]"
    >
      <div className="flex justify-between ">
        <div className=" items-center  h-[80vh] lg:w-[50%] w-full">
          <h1 className="text-white font-bold text-[35px] lg:text-[45px] p-5 mt-[40px] ml-5">
            Find & Hire <br />
            <span className="text-[#d4e157]">
              Top 3% of expert <br />
              on jobyme
            </span>
          </h1>
          <p className="text-gray-300 ml-9 text-[22px] lg:text-[15px]">
            We delivered blazing fast & striking work solution
          </p>
          <div className="hidden w-[600px] lg:flex justify-between items-center h-[14vh] bg-white ml-9 mt-10 rounded-lg">
            <div className="p-5  border-r-2">
              <p className="text-gray-500">We are looking for ?</p>
              <h1 className="text-black text-xl">UI Designer</h1>
            </div>
            <div className="p-5">
              <p className="text-gray-500 ">We are looking for ?</p>
              <h1 className="text-black text-xl flex">
                Web Developer <AiOutlineDown className="ml-5 mt-2" />
              </h1>
            </div>
            <button
              onClick={() => setSearch(!search)}
              className="bg-yellow-500 w-[130px] h-full rounded-r-lg text-lg font-bold"
            >
              SEARCH
            </button>
            <div
              className={
                search
                  ? "absolute border-r-0 rounded-r-none w-[470px] h-[14vh] bg-yellow-500 flex items-center justify-center rounded-lg "
                  : "hidden"
              }
            >
              <input
                type="search"
                placeholder="    Search...."
                className="w-[350px] h-[40px] rounded-lg border-2 border-black"
              />
            </div>
          </div>
          <p className="text-white font-bold mt-3 p-5 ml-4">
            Popular : {""}
            <span className="lg:text-gray-300 text-white font-semibold">
              Design, Art, Business, Video, Video Editing
            </span>
          </p>
        </div>
        <div className=" h-[85vh] w-[50%] hidden lg:flex">
          <img
            className="h-[85vh] w-[60%] mx-auto"
            src="https://i.pinimg.com/474x/aa/40/34/aa4034a09c3180296c72c96692e5c245.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
