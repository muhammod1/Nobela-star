import React from "react";
import uniLogo from "../assets/uniLogo.svg";
import git from "../assets/git.svg";
import twitter from "../assets/twitter.svg";
import { SiDiscord } from "react-icons/si";
import figma from "../assets/figma.svg";
import slack from "../assets/slack.svg";

const FooterSec = () => {
  return (
    <div className="max-w-[1400px] w-full bg-[#262626] px-4 mx-auto mt-20 pb-10">
      <div className="w-full mx-auto">
        <div className="mt-6 flex pb-4 tablet:pb-8 border-[black] border-b-2 justify-between">
          <div className="">
            <div className=" font-[700]  text-left w-fit text-[10px] mobile:text-[14px] tablet:text-[16px] leading-5">
              Figma <p>Design</p>
            </div>
          </div>
          <div>
            <div className="relative bottom-2 flex gap-1.5 h-[50px]  text-[7.5px] tablet:text-[12px] font-semibold">
              <p className="mt-auto">UNIVERSITY OF</p>
              <img
                src={uniLogo}
                alt=""
                className=" relative tablet:bottom-0 bottom-0 w-[30px] mobile:w-[30px] h-[50px] mobile:h-[40px]"
              />
              <p className="mt-auto">ILORIN, KWARA.</p>
            </div>
          </div>

          <div>
            <div className="font-[700] text-[10px] mobile:text-[14px] tablet:text-[16px] text-right leading-5">
              Github <p>Repository</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 tablet:mt-166">
          <div>
          <div className="mx-auto w-fit flex gap-2 ">
              <div
                onClick={() => {
                  window.open("https://github.com/muhammod1/Nobela-star");
                }}
                className="w-[15px] h-[15px] cursor-pointer"
              >
                <img className="w-full h-full" src={git} alt="" />
              </div>

              <div
                onClick={() => {
                  window.open("https://twitter.com/fuadUX");
                }}
                className="w-[15px] h-[15px] cursor-pointer"
              >
                <img className="w-full h-full" src={twitter} alt="" />
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://www.figma.com/file/tPc7DcOMG7jqED3Fwxy96w/Learning-AI?type=design&node-id=140-4048&t=OAEFoQOEqtBzN6Mo-0"
                  );
                }}
                className="w-[15px] h-[15px] cursor-pointer"
              >
                <img className="w-full h-full" src={figma} alt="" />
              </div>
              <div
                onClick={() => {
                  window.open("http://discordapp.com/users/978930656287539200");
                }}
                className="w-[15px] h-[15px] cursor-pointer"
              >
                <SiDiscord />
              </div>
            </div>
            <p className="text-[10px] tablet:text-[10px] mt-4 font-semibold text-center">
              © Team, Fuad & Muhammod. 2023. We love Unilorin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSec;
