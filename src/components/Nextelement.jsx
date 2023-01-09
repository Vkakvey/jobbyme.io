import React from "react";
import { useState } from "react";
import { FaShare, FaThList } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
const Nextelement = () => {
  const [unlike, setUnlike] = useState(false);
  const [like, setLike] = useState(false);
  const [list, setList] = useState(false);
  const [share, setShare] = useState(false);
  const [share1, setShare1] = useState(false);
  const [like1, setLike1] = useState(false);
  const [unlike1, setUnlike1] = useState(false);
  const [list1, setList1] = useState(false);
  const [share2, setShare2] = useState(false);
  const [like2, setLike2] = useState(false);
  const [unlike2, setunLike2] = useState(false);
  const [list2, setList2] = useState(false);
  const handleList2 = () => setList2(!like2);
  const handleUnlike2 = () => setunLike2(!unlike2);
  const handleLike2 = () => setLike2(!like2);
  const handleShare2 = () => setShare2(!share2);
  const handleList1 = () => setList1(!list1);
  const handleUnlike1 = () => setUnlike1(!unlike1);
  const handleLike1 = () => setLike1(!like1);
  const handleShare1 = () => setShare1(!share1);
  const handleClick = () => setUnlike(!unlike);
  const handleLike = () => setLike(!like);
  const handleList = () => setList(!list);
  const handleshare = () => setShare(!share);
  return (
    <div className="max-w=[1600px] w-full h-screen bg-white">
      <br />
      <div className="w-full h-screen bg-slate-200">
        <div className="w-full h-[300px] bg-gray-300 hover:bg-gray-500 flex">
          <iframe
            className="p-4 rounded-lg"
            width="500"
            height="300"
            src="https://www.youtube.com/embed/vwE1y0irfVE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="grid grid-cols-1 items-center  h-[200px] m-10">
            <h1 className="text-5xl text-black mt-[-20px]">Template PPT</h1>

            <h1 className="text-xl text-black/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius{" "}
              <br />
              tempore debitis maxime minus alias obcaecati doloremque incidunt{" "}
              <br />
              facere nemo minima eligendi enim nostrum officia dolor, sit,
              <br />
              deserunt est quibusdam in repudiandae impedit fugiat a culpa!
            </h1>

            <div className="text-3xl mt-4 flex gap-5">
              <div onClick={handleshare}>
                {share ? (
                  <FaShare className="cursor-pointer text-blue-500" />
                ) : (
                  <FaShare />
                )}
              </div>
              <div onClick={handleLike}>
                {like ? (
                  <AiFillLike className="cursor-pointer text-blue-500" />
                ) : (
                  <AiFillLike />
                )}
              </div>

              <div onClick={handleClick}>
                {unlike ? (
                  <AiFillDislike className="cursor-pointer text-blue-500" />
                ) : (
                  <AiFillDislike />
                )}
              </div>
              <div onClick={handleList}>
                {list ? (
                  <FcTodoList className="cursor-pointer text-4xl" />
                ) : (
                  <FaThList />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-gray-300 hover:bg-gray-500 flex">
          <iframe
            className="p-4 rounded-lg"
            width="500"
            height="300"
            src="https://www.youtube.com/embed/vwE1y0irfVE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="grid grid-cols-1 items-center  h-[200px] m-10">
            <h1 className="text-5xl text-black mt-[-20px]">Template PPT</h1>

            <h1 className="text-xl text-black/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius{" "}
              <br />
              tempore debitis maxime minus alias obcaecati doloremque incidunt{" "}
              <br />
              facere nemo minima eligendi enim nostrum officia dolor, sit,
              <br />
              deserunt est quibusdam in repudiandae impedit fugiat a culpa!
            </h1>

            <div className="text-3xl mt-4 flex gap-5">
              <div onClick={handleShare1}>
                {share1 ? (
                  <FaShare className="cursor-pointer text-blue-500" />
                ) : (
                  <FaShare />
                )}
              </div>
              <div onClick={handleLike1}>
                {like1 ? (
                  <AiFillLike className="cursor-pointer text-blue-500" />
                ) : (
                  <AiFillLike />
                )}
              </div>

              <div onClick={handleUnlike1}>
                {unlike1 ? (
                  <AiFillDislike className="cursor-pointer text-blue-500" />
                ) : (
                  <AiFillDislike />
                )}
              </div>
              <div onClick={handleList1}>
                {list1 ? (
                  <FcTodoList className="cursor-pointer text-4xl" />
                ) : (
                  <FaThList />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-gray-300 hover:bg-gray-500 flex">
          <iframe
            className="p-4 rounded-lg"
            width="500"
            height="300"
            src="https://www.youtube.com/embed/vwE1y0irfVE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="grid grid-cols-1 items-center  h-[200px] m-10">
            <h1 className="text-5xl text-black mt-[-20px]">Template PPT</h1>

            <h1 className="text-xl text-black/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius{" "}
              <br />
              tempore debitis maxime minus alias obcaecati doloremque incidunt{" "}
              <br />
              facere nemo minima eligendi enim nostrum officia dolor, sit,
              <br />
              deserunt est quibusdam in repudiandae impedit fugiat a culpa!
            </h1>

            <div className="text-3xl mt-4 flex gap-5">
              <div onClick={handleShare2}>
                {share2 ? (
                  <FaShare className="cursor-pointer text-blue-500" />
                ) : (
                  <FaShare />
                )}
              </div>
              <div onClick={handleLike2}>
                {like2 ? (
                  <AiFillLike className="cursor-pointer text-blue-500" />
                ) : (
                  <AiFillLike />
                )}
              </div>

              <div onClick={handleUnlike2}>
                {unlike2 ? (
                  <AiFillDislike className="cursor-pointer text-blue-500" />
                ) : (
                  <AiFillDislike />
                )}
              </div>
              <div onClick={handleList2}>
                {list2 ? (
                  <FcTodoList className="cursor-pointer text-4xl" />
                ) : (
                  <FaThList />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nextelement;
