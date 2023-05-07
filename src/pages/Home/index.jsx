import React, { useState, useEffect } from "react";
import vd from "../../assets/herovd.mp4";
import Qr from "../../assets/Qr.jpg";
import About from "../../components/About";
import AIApp from "../../components/AIApp";
import AiCont from "../../components/AiCont";
import NavBarsec from "../../components/NavBarsec";
import Road from "../../components/Road";
import Footer from "../../components/Footer";
import { AiOutlineRight } from "react-icons/ai";

const Home = () => {
  const [first, setfirst] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 768) {
      const interval = setInterval(() => {
        setfirst(false);
      }, [10000]);
      return () => clearInterval(interval);
    }
  }, [width]);

  return (
    <div className="">
      {first && (
        <div className="hidden laptop:flex w-[100vw] h-[100vh] fixed z-50 bg-[#fff] justify-center items-center">
          <div className="w-fit h-fit m-auto">
            <div
              onClick={() => setfirst(false)}
              className="flex gap-2 items-center cursor-pointer w-fit mx-auto text-blue text-[12px] relative -right-32"
            >
              Go to Home page <AiOutlineRight />{" "}
            </div>
            <img className="w-[45%] m-auto " src={Qr} alt="" />
            <div className="w-fit mx-auto text-[20px] tab:text-[26px]">
              Scan to View on mobile
            </div>
          </div>
        </div>
      )}
      <div className="w-full z-50">
        <NavBarsec />
      </div>

      <header className="relative z-40 h-full tablet:h-[45vh] max-h-[600px] ">
        <div className="bg- h-full w-full  justify-center items-center">
          <div className="relative h-full bg-black w-full overflow-hidden">
            <video
              autoPlay
              muted
              loop
              className="hidden tablet:block min-w-full min-h-full w-auto h-full"
              id="myVideo"
            >
              <source src={vd} type="video/mp4" />
              <source src={vd} type="video/webm" />
              Your browser does not support HTML5 video.
            </video>
            <div className="w-[250vw]">
              <video
                autoPlay
                muted
                loop
                className="tablet:hidden min-w-fit min-h-[350px] w-auto h-[350px]"
                id="myVideo"
              >
                <source src={vd} type="video/mp4" />
                <source src={vd} type="video/webm" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <div className="absolute w-full mx-auto top-[25%] tablet:top-[45%] ">
            <div className="w-fit mx-auto flex justify-center flex-col">
              <p
                className="text-[#18A0FB] w-fit tracking-wider
              st font-[700] text-[20px] tablet:text-[40px] text-center "
              >
                WELCOME TO LEARNING AI
              </p>
              <div className="flex gap-6  my-auto">
                <a
                  href="#ai_app"
                  className="text-white py-2 px-5  rounded-md bg-[#18A0FB] mx-auto"
                >
                  use our AI
                </a>
              </div>
            </div>
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
