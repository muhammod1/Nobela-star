import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import GreaterThan from "../assets/greaterThan.svg";
import Down from "../assets/Down.svg";
import DropdownMenu from "./DropdownMenu";
import MobileNav2 from "./MobileNav2";

const NavBarTh = ({ link, handleTabClick, activeTab, isOpenTab, setisCont, isCont}) => {
  const [isActive, setIsActive] = useState(false);  

  return (
    <div className="bg-[#FFFFFF]">
      <nav className="py-2 flex justify-between w-[97%] mx-auto max-w-[1430px]">
        <Link to="/">
          <img className=" h-[50px] mr-auto w-fit" src={logo} alt="logo" />
        </Link>
        <div className="hidden laptop:flex text-[14px] text-blue gap-5 items-center font-semibold">
          <NavLink to="/" className="py-3 px-5">
            Home
          </NavLink>
          <div 
          onClick={() => {
            setisCont(!isCont)
          }}
          className=" flex gap-2  hover:bg-bluep py-3 px-5">
        Contents
        <img src={GreaterThan} alt="" />
      </div>
          <div className="relative ">
            <div
              onClick={() => {
                setisCont(!isCont)
              }}
            className="flex gap-2 bg-bluep px-3 rounded-sm py-2">

            {activeTab === 1 && <p>Introduction</p>}
            {activeTab === 2 && <p>Application</p>}
            {activeTab === 3 && <p>Benefit</p>}
            {activeTab === 4 && <p>Challenges</p>}
            {activeTab === 5 && <p>Future</p>}
            {activeTab === 6 && <p>Oppotunity</p>}
             <img className="relative " src={Down} alt="" />
            </div>
            {isCont && <ul className="absolute w-[180px] bg-[#fff] py-2 px-3 rounded-md">
              <li className="cursor-pointer px-3 py-1 hover:bg-bluep w-full" onClick={() => handleTabClick(1)}>Introduction to AI</li>
              <li className="cursor-pointer px-3 py-1 hover:bg-bluep w-full" onClick={() => handleTabClick(2)}>Application of AI</li>
              <li className="cursor-pointer px-3 py-1 hover:bg-bluep w-full" onClick={() => handleTabClick(3)}>Benefit of AI</li>
              <li className="cursor-pointer px-3 py-1 hover:bg-bluep w-full" onClick={() => handleTabClick(4)}>Challenges of AI</li>
              <li className="cursor-pointer px-3 py-1 hover:bg-bluep w-full" onClick={() => handleTabClick(5)}>Future of AI</li>
              <li className="cursor-pointer px-3 py-1 hover:bg-bluep w-full" onClick={() => handleTabClick(6)}>Oppotunity of AI</li>
            </ul> }
          </div>
         
        </div>

        <div className=" hidden laptop:flex align-middle font-[500] text-[16px] text-grey">
          <div className="flex gap-6  my-auto">
            <NavLink
              to="/image"
              className="text-white py-2 px-5  rounded-md bg-[#18A0FB] mx-auto"
            >
              use our AI
            </NavLink>
          </div>
        </div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="my-auto block laptop:hidden "
        >
          <AiOutlineMenu className="w-[30px] h-[30px]" />
        </div>
        {isActive && (
          <>
            <div
              onClick={() => setIsActive(!isActive)}
              className="fixed right-0 z-50 bg-transparent shadow-2xl top-0 h-[100vh] w-[100%] transition ease-in-out delay-350"
            />
            <div className="fixed right-0 z-50 bg-blue shadow-2xl top-0 h-[100vh] w-[70%] transition ease-in-out delay-350">
              <MobileNav2 setIsActive={setIsActive} />
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBarTh;
