import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import NavBar from "../../components/NavBar";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";

const SpeechRec = () => {
  const navigate = useNavigate();
  const [start, setstart] = useState(true);
  let bg = document.getElementsByClassName("rec-body");

  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "open *",
      callback: (site) => {
        window.open("https://" + site);
      },
    },
    {
      command: "back to *",
      callback: (nav) => {
        navigate("/" + nav);
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        bg.style.background = color;
      },
    },
  ];

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition(commands);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech to text recognition.</span>;
  }

  return (
    <div className="relative rec-body h-[100vh] text-[#fff]">
      <div className="w-full  z-50">
        <NavBar link="/" />
      </div>
      <div className="flex h-[70vh]">
        <div className=" tablet:my-auto mx-auto ">
          <form className="mt-4 tablet:mt-16 w-full mx-auto w-[95%] tablet:w-[95%] laptop:w-[650px] gap-5 mx-auto">
            <div className=" mx-auto w-fit">
              <div className="flex justify-between items-center w-full">
                <p className="text-[18px] tablet:text-[20px] tracking-wider">
                  Click the{" "}
                  <span className="text-[20px] tablet:text-[24px] font-bold uppercase ">
                    {" "}
                    {start ? (
                      <span className="text-[#19bf5e]">start button</span>
                    ) : (
                      <span className="text-red-500">stop button</span>
                    )}
                  </span>{" "}
                  to {start ? "begin" : "end"} using Voice to Text AI
                </p>
              </div>
            </div>
            <div className="gap-4 flex mx-auto mt-4 tabletmt-8 items-center w-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  SpeechRecognition.startListening({ continuous: true });
                  setstart(false);
                }}
                className={
                  start
                    ? " bg-[#19bf5e] flex gap-2 items-center  hover:opacity-80 text-[white] py-2 px-4 rounded-lg"
                    : "beep"
                }
              >
                {start ? <span className="">Start</span> : ""}
                <FaMicrophoneAlt
                  className={
                    start
                      ? " w-[20px] h-[16px] relative top-[-2px]"
                      : "py-2 px-3 rounded-md w-[40px] h-[45px] text-[#19bf5e]"
                  }
                />
              </button>
            </div>
          </form>
          <div className="bg-[#e6e5e5] h-[300px] max-h-fit mt-6 tablet:mt-10 mx-auto rounded-md w-[95%] tablet:w-[95%] laptop:w-[650px]">
            <p className="text-[12px] font-semibold mx-3 py-2 text-black ">
              {transcript}
            </p>
          </div>
          <div className="flex justify-between mt-4 tablet:mt-8 mx-auto w-[95%] tablet:w-[95%] laptop:w-[650px] ">
            <button
              onClick={(e) => {
                e.preventDefault();
                setstart(true);
                resetTranscript();
              }}
              className="bg-[#417ac0] opacity-20 flex gap-2 h-fit hover:opacity-80 text-[white] py-2 px-4 rounded-lg"
            >
              Reset
              <MdRestartAlt className="w-[20px] h-[20px]" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                SpeechRecognition.stopListening();
                setstart(true);
              }}
              className={
                start
                  ? ""
                  : "bg-red-500 flex gap-2 items-center hover:opacity-50 text-[white] py-2 px-4 rounded-lg"
              }
            >
              {start ? "" : <span className="">Stop</span>}
              {start ? (
                <FaMicrophoneAltSlash className="w-[20px] tablet:w-[30px] h-[20px] tablet:h-[35px] text-red-500" />
              ) : (
                <FaMicrophoneAlt className=" w-[20px] h-[16px] relative top-[-2px]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechRec;