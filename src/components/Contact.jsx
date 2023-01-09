import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1600px]  h-screen" name="contact">
      <div className="max-w-[80%] mt-36 mx-auto  h-[65%] rounded-lg border-2 border-black bg-slate-300">
        <h1 className="text-4xl text-center p-7 font-bold">Contact Use</h1>
        <div className="w-[80%] h-[30vh] flex   mx-auto">
          <div className="w-[200px] h-[300px]">
            <p className="font-bold text-md lg:text-3xl ml-2">Products</p>
            <br />
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Take the tour
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Live Chat
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Seft-Service
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Mobile
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Collabration
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Reviews
            </p>
          </div>
          <div className="w-[200px] h-[300px]">
            <p className="font-bold text-md lg:text-3xl ml-2">Link</p>
            <br />
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Pricing
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">About</p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Careers
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Mobile
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">Blog</p>
          </div>
          <div className="w-[200px] h-[300px]">
            <p className="font-bold text-md lg:text-3xl ml-2">Legal</p>
            <br />
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Terms of use
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Terms & condition
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Privacy
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Mobile
            </p>
            <p className="text-gray-500 tracking-wider lg:text-xl p-2">
              Cookie policy
            </p>
          </div>
          <div className="w-[370px] absolute right-[5px] mt-[280px] h-[300px] lg:hidden block">
            <p className="tracking-wider text-md text-black ml-3 p-2">
              Join & get important new regularly
            </p>
            <input
              className="w-[200px] ml-5 h-[45px] text-black rounded-lg"
              type="email"
              placeholder="   Enter Your Email"
            />
            <button className="h-[45px] ml-2 w-[70px] rounded-lg bg-black text-white">
              Send
            </button>
          </div>
          <div className="w-[370px] h-[300px] hidden lg:block">
            <p className="font-bold text-3xl ml-2">Newsletert</p>
            <br />
            <p className="text-gray-500 tracking-wider text-xl p-2">
              Join & get important new regularly
            </p>
            <input
              className="w-[250px] h-[45px] text-black rounded-lg"
              type="email"
              placeholder="   Enter Your Email"
            />
            <button className="h-[45px] ml-5 w-[70px] rounded-lg bg-black text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
