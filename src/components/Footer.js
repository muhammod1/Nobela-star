import React from "react";
import uniLogo from "../assets/uniLogo.svg";
import git from "../assets/git.svg";
import twitter from "../assets/twitter.svg";
import figma from "../assets/figma.svg";
import { SiDiscord } from "react-icons/si";
import slack from "../assets/slack.svg";

const Footer = () => {
  return (
    <div className="max-w-[1400px] w-full px-4 mx-auto pt-2 tab:pt-[5rem] pb-4 tab:pb-12">
      <div className="w-full mx-auto">
        <div className="mt-6 flex pb-1 tab:pb-4 tablet:pb-8 border-[black] border-b-[1px] tab:border-b-2 justify-between">
          <div className="">
            <a
              href="https://www.figma.com/file/tPc7DcOMG7jqED3Fwxy96w/AI-Learning?node-id=2%3A3&t=P6B9gBagfN0XAZqy-0"
              className=" font-[700]  text-left w-fit text-[10px] mobile:text-[12px] tablet:text-[16px] leading-5"
            >
              Figma <p>Design</p>
            </a>
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
            <a
              href="https://github.com/NOBELA-STAR/Nobela-star"
              className="font-[700] text-[10px] mobile:text-[12px] tablet:text-[16px] flex flex-col justify-end leading-5"
            >
              <span className="w-fit ml-auto">Github</span>{" "}
              <span>Repository</span>
            </a>
          </div>
        </div>
        <div className="mx-auto flex justify-center mt-4 tab:mt-10 ">
          <div className="mx-auto">
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

export default Footer;
