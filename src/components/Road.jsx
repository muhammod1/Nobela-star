import React from "react";
import { Link } from "react-router-dom";
import RoadMap from "../assets/RoadMap.svg";

const Road = () => {
  return (
    <div className="bg-blue text-white py-10">
      <div className="flex flex-col w-[97%] h-fit mx-auto max-w-[1430px]">
        <p className="text-[18px] mobile:text-[24px] tablet:text-[30px] mb-8 font-[600] ">
          Roadmap
        </p>
        <img className="w-full mx-auto " src={RoadMap} alt="road map" />
      </div>
      <div className="flex flex-wrap w-[97%] gap-10 justify-between  h-fit mx-auto max-w-[1430px] mb-16 mt-20">
        <div className="mx-auto bg-blue">
          <p className="mx-auto tracking-wider font-[500] text-[20px] tablet:text-[26px] mobile:[90%] tablet:w-[450px] text-center">
            HAVE YOU TRIED OUR AI you do not want to miss this
          </p>
        </div>
        <div className=" bg-blue flex text-[12px] mobile:text-[14px] gap-2 tablet:text-[16px] tablet:gap-8 justify-between tablet:justify-center m-auto">
          <Link to="#" className="bg-blue px-4 py-3 font-bold rounded-lg">
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
