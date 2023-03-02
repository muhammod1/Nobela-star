import React from "react";
import fuad from "../assets/fuad.svg";
import muhammod from "../assets/muhammod.svg";

const About = () => {
  return (
    <div id="about" className=" py-16 flex flex-col w-[97%] h-fit mx-auto max-w-[1430px]">
      <p className="pb-8 text-[30px] text-center font-[600] ">About</p>
      <p className="font-[500] text-[18px] text-center w-[650px] mx-auto">
        This project is based on the CSC 101 (Course content) assignment given
        by Mr. LECTURER name, University of Ilorin, Kwara State, Nigeria.
      </p>
      <div className="flex flex-wrap w-[900px] justify-between my-20 mx-auto">
        <div className="flex w-[45%] mx-auto flex-col">
          <img className="w-[300px] h-[300px]" src={fuad} alt="pic" />
          <p className="text-[18px] font-[600] mt-3">ADESHINA Fuad Oluwaniyi</p>
          <p className="text-[14px] font-[500] mt-3 w-[350px]">
            Faculty of Education, department of Educational Technology, program
            of Computer Science and Education.
          </p>
        </div>
        <div className="flex pl-12 w-[45%] flex-col-reverse mx-auto">
          <img className="w-[300px] h-[300px]" src={muhammod} alt="VtT" />
          <p className="text-[14px] font-[500] mt-3 w-[350px]">
            Faculty of Education, department of Educational Technology, program
            of Computer Science and Education.
          </p>
          <p className="text-[18px] font-[600]">AJIBADE Muhammod Olawale</p>
        </div>
      </div>
      <p className="w-[650px] mt-4 mx-auto text-[18px] text-center tracking-wider italic">This Project is Done by a Team of two student which had equally contributed to the success of this project</p>
    </div>
  );
};

export default About;
