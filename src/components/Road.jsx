import React from "react";
import { Link } from "react-router-dom";
import RoadMap from "../assets/RoadMap.svg";

const Road = () => {
  return (
    <div className="bg-blue text-white py-10">
      <div className="flex flex-col w-[97%] h-fit mx-auto max-w-[1430px]">
        <img className="w-full mx-auto " src={RoadMap} alt="road map" />
      </div>
      <div className="flex w-[97%] justify-between  h-fit mx-auto max-w-[1430px] mb-16 mt-20">
        <div className="w-[50%] bg-blue">
          <p className="mx-auto tracking-wider font-[500] text-[28px] w-[450px] text-center">
            HAVE YOU TRIED OUR AI you do not want to miss this
          </p>
        </div>
        <div className=" bg-blue w-[50%] flex gap-8 justify-center m-auto">
          <Link
            to="#"
            className="bg-blue px-4 py-3 font-bold rounded-lg"
          >
            Use our AI
          </Link>
          <Link
            to="#"
            className="text-blue bg-white px-4 py-3 font-bold rounded-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Road;
