import React from "react";
import Image from "next/image";
import shiplogImg from "../public/shipLogImg.png";

const shiplog = () => {
  return (
    <div className="w-full pt-[80px]">
      <div className=" relative w-screen h-[30vh] lg:h-[40vh]">

        <div className="top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
        {/* <Image
            alt=""
            fill
            style={{ 
              objectFit:"cover",
            }}
            src={shiplogImg}
          /> */}
          <div className="top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="py-2">Ship Log</h2>
            <h3>React JS / Tailwind / Firebase</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shiplog;
