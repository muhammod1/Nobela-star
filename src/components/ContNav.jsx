import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import BlueButton from "../common/Button/BlueButton";
import leftArrow from "../assets/leftArrow.svg";
import MobileNav2 from "./MobileNav2";
import MobileNav from "./MobileNav";


const ContNav = ({ link, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="bg-[#FFFFFF] p-2 flex justify-between w-[97%] mx-auto max-w-[1430px]">
      <Link to="/">
        <img className="w-[44px] h-[44px] m-auto" src={leftArrow} alt=".." />
      </Link>

      <Link to="/">
        <img className=" h-[50px] mr-auto w-fit" src={logo} alt="logo" />
      </Link>
      <div className=" flex align-middle font-[500] text-[16px]">
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
              className="fixed z-50 bg-[#334243] opacity-80  left-0  top-0 h-[100vh] cursor-pointer w-[100vw] transition ease-in-out delay-350"
            />
            <div className="fixed right-0 z-50 bg-nav shadow-2xl top-0 h-[380px] w-[170px] transition ease-in-out delay-350">
              <MobileNav setIsActive={setIsActive} />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default ContNav;
