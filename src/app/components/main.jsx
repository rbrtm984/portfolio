import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">{`Let's do it`}</p>
          <h1 className="py-4 text-gray-700">
            {`Hi, I'm`}
            <span className="text-[#22AAA1]"> Robert</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {`I'm a full stack web developer with a passion for creating beautiful, responsive, and functional web applications.
            When I'm not coding, you can find me reading, enjoying a walk, or hanging with my partner.
            I'd love to connect - feel free to reach out!`}
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
