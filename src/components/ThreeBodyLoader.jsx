import React from "react";
import "./ThreeBodyLoader.css"

const ThreeBodyLoader = () => {
  return (
    <div className="relative bg-[#1b1c21] inline-block w-[35px] h-[35px] animate-spin-slow">
      <div className="absolute w-[30%] h-full bottom-[5%] left-0 origin-[50%_85%] rotate-[60deg]">
        <div className="w-full pt-[100%] bg-[#7aa9a9] rounded-full absolute bottom-0 left-0 animate-wobble1 delay-[-0.3s]"></div>
      </div>
      <div className="absolute w-[30%] h-full bottom-[5%] right-0 origin-[50%_85%] -rotate-[60deg]">
        <div className="w-full pt-[100%] bg-[#7aa9a9] rounded-full absolute bottom-0 left-0 animate-wobble1 delay-[-0.15s]"></div>
      </div>
      <div className="absolute w-[30%] h-full -bottom-[5%] left-0 translate-x-[116.666%]">
        <div className="w-full pt-[100%] bg-[#7aa9a9] rounded-full absolute top-0 left-0 animate-wobble2"></div>
      </div>
    </div>
  );
};

export default ThreeBodyLoader;