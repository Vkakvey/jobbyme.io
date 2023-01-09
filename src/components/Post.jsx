import React from "react";
import { BiUpArrowCircle } from "react-icons/bi";
import { Link } from "react-scroll";
const Post = () => {
  return (
    <div>
      <div className="w-[200px] h-[200px]">
        <Link to="home" smooth={true} duration={500}>
          <BiUpArrowCircle className="text-[50px]  fixed right-[-30px] hover:rotate-0 cursor-pointer rotate-45 hover:-translate-x-[30px] bg-indigo-500 duration-300 opacity-80 hover:opacity-100 hover:rounded-[100%] rounded-md lg:bottom-2 bottom-[450px]" />
        </Link>
      </div>
    </div>
  );
};

export default Post;
