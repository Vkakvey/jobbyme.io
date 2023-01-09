import React from "react";
import { Link } from "react-router-dom";
const Information = () => {
  return (
    <div className="max-[1600px] lg:h-screen h-[130vh] bg-white" name="page">
      <br />
      <br />
      <div className="mt-[1300px] lg:mt-5">
        <div className="w-full h-[20vh] flex justify-between p-7">
          <div>
            <h1 className="text-5xl font-bold uppercase ">JobyMe Guides</h1>
          </div>
          <div>
            <Link to="/sigin">
              <button className="bg-teal-400 text-black font-semibold px-4 mr-12 rounded-[30px] py-2">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-9 p-5 lg:ml-10 mr-[25px] h-[70vh]">
          <div className="w-[400px] cursor-pointer h-[450px] ">
            <img
              className="w-[100%] h-[60%] object-cover p-2 rounded-[15px]"
              src="https://i.pinimg.com/474x/aa/e2/5d/aae25d1289b8ba13a0c17dbb2ee372a3.jpg"
              alt=""
            />
            <Link to="/sigin">
              <p className="text-gray-400 text-md p-2 cursor-pointer hover:text-black">
                Developer, Code
              </p>
            </Link>

            <h1 className="text-2xl font-bold text-black p-2">
              Print, publising qui visual <br />
              layout mockups.
            </h1>
            <p className="font-bold text-xl p-2">
              <span className="font-thin text-gray-400">By</span> Rashed Kabir
            </p>
          </div>
          <div className="w-[400px] cursor-pointer h-[450px] ">
            <img
              className="w-[100%] h-[60%] object-cover p-2 rounded-[15px]"
              src="https://i.pinimg.com/564x/f6/62/af/f662af3b9a1cd3cf54d5ce49295bb25c.jpg"
              alt=""
            />
            <p className="text-gray-400 text-md p-2 cursor-pointer hover:text-black">
              Solution, Work
            </p>
            <h1 className="text-2xl font-bold text-black p-2">
              Make more productive work <br />
              flow in few steps.
            </h1>
            <p className="font-bold text-xl p-2">
              <span className="font-thin text-gray-400">By</span> Juile Margot
            </p>
          </div>
          <div className="w-[400px] cursor-pointer h-[450px] ">
            <img
              className="w-[100%] h-[60%] object-cover p-2 rounded-[15px]"
              src="https://i.pinimg.com/564x/f3/2b/c7/f32bc7c463fb3a375b68a6f4478dfe6a.jpg"
              alt=""
            />
            <p className="text-gray-400 text-md p-2 cursor-pointer hover:text-black">
              Design, Art
            </p>
            <h1 className="text-2xl font-bold text-black p-2">
              Designer's checklist for every <br />
              UX/UI projeck
            </h1>
            <p className="font-bold text-xl p-2">
              <span className="font-thin text-gray-400">By</span> Jonhy Deep
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
