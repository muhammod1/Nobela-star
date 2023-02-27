import React from "react";
import uniLogo from "../assets/uniLogo.svg";
import git from "../assets/git.svg";
import twitter from "../assets/twitter.svg";
import figma from "../assets/figma.svg";
import slack from "../assets/slack.svg";

const Footer = () => {
  return (
    <div className="max-w-[1400px] w-full px-4 mx-auto mt-40 mb-16">
      <div className="w-[97%] mx-auto">
      <div className="mt-6 flex pb-8 border-[black] border-b-2 justify-between">
        <div>
          <div className=" font-[700] text-[18px] tablet:text-[24px] w-[100px] leading-7">
            Figma Design
          </div>
        </div>
        <div>
          <div className="relative bottom-2 flex gap-2 h-[70px] text-[14px] font-semibold">
            <p className="mt-auto">UNIVERSITY OF</p>
            <img src={uniLogo} alt="" className=" relative bottom-3 w-[50px] h-[100px]" />
            <p className="mt-auto">ILORIN, KWARA.</p>
          </div>
        </div>

        <div>
          <div className="font-[700] text-[18px] tablet:text-[24px] text-right w-[100px] leading-7">
            Github Repository
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div>
          <div className="mx-auto w-fit flex gap-2">
            <img className="h-[30px] w-[40px]" src={git} alt="" />
            <img className="h-[30px] w-[40px]" src={twitter} alt="" />
            <img className="h-[30px] w-[40px]" src={figma} alt="" />
            <img className="h-[30px] w-[40px]" src={slack} alt="" />
          </div>
          <p className="text-[14px] mt-4 font-semibold">© Team, Fuad & Muhammod. 2023. We love Unilorin</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
