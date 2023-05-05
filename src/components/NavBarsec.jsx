import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import serach from "../assets/serach.svg";
import MobileNav from "./MobileNav";

const NavBarsec = ({ link }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="py-2 flex justify-between w-[97%] mx-auto max-w-[1430px]">
      <Link to="/">
        <img className=" h-[50px] mr-auto w-fit" src={logo} alt="logo" />
      </Link>
      <div className="hidden laptop:flex text-[14px] text-blue gap-5 items-center font-semibold">
        <NavLink to="/" className="py-3 px-5">
          Home
        </NavLink>
        <a href="#content" className="py-3 px-5">
          Content
        </a>
        <a href="#about" className="py-3 px-5">
          About
        </a>
      </div>
      

      <div className=" hidden laptop:flex align-middle font-[500] text-[16px] text-grey">
        <div className="flex gap-6  my-auto">
          <a
            href="#ai_app"
            className="text-white py-2 px-5  rounded-md bg-[#18A0FB] mx-auto"
          >
            use our AI
          </a>
        </div>
      </div>

      <div className="my-auto h-fit bg-blue p-3 rounded-full laptop:hidden">
        <BsSearch className="my-auto text-[#fff]" />
      </div>

      <div
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer my-auto block laptop:hidden "
      >
        <AiOutlineMenu className="w-[30px] h-[30px]" />
      </div>
      {isActive && (
        <>
          <div
            onClick={() => setIsActive(!isActive)}
            className="fixed z-50 bg-[#334243] opacity-80 left-0  top-0 h-[100vh] cursor-pointer w-[100vw] transition ease-in-out delay-350"
          />
          
          <div className="fixed right-0 z-50 bg-nav shadow-2xl top-0 h-[380px] w-[170px]  transition ease-in-out delay-350">
            <MobileNav setIsActive={setIsActive} />
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBarsec;
