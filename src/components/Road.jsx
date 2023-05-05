import React from "react";
import { Link } from "react-router-dom";
import RoadMap from "../assets/RoadMap.svg";

const Road = () => {
  return (
    <div className="bg-blue text-white py-5 tab:py-10">
      <div className="flex flex-col w-[97%] h-fit mx-auto max-w-[1430px]">
        <p className="text-[16px] mobile:text-[22px] tablet:text-[26px] mb-3 tab:mb-8 font-[600] ">
          Roadmap
        </p>
        <img className="w-full mx-auto px-2" src={RoadMap} alt="road map" />
      </div>
      <div className="flex flex-wrap w-[97%] gap-4 tab:gap-10 justify-between  h-fit mx-auto max-w-[1430px] mb-4 tab:mb-16 mt-5 tab:mt-20">
        <div className="mx-auto bg-blue">
          <p className="mx-auto tracking-wider font-[500] text-[14px] tablet:text-[20px] tab:text-[26px]  mobile:w-[100%] tablet:w-[450px] text-center">
            HAVE YOU TRIED OUR AI <div>you do not want to miss this</div>
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
