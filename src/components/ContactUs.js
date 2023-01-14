import React from "react";
import Content from "../common/content";

import contact from "../assets/contact.png";

const Deshell = () => {
  return (
    <div className="max-w-[1400px] w-[92%] mx-auto my-56">
      <div className="flex flex-col justify-between laptop:flex-row-reverse">
        <div className="w-[90%] laptop:w-[50%] ">
          <div className="text-blue text-[32px] font-[600] mb-3">
            Want to talk to us?
          </div>
          <Content text="Feel free to contact us." />
          <form className="my-6">
            <div>
              <label className="block text-blue font-[500] text-[18px]">
                Email
              </label>
              <input
                placeholder="Your Email"
                type="email"
                className="border-2 w-full border-[#EAEAEA] px-4 py-3 mt-3 rounded-lg"
              />
            </div>
            <div>
              <label className="block mt-7 text-blue font-[500] text-[18px]">
                Questions
              </label>
              <textarea
                placeholder="Your Questions"
                type="email"
                className="border-2 h-[200px] w-full border-[#EAEAEA] px-4 py-3 mt-3 rounded-lg"
              />
            </div>
            <button className="bg-pink mt-6 w-full text-[white] text-[18px] py-2 px-5 rounded-lg">
              Submit
            </button>
          </form>
        </div>
        <div className="w-[90%] mt-20 laptop:mt-0 laptop:w-[50%]">
          <img src={contact} className="mx-auto laptop:ml-auto" alt="deshell" />
        </div>
      </div>
    </div>
  );
};

export default Deshell;
