import React from "react";
import hero from "../assets/heroImg.png";

const Hero = () => {
  return (
    <div className="relative h-[90vh] tablet:h-[600px]">
      <div className='h-full w-full overflow-hidden'>
      <img className="h-full w-[1000px] tablet:w-full " src={hero} alt="hero" />
      </div>
    <div className=" absolute top-0 h-full w-full bg-pink-rgba"/>
      <div className=" absolute top-0 h-full w-full flex  ">
        <div className=" mx-auto mt-[110px] tablet:mt-[160px] w-[90%] max-w-[900px]">
          <div className="text-[white] w-full tablet:w-[460px]">
            <p className="text-[34px] tablet:text-[44px] font-[700] ">Everything coconut -</p>
            <p className="text-[30px] tablet:text-[44px] font-[400] italic">All in one place</p>
            <p className="my-4">
              Need coconuts and any coconut products and stakeholders in the
              coconut ecosystem? You are in the right place
            </p>
            <div className=" flex flex-wrap gap-6 tablet:gap-7">
              <button className="font-[500] text-black py-2 px-5 bg-white rounded-lg">
              Join Us
              </button>
              <button className="font-[500] ml-6 py-2 px-5 bg-transparent border-2 rounded-lg">
              Learn more!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;