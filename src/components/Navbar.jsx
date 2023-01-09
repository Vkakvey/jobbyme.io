import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BiCategory } from "react-icons/bi";
import { AiOutlineMail, AiOutlineEdit } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
const Navbar = () => {
  const invalidate = { email: "", password: "" };
  const [log, setLog] = useState(invalidate);
  const [error, setError] = useState({});
  const [submite, setSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLog({ ...log, [name]: value });
    console.log(log);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(log));
    setSubmit(true);
  };
  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && submite) {
      console.log(log);
    }
  }, [error]);
  const validation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email Req!";
    }
    if (!values.password) {
      errors.password = "Password Req!";
    }
    return errors;
  };
  const [category, setCategory] = useState(false);
  const [login, setLogin] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleClike = () => setMenu(!menu);

  return (
    <div>
      <div className=" max-w-[1600px] h-[15vh] bg-[#004d40] flex justify-between items-center">
        <div className="flex gap-5">
          <h1 className="text-3xl text-white ml-5">JOBYME</h1>
          <span className="flex items-center text-center p-2 rounded-[30px] text-[#d4e157] bg-[#afb42b8c] cursor-pointer active:bg-slate-500">
            <BiCategory onClick={() => setCategory(!category)} /> Catagory
          </span>
          <div
            onClick={handleClike}
            className="lg:hidden duration-300 ease-in-out text-5xl text-white ml-32 cursor-pointer"
          >
            {!menu ? <TiThMenu /> : <BiCategory />}
          </div>

          <div
            className={
              menu
                ? "absolute items-center top-[100px] grid w-full bg-black/80 h-[70vh]"
                : "hidden"
            }
          >
            <ul className="text-slate-400 text-5xl grid text-center gap-[50px] ml-20 mr-12 justify-center">
              <Link to="home" smooth={true} duration={500}>
                <li className="hover:text-white">
                  <a href="">Home</a>
                </li>
              </Link>
              <Link to="person" smooth={true} duration={500}>
                <li className="hover:text-white">
                  <a href="">Job</a>
                </li>
              </Link>
              <Link to="page" smooth={true} duration={500}>
                <li className="hover:text-white">
                  <a href="">Explore</a>
                </li>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <li className="hover:text-white">
                  <a href="">Page</a>
                </li>
              </Link>
            </ul>
          </div>
          <div
            className={
              category
                ? "w-[250px] p-3 h-[290px] bg-[#ffeb3b]  rounded-xl absolute border-2 left-4 top-[90px] border-black"
                : "hidden -translate-x-5  transition ease-in-out duration-300"
            }
          >
            <span className="flex items-center rounded-lg hover:border-2 hover:border-black hover:bg-slate-500 duration-300 bg-white w-full justify-center p-2 mx-auto h-[50px]">
              UI/UX Design
              <MdDesignServices className="text-[30px] ml-5 " />
            </span>
            <br />
            <span className="flex items-center rounded-lg hover:border-2 hover:border-black hover:bg-slate-500 duration-300 bg-white w-full justify-center p-2 mx-auto h-[50px]">
              Developer
              <BsCodeSlash className="text-[30px] ml-5 " />
            </span>
            <br />
            <span className="flex items-center rounded-lg hover:border-2 hover:border-black hover:bg-slate-500 duration-300 bg-white w-full justify-center p-2 mx-auto h-[50px]">
              Maketing
              <HiShoppingBag className="text-[30px] ml-5 " />
            </span>
            <br />
            <span className="flex items-center rounded-lg hover:border-2 hover:border-black hover:bg-slate-500 duration-300 bg-white w-full justify-center p-2 mx-auto h-[50px]">
              Editing
              <AiOutlineEdit className="text-[30px] ml-5 " />
            </span>
          </div>
          <ul className="text-slate-400  text-xl lg:flex gap-5 ml-20 hidden">
            <Link to="home" smooth={true} duration={500}>
              <li className="hover:text-white">
                <a href="">Home</a>
              </li>
            </Link>
            <Link to="person" smooth={true} duration={500}>
              <li className="hover:text-white">
                <a href="">Job</a>
              </li>
            </Link>
            <Link to="page" smooth={true} duration={500}>
              <li className="hover:text-white">
                <a href="">Explore</a>
              </li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <li className="hover:text-white">
                <a href="">Page</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <button
            onClick={() => setLogin(!login)}
            className="text-[#d4e157] mr-10 border-r-2 border-[#afb42b8c] p-2"
          >
            Login
          </button>
          <div className="absolute">
            <div
              className={
                login
                  ? "w-[300px] h-[330px] bg-[#ffeb3b] rounded-xl border-2 border-black absolute top-[30px] right-[-50px]"
                  : "hidden"
              }
            >
              <button
                onClick={() => setLogin(!login)}
                className="w-[25px] h-[25px] active:bg-slate-400 cursor-pointer active:cursor-wait bg-red-500 float-right mr-2 mt-2 border-2 border-black rounded-[100%]"
              >
                X
              </button>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 mt-[35px] p-4"
              >
                <AiOutlineMail className="text-[35px] " />
                <input
                  className="w-[170px] ml-[-70px] h-10 border-2 border-black rounded-lg text-black"
                  type="email"
                  placeholder="  example123@gmail.com"
                  name="email"
                  // value={invalidate.email}
                  onChange={handleChange}
                />
                <br />
                <p className="text-red-500 mt-5 ml-[-70px]">{error.email}</p>
                <RiLockPasswordLine className="text-[35px] mt-[50px]" />
                <input
                  className="w-[170px] mt-[50px] ml-[-70px] h-10 border-2 border-black rounded-lg text-black"
                  type="password"
                  placeholder="  Password"
                  name="password"
                  // value={invalidate.password}
                  onChange={handleChange}
                />
                <br />
                <p className="text-red-500 mt-5 ml-[-70px]">{error.password}</p>
                <button className="w-[150px] h-[30px] active:cursor-wait mt-4 border-2 border-black ml-[75px] rounded-lg text-center text-xl font-bold active:bg-slate-400">
                  Login
                </button>
              </form>
            </div>
          </div>
          <button className="px-5 py-2 bg-[#d4e157] rounded-[30px] mr-10">
            Hire Top Talets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
