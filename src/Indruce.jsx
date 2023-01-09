import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
const Indruce = () => {
  const [upload, setUpload] = useState(false);
  const [postmobile, setPostmobile] = useState(false);
  return (
    <div className="max-w-[1600px] h-screen bg-white flex justify-between">
      <div className="lg:w-[50%] w-full h-full  p-5">
        <div className="flex justify-between">
          <img
            className="lg:w-[350px] lg:h-[220px] w-[200px] h-[150px] ml-[90px] mt-[20px] rounded-tl-[20px]  rounded-br-[20px]"
            src="https://i.pinimg.com/564x/e1/b4/42/e1b4421f142a2a4c60801b5860774e59.jpg"
            alt=""
          />
          <div className="absolute lg:mt-1 mt-[-140px] left-[35px] lg:left-[370px]">
            <input
              type="search"
              placeholder="   Designer, Brand logo..."
              className="w-[260px] h-[50px] bg-white rounded-lg absolute top-[130px] shadow-xl"
            />
            <button className="absolute active:bg-slate-300 px-5 py-5 bg-green-500 top-[130px] left-[270px] rounded-lg shadow-xl">
              <CiSearch className="text-lg font-bold" />
            </button>
          </div>
          <h1 className="tracking-wider text-[40px] mr-[70px] hidden lg:block">
            . . . <br />
            . . . <br />
            . . . <br />
            . . . <br />
          </h1>
        </div>
        <br />
        <div className="flex">
          <img
            className="lg:w-[180px] lg:h-[180px] hidden lg:block rounded-tl-[20px]  rounded-br-[20px] ml-[90px]"
            src="https://i.pinimg.com/474x/b7/94/ac/b794ac49535d61c537c66fd9138659de.jpg"
            alt=""
          />
          <div className="absolute w-[230px] rounded-xl h-[70px] bg-white shadow-2xl left-[80px] lg:left-[440px] mt-[-50px]">
            <div className="flex">
              <button className="mt-[15px] text-center ml-4 px-[15px] py-[15px] bg-[#f1948a] rounded-[100%]">
                <BsCheckLg className="text-[15px] text-red-600" />
              </button>
              <div className="mx-auto">
                <h1 className="text-gray-500 uppercase text-center absolute mt-[10px] left-[100px]">
                  Payment
                </h1>
                <p className="text-2xl text-black font-bold absolute left-[100px] mt-[35px]">
                  Kakvey Ket
                </p>
              </div>
            </div>
          </div>
          <img
            className="w-[250px] h-[270px] ml-[50px] rounded-tl-[20px]  rounded-br-[20px]"
            src="https://i.pinimg.com/564x/77/3e/af/773eaf32c69d27f15cb065e55b526284.jpg"
            alt=""
          />
        </div>
        <div className="w-[230px] h-[90px] bg-slate-300 rounded-xl absolute shadow-2xl mt-[20px] lg:mt-[-90px] left-[70px]">
          <h1 className="text-xl font-bold text-center">6+ Members</h1>
          <div className="grid grid-cols-5 mt-4  ml-[55px] w-[100px] items-start gap-2">
            <div className="w-[35px]   h-[35px]  rounded-full border-4 border-white">
              <img
                className="rounded-full"
                src="https://i.pinimg.com/474x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
                alt=""
              />
            </div>
            <div className="w-[35px]  h-[35px] bg-slate-500 rounded-full border-4 border-white">
              <img
                className="rounded-full"
                src="https://i.pinimg.com/736x/be/e3/f3/bee3f319506ded3453acd740aa6cdc1d.jpg"
                alt=""
              />
            </div>
            <div className="w-[35px]  h-[35px] bg-slate-500 rounded-full border-4 border-white">
              <img
                className="rounded-full"
                src="https://i.pinimg.com/originals/66/cb/74/66cb744dc96aced7b6eb7b1b218d0cac.gif"
                alt=""
              />
            </div>
            <div className="w-[35px] h-[35px] bg-slate-500 rounded-full border-4 border-white">
              <img
                className="rounded-full"
                src="https://i.pinimg.com/474x/f2/59/37/f2593750b80bb40b57d248b0a6f7ecc5.jpg"
                alt=""
              />
            </div>
            <div className="w-[35px] h-[35px] bg-slate-500 rounded-full border-4 border-white">
              <img
                className="rounded-full"
                src="https://i.pinimg.com/474x/01/c7/51/01c751482ef7c4f5e93f3539efd27f6f.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setPostmobile(!postmobile)}
          className="px-7 py-2 bg-[#f4d03f] lg:hidden flex mt-[150px] rounded-[30px] text-xl font-bold ml-[100px] active:bg-slate-500"
        >
          Post Job
        </button>
        <div
          className={
            !postmobile
              ? "w-[300px] h-[90px] bg-white shadow-2xl mt-[20px] absolute p-5 rounded-xl"
              : "hidden"
          }
        >
          <form class="flex items-center space-x-6 mx-auto w-250px">
            <div class="shrink-0">
              <img
                class="h-16 w-16 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="Current profile photo"
              />
            </div>
            <label class="block">
              <span class="sr-only">Choose profile photo</span>
              <input
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
              />
            </label>
          </form>
        </div>
      </div>
      <div className="lg:w-[50%] w-0 h-full hidden lg:block">
        <h1 className="text-5xl font-bold text-black p-7 ml-20">
          Get over 5000+ <br />
          talented experts <br />
          in jobyme.
        </h1>
        <p className="text-gray-500 p-7 ml-20 text-xl">
          A full hybrid workfore management tools are your to <br />
          use,as well access to our top 1% of talent.
        </p>
        <p className="text-black flex text-xl ml-[100px] font-bold">
          <AiOutlineCheck className="mr-5 mt-2 text-lg" /> Seamleass searching
        </p>
        <p className="text-black flex text-xl  ml-[100px] font-bold">
          <AiOutlineCheck className="mr-5 mt-2 text-lg" /> Get top 3% experts
          for your project
        </p>
        <p className="text-black flex text-xl  ml-[100px] font-bold">
          <AiOutlineCheck className="mr-5 mt-2 text-lg" /> Protected payments
          system
        </p>
        <br />
        <button
          onClick={() => setUpload(!upload)}
          className="px-7 py-2 bg-[#f4d03f] rounded-[30px] text-xl font-bold ml-[100px] active:bg-slate-500"
        >
          Post Job
        </button>
        <div
          className={
            !upload
              ? "w-[300px] h-[90px] bg-white shadow-2xl mt-[20px] absolute p-5 rounded-xl"
              : "hidden"
          }
        >
          <form class="flex items-center space-x-6 mx-auto w-250px">
            <div class="shrink-0">
              <img
                class="h-16 w-16 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="Current profile photo"
              />
            </div>
            <label class="block">
              <span class="sr-only">Choose profile photo</span>
              <input
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Indruce;
