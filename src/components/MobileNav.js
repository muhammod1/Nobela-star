import React from "react";
import { NavLink } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

import { NavMenu } from "../Data/NavData";

const MobileNav = ({ setIsActive }) => {
  return (
    <div>
      <ImCancelCircle
        onClick={() => setIsActive(false)}
        className="w-[25px] h-[25px] text-[#fff]  ml-auto mr-10 mt-3"
      />
      <div className="mt-3 flex flex-col">
      <a
          href="/"
          onClick={() => setIsActive(false)}
          className="block my-1 mx-4 pb-3 font-bold text-[16px] text-[#fff]"
        >
          Home
        </a>
        <a
          href="/?#content"
          onClick={() => setIsActive(false)}
          className="block my-1 mx-4 pb-3 font-bold text-[16px] text-[#fff]"
        >
          Content
        </a>
        <a
          href="/#about"
          onClick={() => setIsActive(false)}
          className="block my-1 mx-4 pb-3 font-bold text-[16px] text-[#fff]"
        >
          About
        </a>
        <a
          href="/#ai_app"
          onClick={() => setIsActive(false)}
          className="block my-1 mx-4 pb-3 font-bold text-[16px] text-[#fff]"
        >
          use our AI
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
