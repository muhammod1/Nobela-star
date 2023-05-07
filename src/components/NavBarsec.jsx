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
      <Link to="/" className=" w-fit tablet laptop:w-[30%] laptop_l:w-[40%]">
        <img className=" h-[50px] mr-auto w-fit" src={logo} alt="logo" />
      </Link>
      <div className="w-fit tablet_l:w-[70%] laptop_l:w-[60%] hidden laptop:flex justify-between text-[14px] text-blue gap-5 items-center font-semibold">
        <div>
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
        <button
          className="w-[200px] my-auto h-fit gap-10 bg-blue px-5 py-1 rounded-md hidden laptop:flex"
          onClick={() => {
            window.open("https://www.google.com");
          }}
        >
          <BsSearch className="my-auto text-[#fff] w-[15px] h-[15px] " />
          <p className="text-[#fff] ">Search</p>
        </button>
      </div>
      </div>

      {/* <div className=" hidden laptop:flex align-middle font-[500] text-[16px] text-grey">
        <button
          className="w-[200px] my-auto h-fit gap-10 bg-blue px-5 py-1 rounded-md hidden laptop:flex"
          onClick={() => {
            window.open("https://www.google.com");
          }}
        >
          <BsSearch className="my-auto text-[#fff] w-[15px] h-[15px] " />
          <p className="text-[#fff] ">Search</p>
        </button>
      </div> */}

      <button
        className="my-auto h-fit bg-blue hover:bg-bluep p-3 rounded-full laptop:hidden"
        onClick={() => {
          window.open("https://www.google.com");
        }}
      >
        <BsSearch className="my-auto text-[#fff] w-[25px] h-[25px] " />
      </button>

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
