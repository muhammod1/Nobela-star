import React from "react";
import fuad from "../assets/fuad.svg";
import muhammod from "../assets/muhammod.svg";

const About = () => {
  return (
    <div id="about" className="py-6 tab:py-10 flex flex-col w-[97%] h-fit mx-auto max-w-[1430px]">
      <p className="pb-4 text-[30px] text-center font-[600] ">About</p>
      <p className="font-[600] tracking-wider text-[14px] tablet:text-[16px] laptop_l:text-[20px] text-justify w-[95%] laptop_l:w-[850px] mx-auto">
      This project is based on the EDT 121 (Introduction to design) assignment given by Mr. MUHAMMAD K.J, University of Ilorin, Kwara State, Nigeria.
      </p>
      <div className="flex flex-wrap laptop_l:w-[97%] max-w-fit justify-between tab:my-20 my-5 mx-auto">
        <div className="flex w-[48%] mx-auto flex-col">
          <img className=" tablet_l:w-[280px] laptop:w-[300px] laptop:h-[300px] h-[150px] tablet_l:h-[280px]" src={fuad} alt="pic" />
          <p className="text-[10px] mobile:text-[14px] tablet:text-[16px] text-center laptop:text-left font-[700] laptop:mt-3">ADESHINA Fuad Oluwaniyi</p>
          <p className="text-[14px] font-[500] mt-3 hidden laptop:block w-full laptop_l:w-[350px]">
            Faculty of Education, department of Educational Technology, program
            of Computer Science and Education.
          </p>
        </div>
        <div className="flex laptop:pl-12 w-[48%] flex-col laptop:flex-col-reverse ml-auto">
          <img className=" tablet_l:w-[280px] laptop:mr-[10rem] laptop:w-[300px] laptop:h-[300px] h-[150px] tablet_l:h-[280px]" src={muhammod} alt="VtT" />
          <p className="text-[14px] font-[500]  hidden laptop:block mt-3 w-full laptop_l:w-[350px]">
            Faculty of Education, department of Educational Technology, program
            of Computer Science and Education.
          </p>
          <p className="text-[10px] mobile:text-[14px] tablet:text-[16px] text-center laptop:text-left font-[700] laptop:mt-3">AJIBADE Muhammod Olawale</p>

        </div>
      </div>
      <p className="laptop:hidden font-[600] text:[12px] tablet:text-[16px] text-center w-[95%] laptop:w-[650px] mx-auto">
      Both Students are from the faculty of Education, department of Educational Technology, program of Computer Science and Education.
      </p>
      <p className="w-[95%] laptop:w-[650px] mt-4 mx-auto text-[12px] tablet:text-[16px] text-center tracking-wider italic">This Project is Done by a Team of two student which had equally contributed to the success of this project</p>
    </div>
  );
};

export default About;
