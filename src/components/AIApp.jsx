import React from "react";
import chatgbt from "../assets/chatgbt.svg";
import VtT from "../assets/VtT.svg";
import picR from "../assets/picR.svg";
import { Link } from "react-router-dom";

const AIApp = () => {
  return (
    <div className="bg-blue">
      <div className="flex   text-white w-[97%] h-fit mx-auto max-w-[1430px]">
        <div className="flex flex-col px-4 py-12 w-[50%] border-r-white border-l-0 border-t-0 border-b-0 border-4">
          <p className="font-[600] text-[32px] text-center">
            You’re in good company
          </p>
          <p className="font-[500] mx-auto mt-2 mb-5 text-[20px]  w-[350px] text-center ">
            We have created some AI software for you to checkout
          </p>
          <div className="flex flex-wrap gap-8 mt-6">
            <Link to="/image" className="flex mx-auto flex-col">
              <img className="w-[180px] h-[180px]" src={picR} alt="pic" />
              <p className="text-center text-[16px] font-[500] mt-3">
                Picture Generator AI
              </p>
            </Link>
            <Link to="/speechRec" className="flex flex-col-reverse mx-auto">
              <img className="w-[180px] h-[180px]" src={VtT} alt="VtT" />
              <p className="text-center text-[16px] font-[500] mb-3">
                Picture Generator AI
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-4 py-12 w-[50%] border-l-white border-r-0 border-t-0 border-b-0 border-4">
          <div className="flex items-center gap-4 m-auto ">
            <p className="text-[18px] font-[500]">Chatgbt</p>
            <Link to="" className="flex mx-auto flex-col">
              <img className="w-[250px] h-[250px]" src={chatgbt} alt="chatgbt" />
              <p className="text-center text-[22px] font-[600] mt-3">
                Popular AI software
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIApp;
