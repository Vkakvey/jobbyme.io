import React from "react";
import { AiOutlineRight, AiOutlineEdit } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash, BsTelephoneForward } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { RiBankFill } from "react-icons/ri";
const Catagory = () => {
  return (
    <div
      className="max-w-[1600px] lg:h-[85vh] h-[210vh] bg-[#fcf3cf]"
      name="catagory"
    >
      <div>
        <div className="w-full h-[35vh] flex justify-between">
          <div className="w-[50%] h-full">
            <h1 className="lg:text-[40px] text-[25px] font-bold text-[#283747] mr-5 lg:ml-16 p-5">
              Most Demanding <br />
              Categories.
            </h1>
          </div>
          <div className="w-[50%] h-full p-5">
            <p className="text-[#283747] text-[15px] lg:text-lg">
              Together with useful notification, collaborationinsight, <br />
              and improvement tip lorem etc.
            </p>
            <br />
            <a
              className="text-[#d4ac0d] flex   text-lg underline"
              href="#explore"
            >
              Explor all fields <AiOutlineRight className="mt-2 ml-1" />
            </a>
          </div>
        </div>
        <div className="w-full h-[50vh]  grid lg:grid-cols-5 grid-cols-1 items-center gap-3">
          <div
            className="w-[220px] mx-auto h-[280px] bg-white rounded-[25%] cursor-pointer active:bg-[#2ecc71]
          active:border-2 active:border-black"
          >
            <MdDesignServices className="text-[30px] mx-auto mt-20" />
            <p className="text-center mt-10 text-black text-2xl">
              UI/UX Design
            </p>
            <p className="text-center mt-12 text-gray-500 text-xl">12K Jobs</p>
          </div>
          <div
            className="w-[220px] mx-auto h-[280px] bg-white rounded-[25%] cursor-pointer active:bg-[#2ecc71]
          active:border-2 active:border-black"
          >
            <BsCodeSlash className="text-[30px] mx-auto mt-20" />
            <p className="text-center mt-10 text-black text-2xl">Development</p>
            <p className="text-center mt-12 text-gray-500 text-xl">12K Jobs</p>
          </div>
          <div
            className="w-[220px] mx-auto h-[280px] bg-white rounded-[25%] cursor-pointer active:bg-[#2ecc71]
          active:border-2 active:border-black"
          >
            <HiShoppingBag className="text-[30px] mx-auto mt-20" />
            <p className="text-center mt-10 text-black text-2xl">Maketing</p>
            <p className="text-center mt-12 text-gray-500 text-xl">12K Jobs</p>
          </div>
          <div
            className="w-[220px] mx-auto h-[280px] bg-white rounded-[25%] cursor-pointer active:bg-[#2ecc71]
          active:border-2 active:border-black"
          >
            <AiOutlineEdit className="text-[30px] mx-auto mt-20" />
            <p className="text-center mt-10 text-black text-2xl">Editing</p>
            <p className="text-center mt-12 text-gray-500 text-xl">12K Jobs</p>
          </div>
          <div
            className="w-[220px] mx-auto h-[280px] bg-white rounded-[25%] cursor-pointer active:bg-[#2ecc71]
          active:border-2 active:border-black"
          >
            <RiBankFill className="text-[30px] mx-auto mt-20" />
            <p className="text-center mt-10 text-black text-2xl">Acounting</p>
            <p className="text-center mt-12 text-gray-500 text-xl">12K Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
