import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">{`LET'S BUILD IT TOGETHER`}</p>
          <h1 className="py-4 text-gray-700">
            {`Hi, I'm`}
            <span className="text-[#22AAA1]"> Robert</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/robertcmayo/">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                data-testid="linkedin-icon"
              >
                <FaLinkedin />
              </div>
            </a>
            <a href="https://github.com/rbrtm984">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                data-testid="github-icon"
              >
                <FaGithub />
              </div>
            </a>
            <a href="mailto:rbrtm984@gmail.com">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                data-testid="mail-icon"
              >
                <AiOutlineMail />
              </div>
            </a>
            {/* <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              data-testid="person-lines-icon"
            >
              <BsFillPersonLinesFill />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;