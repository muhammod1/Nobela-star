import React from "react";
import chatgbt from "../assets/chatgbt.svg";
import VtT from "../assets/VtT.svg";
import picR from "../assets/picR.svg";
import { Link } from "react-router-dom";

const AIApp = () => {
  return (
    <div className="bg-blue" id="ai_app">
      <div className="flex flex-col justify-between  laptop_l:flex-row text-white w-[100%] h-fit mx-auto max-w-[1530px]">
        <div className="flex mx-auto flex-col px- py-12  w-full laptop_l:w-[50%] border-b-white border-b-6 border-r-0 laptop_l:border-r-white border-l-0 border-t-0 laptop_l:border-b-0 border-4">
          <p className="font-[600] text-[24px] tablet:text-[32px] text-center">
            You’re in good company
          </p>
          <p className="font-[500] mx-auto mt-2 tablet:mb-5 text-[16px] tablet:text-[20px] w-full tablet:w-[350px] text-center ">
            We have created some AI software for you to checkout
          </p>
          <div className="flex justify-between laptop:gap-16 laptop_l:gap-8 mt-4 tablet:mt-6 w-full">
            <Link to="/image" className="flex flex-col">
              <img
                className="w-[80%] mx-auto laptop:w-[350px]  h-[300px]"
                src={picR}
                alt="pic"
              />
              <p className="text-center text-[14px] laptop:text-[16px] font-[500] -mt-5 tablet:mt-3">
                Picture Generator AI
              </p>
            </Link>
            <Link
              to="/speechRec"
              className="flex flex-col tablet:flex-col-reverse "
            >
              <img
                className="w-[80%] mx-auto laptop:w-[350px]  h-[300px]"
                src={VtT}
                alt="VtT"
              />
              <p className="text-center text-[14px] laptop:text-[16px] font-[500] -mt-5 tablet:mt-0 mb-3">
                Voice to text AI
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-[#F6F6F6] w-3 mx-3" />
        <div className="flex flex-col px-4 py-2 tablet:py-12 w-full laptop_l:w-[50%] border-l-0  laptop_l:border-l-white border-r-0 border-t-0 border-b-0 border-4">
          <div className="flex justify-center w-fit mx-auto laptop_l:w-full items-center gap-4 my-auto ">
            <div className="">
              <p className="text-[20px] ml-5 text-center mobile:text-[22px] laptop_l:text-[24px] font-[600]">
                Chatgbt
              </p>
              <p className="laptop_l:hidden text-center text-[16px] font-[500] mt-2">
                Popular AI software
              </p>
            </div>
            <a
              href="https://chat.openai.com/"
              target="_blank"
              rel="noreferrer"
              className="flex ml-auto flex-col"
            >
              <img
                className="w-[450px] h-[450px]"
                src={chatgbt}
                alt="chatgbt"
              />
              <p className="hidden laptop_l:block text-center text-[22px] font-[600] mt-3">
                Popular AI software
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIApp;
