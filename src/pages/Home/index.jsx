import React from "react";
import vd from '../../assets/herovd.mp4';
import About from "../../components/About";
import AIApp from "../../components/AIApp";
import AiCont from "../../components/AiCont";
import NavBarsec from "../../components/NavBarsec";
import Road from "../../components/Road";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="w-full z-50">
        <NavBarsec />
      </div>
     
      <header className="relative z-50 h-[400px] tablet:h-[90vh] max-h-[600px] ">
        <div className="bg- h-full w-full  justify-center items-center">
        <div className="relative h-full bg-black w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="hidden tablet:block min-w-full min-h-full w-auto h-full"
            id="myVideo"
          >
            <source
              src={vd}
              type="video/mp4"
            />
            <source
              src={vd}
              type="video/webm"
            />
            Your browser does not support HTML5 video.
          </video>
          <div className="w-[250vw]">
            <video
              autoPlay
              muted
              loop
              className="tablet:hidden min-w-full min-h-full w-auto h-full"
              id="myVideo"
            >
              <source
                src={vd}
                type="video/mp4"
              />
              <source
                src={vd}
                type="video/webm"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
          </div>
          <div className="absolute w-full mx-auto top-[45%] ">
            <div className="w-fit mx-auto flex justify-center flex-col">
              <p className="text-[#18A0FB] w-fit tracking-wider
              st font-[700] text-[30px] tablet:text-[40px] text-center ">
                WELCOME TO AI LEARNING
              </p>
              <a
                href="#ai_app"
                className="text-white py-1.5 px-8 mt-32 rounded-md bg-[#18A0FB] mx-auto"
              >
                use our AI
              </a>
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
