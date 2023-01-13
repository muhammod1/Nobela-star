import React from "react";
import Content from "../common/content";
import TitleHeader from "../common/TitleHeader";

import deshell from '../assets/deshell.png'

const Deshell = () => {
  return (
    <div className="max-[1400px] w-[90%] mx-auto">
      <div className="flex flex-col laptop:flex-row">
        <div className="w-[50%]">
            <TitleHeader text="Let’s help you dehusk and deshell your"/>
            <Content text="You get the best value for the best prices and your buiness gets the boost it has always required" />
        </div>
        <div className="w-[50%] ">
            <img src={deshell} className="h-[350px]" alt="deshell" />
        </div>
      </div>
    </div>
  );
};

export default Deshell;
