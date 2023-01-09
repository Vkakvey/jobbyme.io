import React from "react";
import { FaDownload } from "react-icons/fa";
const Upload = () => {
  return (
    <div className="w-full h-screen max-w-[1600px]">
      <div className="w-[90%] h-screen lg:mt-[150px] mt-[1800px] mx-auto flex items-center">
        <img
          className="mx-auto w-[90%] h-[80%] object-cover blur-sm"
          src="https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="absolute flex item-center border-2 border-black/80 bg-lime-500 rounded-xl  lg:right-[370px] px-[30px] py-[20px]">
          <span className="flex">
            <FaDownload className="text-3xl m-2 text-white" />
          </span>
          <input type="file" />
        </div>
      </div>
      <div className="w-full h-[200px]  flex justify-between">
        <div className="lg:flex hidden">
          <h1 className="text-3xl p-5 ml-36">
            Most Complete Job Portal <br />
            <p className="text-xl text-gray-500">
              Sign up and start to find your job and your talent
            </p>
          </h1>
        </div>

        <div className="w-[500px] h-full">
          <button className="px-7 py-3 ml-[50px] lg:mr-[20px] bg-white rounded-xl border-2 border-black text-black font-bold">
            Lookig for a job ?
          </button>
          <button className="px-7 lg:ml-2 ml-5 py-3 bg-lime-500 rounded-xl   text-black font-bold">
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
