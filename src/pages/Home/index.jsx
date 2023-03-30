import React from "react";
import About from "../../components/About";
import AIApp from "../../components/AIApp";
import AiCont from "../../components/AiCont";
import NavBarsec from "../../components/NavBarsec";
import Road from "../../components/Road";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="bg-light">
      <div className="w-full z-50">
        <NavBarsec />
      </div>
      <header className="z-50 h-[400px] tablet:h-[90vh] max-h-[600px] bg-black">
        <div className="h-full w-full flex justify-center items-center">
          <div className="flex flex-col">
            <p className="text-[#18A0FB] w-fit font-[700] text-[36px] tablet:text-[56px] text-center ">
              WELCOME TO AI LEARNING
            </p>
            <a
              href="#ai_app"
              className="text-white py-2 px-5 mt-4 rounded-md bg-[#18A0FB] mx-auto"
            >
              use our AI
            </a>
          </div>
        </div>
        <AiCont />
        <AIApp />
        <About />
        <Road />
        <Footer />
        <div className="h-1" />
      </header>
    </div>
  );
};

export default Home;
