import React from "react";
import uniLogo from "../assets/uniLogo.svg";
import git from "../assets/git.svg";
import twitter from "../assets/twitter.svg";
import figma from "../assets/figma.svg";
import slack from "../assets/slack.svg";

const Footer = () => {
  return (
    <div className="max-w-[1400px] bg-light w-full px-4 mx-auto mt-[7rem] mb-12">
      <div className="w-full mx-auto">
      <div className="mt-6 flex pb-4 tablet:pb-8 border-[black] border-b-2 justify-between">
        <div className="">
          <a href="https://www.figma.com/file/tPc7DcOMG7jqED3Fwxy96w/AI-Learning?node-id=2%3A3&t=P6B9gBagfN0XAZqy-0" className=" font-[700]  text-left w-fit text-[10px] mobile:text-[14px] tablet:text-[16px] leading-5">
            Figma <p>Design</p>
          </a>
        </div>
        <div>
          <div className="relative bottom-2 flex gap-1.5 h-[50px]  text-[7.5px] tablet:text-[12px] font-semibold">
            <p className="mt-auto">UNIVERSITY OF</p>
            <img src={uniLogo} alt="" className=" relative tablet:bottom-0 bottom-0 w-[30px] mobile:w-[30px] h-[50px] mobile:h-[40px]" />
            <p className="mt-auto">ILORIN, KWARA.</p>
          </div>
        </div>

        <div>
          <a href="https://github.com/NOBELA-STAR/Nobela-star" className="font-[700] text-[10px] mobile:text-[14px] tablet:text-[16px] text-right leading-5">
            Github <p>Repository</p>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-10 tablet:mt-166">
        <div>
          <div className="mx-auto w-fit flex gap-2">
            <img className="tablet:h-[30px] h-[20px] w-[20px]  tablet:w-[40px]" src={git} alt="" />
            <img className="tablet:h-[30px] h-[20px] w-[20px] tablet:w-[40px]" src={twitter} alt="" />
            <img className="tablet:h-[30px] h-[20px] w-[20px] tablet:w-[40px]" src={figma} alt="" />
            <img className="tablet:h-[30px] h-[20px] w-[20px] tablet:w-[40px]" src={slack} alt="" />
          </div>
          <p className="text-[10px] tablet:text-[10px] mt-4 font-semibold text-center">© Team, Fuad & Muhammod. 2023. We love Unilorin</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
