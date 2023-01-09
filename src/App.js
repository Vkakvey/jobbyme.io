import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catagory from "./components/Catagory";
import Indruce from "./Indruce";
import Work from "./components/Work";
import Perosn from "./components/Perosn";
import File from "./components/File";
import Upload from "./components/Upload";
import { FaSun } from "react-icons/fa";
import { useState } from "react";
import { MdNightlight } from "react-icons/md";
import Contact from "./components/Contact";
import Post from "./components/Post";
function App() {
  const [dark, setDark] = useState(false);
  const handleDark = () => setDark(!dark);

  return (
    <div className={dark ? "bg-black  w-[1600px]" : "bg-white"}>
      <div className="hidden lg:block" onClick={() => handleDark(!dark)}>
        {dark ? (
          <FaSun className="absolute  right-[280px] mt-[40px] text-4xl" />
        ) : (
          <MdNightlight className="absolute right-[280px] mt-[40px] mr-4 text-4xl" />
        )}
      </div>

      <Navbar />
      <Hero />
      <Catagory />
      <Indruce />
      <Work />
      <Perosn />
      <File />
      <Upload />
      <Contact />
      <Post />
    </div>
  );
}

export default App;
