import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const items = [
    {
      item: "Introduction",
      link: "/introduction",
    },
    {
      item: "Application",
      link: "/application",
    },
    {
      item: "Benefit",
      link: "/benefit",
    },
    {
      item: "Challenges",
      link: "/challenges",
    },
    {
      item: "Future",
      link: "/future",
    },
    {
      item: "Opportunities",
      link: "/oppotunities",
    },
  ];

const MobileNav2 = ({ setIsActive }) => {
  return (
    <div>
      <ImCancelCircle
        onClick={() => setIsActive(false)}
        className="w-[30px] h-[30px]  ml-auto mr-10 mt-3"
      />
      <div className="mt-3 flex flex-col">
      {items.map((item, index) => (
              <Link
              key={index}
                to={item.link}
                onClick={() => setIsActive(false)}
          className="block my-1 mx-4 pb-3 font-bold text-[16px] text-[#fff]"
              >
                {item.item}
              </Link>
          ))}
       
      </div>
    </div>
  );
};

export default MobileNav2;
