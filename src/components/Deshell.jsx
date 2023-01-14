import React from "react";
import Content from "../common/content";
import TitleHeader from "../common/TitleHeader";
import LightButton from '../common/Button/LightButton'

import deshell from '../assets/deshell.png'

const Deshell = () => {
  return (
    <div className="max-w-[1400px] w-[92%] mx-auto my-56">
      <div className="flex flex-col justify-between laptop:flex-row">
        <div className="w-[90%] laptop:w-[50%]">
            <TitleHeader text="Let’s help you dehusk and deshell your"/>
            <Content text="You get the best value for the best prices and your buiness gets the boost it has always required" />
            <div className="mt-10" />
            <LightButton text="Make a booking today"/>
        </div>
        <div className="w-[90%] mt-20 laptop:mt-0 laptop:w-[50%]">
            <img src={deshell} className="mx-auto laptop:ml-auto h-[350px]" alt="deshell" />
        </div>
      </div>
    </div>
  );
};

export default Deshell;
