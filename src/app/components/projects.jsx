import Image from "next/image";
import React from "react";
// import propertyImg from '.'

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="test-xl tracking-widest uppercase text-[#136F63]">
          Projects
        </p>
        <h2 className="py-4">{`What I've Built`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#136F63] to-[#4CE0D2]">
            <Image src={""} alt="/" /> {/* Add image for Kaleidoscope */}
          </div>
          <div>Kaleidoscope</div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#136F63] to-[#4CE0D2]">
            <Image src={""} alt="/" /> {/* Add image for Ship Log */}
          </div>
          <div>Ship Log</div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#136F63] to-[#4CE0D2]">
            <Image src={""} alt="/" /> {/* Add image for Easy Court */}
          </div>
          <div>Easy Court</div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#136F63] to-[#4CE0D2]">
            <Image src={""} alt="/" /> {/* Add image for Social Hour */}
          </div>
          <div>Social Hour</div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#136F63] to-[#4CE0D2]">
            <Image src="" alt="/" /> {/* Add image for Kart and Kode */}
          </div>
          <div>Kart and Kode</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
