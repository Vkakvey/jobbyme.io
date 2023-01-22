import React, { useState } from "react";
import { Link } from "react-scroll";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

const Person = () => {
  const [next, setNext] = useState(false);
  return (
    <div className="max-w-[1600px] h-[90vh]" name="person">
      <div className="w-full h-[30vh]  flex items-center justify-between p-7">
        <h1 className="lg:text-5xl md:text-xl text-lg font-bold">
          Find the best talented <br />
          expert in jobyme
        </h1>
        <div className="flex">
          <ImArrowLeft2
            onClick={() => setNext(!next)}
            className="mr-[30px] hover:scale-125 duration-300 text-3xl w-[40px] h-[60px] hover:bg-green-500  rounded-full"
          />
          <ImArrowRight2
            onClick={() => setNext(!next)}
            className="text-3xl w-[50px] h-[60px] hover:bg-green-500 duration-300 bg-teal-300 rounded-full"
          />
        </div>
      </div>

      <div className="items-center grid  w-full h-[60vh] ">
        <div className="w-[90%] h-[90%] rounded-2xl grid lg:grid-cols-4 grid-cols-1 items-center lg:ml-[100px] ml-[60px] justify-center gap-4 mx-auto">
          <div className="w-[300px] h-[95%] bg-white rounded-[25px] border border-black">
            <img
              className="w-full p-2 h-[60%] object-cover rounded-[25px]"
              src="https://i.pinimg.com/736x/14/ea/83/14ea839c03c3260eb4191d1d745a9827.jpg"
              alt=""
            />
            <div className="p-2">
              <h1 className="text-xl text-center font-bold text-black tracking-wide">
                Meddy Olen
              </h1>
              <p className="text-center mt-2 text-gray-700">Data Analyse</p>
              <button className="px-4 py-2 mx-auto flex mt-6 bg-green-600 text-white rounded-lg">
                Read more..
              </button>
            </div>
          </div>
          <div className="w-[300px] h-[95%] bg-white rounded-[25px] border border-black">
            <img
              className="w-full p-2 h-[60%] object-cover rounded-[25px]"
              src="https://i.pinimg.com/736x/63/dd/c4/63ddc4193a7299f9c01a1e4f3c7312c1.jpg"
              alt=""
            />
            <div className="p-2">
              <h1 className="text-xl text-center font-bold text-black tracking-wide">
                Jackie Dane
              </h1>
              <p className="text-center mt-2 text-gray-700">UX/UI Designer</p>
              <button className="px-4 py-2 mx-auto flex mt-6 bg-green-600 text-white rounded-lg">
                Read more..
              </button>
            </div>
          </div>
          <div className="w-[300px] h-[95%] bg-white rounded-[25px] border border-black">
            <img
              className="w-full p-2 h-[60%] object-cover rounded-[25px]"
              src="https://i.pinimg.com/474x/1d/69/19/1d6919868fbcfc6291f8ccba63416449.jpg"
              alt=""
            />
            <div className="p-2">
              <h1 className="text-xl text-center font-bold text-black tracking-wide">
                Pill Jonh
              </h1>
              <p className="text-center mt-2 text-gray-700">
                Graphice Designer
              </p>
              <button className="px-4 py-2 mx-auto flex mt-6 bg-green-600 text-white rounded-lg">
                Read more..
              </button>
            </div>
          </div>
          <div className="w-[300px] h-[95%] bg-white rounded-[25px] border border-black">
            <img
              className="w-full p-2 h-[60%] object-cover rounded-[25px]"
              src="https://i.pinimg.com/736x/a5/30/bc/a530bc62982f18f4c841e5c0731742f1.jpg"
              alt=""
            />
            <div className="p-2">
              <h1 className="text-xl text-center font-bold text-black tracking-wide">
                Jonh widck
              </h1>
              <p className="text-center mt-2 text-gray-700">Web Designer</p>
              <button className="px-4 py-2 mx-auto flex mt-6 bg-green-600 text-white rounded-lg">
                Read more..
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={
          next
            ? "items-center flex w-full h-[60vh] lg:ml-1 ml-[40px] absolute mt-[-432px]"
            : "hidden duration-300"
        }
      >
        <div className="w-[90%] h-[90%] rounded-2xl grid lg:grid-cols-4 grid-cols-1 items-center justify-center gap-4 mx-auto">
          <div className="w-[300px] h-[95%] bg-white rounded-[25px] border border-black">
            <img
              className="w-full p-2 h-[60%] object-cover rounded-[25px]"
              src="https://i.pinimg.com/474x/20/94/3a/20943a47b7a718b4d6d828f58b563fe9.jpg"
              alt=""
            />
            <div className="p-2">
              <h1 className="text-xl text-center font-bold text-black tracking-wide">
                Danny Paul
              </h1>
              <p className="text-center mt-2 text-gray-700">Attchitecher</p>
              <button className="px-4 py-2 mx-auto flex mt-6 bg-green-600 text-white rounded-lg">
                Read more..
              </button>
            </div>
          </div>
          <div className="w-[300px] h-[95%] bg-white rounded-[25px] border border-black">
            <img
              className="w-full p-2 h-[60%] object-cover rounded-[25px]"
              src="https://i.pinimg.com/474x/3d/1e/2b/3d1e2bd7311fb595352c07efc6e9a209.jpg"
              alt=""
            />
            <div className="p-2">
              <h1 className="text-xl text-center font-bold text-black tracking-wide">
                Mile Moralise
              </h1>
              <p className="text-center mt-2 text-gray-700"> Content Creator</p>
              <button className="px-4 py-2 mx-auto flex mt-6 bg-green-600 text-white rounded-lg">
                Read more..
              </button>
            </div>
          </div>
          <div className="w-[300px] h-[95%] bg-white rounded-[25px] border border-black">
            <img
              className="w-full p-2 h-[60%] object-cover rounded-[25px]"
              src="https://i.pinimg.com/564x/e7/47/5b/e7475be21a13dc459f6960b95b2b5acc.jpg"
              alt=""
            />
            <div className="p-2">
              <h1 className="text-xl text-center font-bold text-black tracking-wide">
                Steve WenWu
              </h1>
              <p className="text-center mt-2 text-gray-700">Video Editor</p>
              <button className="px-4 py-2 mx-auto flex mt-6 bg-green-600 text-white rounded-lg">
                Read more..
              </button>
            </div>
          </div>
          <div className="w-[300px] h-[95%] bg-white rounded-[25px] border border-black">
            <img
              className="w-full p-2 h-[60%] object-cover rounded-[25px]"
              src="https://i.pinimg.com/474x/dd/2f/a2/dd2fa227dab4fc57589534a7b0f63989.jpg"
              alt=""
            />
            <div className="p-2">
              <h1 className="text-xl text-center font-bold text-black tracking-wide">
                Micky Ohara
              </h1>
              <p className="text-center mt-2 text-gray-700">
                Software Engineer
              </p>
              <button className="px-4 py-2 mx-auto flex mt-6 bg-green-600 text-white rounded-lg">
                Read more..
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Person;
