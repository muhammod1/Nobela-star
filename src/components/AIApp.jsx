import React from "react";
import chatgbt from "../assets/chatgbt.svg";
import VtT from "../assets/VtT.svg";
import picR from "../assets/picR.svg";
import { Link } from "react-router-dom";

const AIApp = () => {
  return (
    <div className="bg-blue" id="ai_app"> 
      <div className="flex flex-col laptop_l:flex-row text-white w-[97%] h-fit mx-auto max-w-[1430px]">
        <div className="flex mx-auto flex-col px-4 py-12  w-[90%] laptop_l:w-[50%] border-b-white border-b-6 border-r-0 laptop_l:border-r-white border-l-0 border-t-0 laptop_l:border-b-0 border-4">
          <p className="font-[600] text-[24px] tablet:text-[32px] text-center">
            You’re in good company
          </p>
          <p className="font-[500] mx-auto mt-2 tablet:mb-5 text-[16px] tablet:text-[20px] w-full tablet:w-[350px] text-center ">
            We have created some AI software for you to checkout
          </p>
          <div className="flex  laptop:gap-16 laptop_l:gap-8 mt-4 tablet:mt-6 w-fit mx-auto">
            <Link to="/image" className="flex laptop_l:mx-auto flex-col">
              <img className="w-[80%] mx-auto laptop:w-[180px]  h-[180px]" src={picR} alt="pic" />
              <p className="text-center text-[14px] laptop:text-[16px] font-[500] -mt-5 tablet:mt-3">
                Picture Generator AI
              </p>
            </Link>
            <Link to="/speechRec" className="flex flex-col tablet:flex-col-reverse laptop_l:mx-auto">
              <img className="w-[80%] mx-auto laptop:w-[180px]  h-[180px]" src={VtT} alt="VtT" />
              <p className="text-center text-[14px] laptop:text-[16px] font-[500] -mt-5 tablet:mt-0 mb-3">
              Voice to text AI
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-4 py-2 tablet:py-12 w-full laptop_l:w-[50%] border-l-0  laptop_l:border-l-white border-r-0 border-t-0 border-b-0 border-4">
          <div className="flex items-center gap-4 m-auto ">
            <div>
              <p className="text-[22px] text-center laptop_l:text-[18px] font-[600]">Chatgbt</p>
              <p className="laptop_l:hidden text-center text-[16px] font-[500] mt-2">
                  Popular AI software
                </p>
            </div>
            <a href="https://chat.openai.com/" target="_blank" rel="noreferrer" className="flex mx-auto flex-col">
              <img className="w-[250px] h-[250px]" src={chatgbt} alt="chatgbt" />
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
