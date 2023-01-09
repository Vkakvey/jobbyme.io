import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
const Work = () => {
  return (
    <div className="lg:max-w-[1600px] max-w-[500px] lg:h-[70vh] h-[150vh] bg-[#2E8B57]">
      <div className="lg:w-full w-[50%] h-[20vh] ">
        <h1 className="lg:text-5xl flex item-center lg:w-[250px] w-[300px]   lg:ml-[680px] ml-[55px] text-2xl p-10 font-bold">
          How It's Work ?
        </h1>
      </div>
      <div className="lg:w-[1000px]  w-[400px] h-[50vh]  grid gap-[20px] mx-auto lg:grid-cols-3 grid-cols-1">
        <div className=" w-[250px] h-[300px] mx-auto">
          <RiAccountCircleFill className="mx-auto text-[#B4C424] text-[60px] mt-[25px]" />
          <h1 className="text-2xl mt-2 text-center font-bold text-[white]">
            Create Account
          </h1>
          <p className="text-slate-300 text-center mt-5">
            It's very easy to open an account <br />
            and start your journey.
          </p>
        </div>
        <div className=" w-[250px] h-[300px] mx-auto">
          <CgFileDocument className="mx-auto text-[#B4C424] text-[60px] mt-[25px]" />
          <h1 className="text-2xl mt-2 text-center font-bold text-[white]">
            Complete your profile
          </h1>
          <p className="text-slate-300 text-center mt-5">
            Complete your profile with all the info <br />
            to get attention of client.
          </p>
        </div>
        <div className=" w-[250px] h-[300px] mx-auto">
          <FaRegEdit className="mx-auto text-[#B4C424] text-[60px] mt-[25px]" />
          <h1 className="text-2xl mt-2 text-center font-bold text-[white]">
            Apply job aor hire
          </h1>
          <p className="text-slate-300 text-center mt-5">
            Apply & get your preferable jobs <br />
            with all the requirement and get it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
