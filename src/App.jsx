import React, { useState } from "react";
import "./index.css";
import img from "./assets/image-equilibrium.jpg";
import eth from "./assets/icon-ethereum.svg";
import clock from "./assets/icon-clock.svg";
import avatar from "./assets/image-avatar.png";
import eye from "./assets/icon-view.svg";
const App = () => {
  const [bool, setBool] = useState(false);
  return (
    <div className="w-full h-screen  bg-[#0D192C] flex justify-center items-center">
      <div className="w-[350px] h-[596px] bg-[#15263f] rounded-xl p-5 flex flex-col items-center relative">
        <img alt="img" className="rounded-md z-0" src={img} />
        <span
          onMouseEnter={() => {
            setBool(true);
          }}
          className="absolute w-[302px] h-[302px]  rounded-md   duration-150"
        ></span>
        {bool && (
          <div 
          onMouseLeave={() => {
            setBool(false);
          }} className="absolute  hover:bg-[#00fff890] w-[309px] h-[309px] top-5 left-5 flex justify-center items-center transition-all duration-150 rounded-md">
            <img alt="img" className="transition-all duration-200" src={eye} />
          </div>
        )}
        <p className="text-white font-[outfit] font-semibold text-lg mt-4 w-full hover:text-[#00FFF8]">
          Equilibrium #3429
        </p>
        <p className="text-[#8BACD9] font-[outfit] font-light mt-2">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex w-full justify-between mt-4">
          <p className="text-[#00FFF8] font-[outfit] items-center font-semibold flex">
            <img alt="img" className="mr-2 h-5" src={eth} />
            0.041 ETH
          </p>
          <p className="text-[#8BACD9] flex items-center font-normal font-[outfit]">
            {" "}
            <img alt="img" className="mx-2 h-4 w-4" src={clock} />3 days left
          </p>
        </div>
        <hr className=" w-full border-spacing-1 border-[#2E405A] mt-4" />
        <div className="w-full flex items-center mt-3">
          <img
            alt="img"
            src={avatar}
            className="border-2 rounded-full border-[#ffffff] w-8 "
          />
          <p className="text-[#8BACD9] font-[outfit] font-normal ml-3">
            Creation of
          </p>{" "}
          <p className="text-white font-[outfit] cursor-pointer font-normal ml-2 hover:text-[#00FFF8]">
            Jules Wyvern
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;