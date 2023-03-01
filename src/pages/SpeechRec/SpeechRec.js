import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import NavBar from "../../components/NavBar";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";

const SpeechRec = () => {
  const [start, setstart] = useState(true)
  const {
    transcript,
    listening,
    resetTranscript,
    // browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    // SpeechRecognition.startListening({ continuous: true });
    console.log("listening starts");
  }, []);

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech to text recognition.</span>;
  // }
if (listening) {

}
  return (
    <div className="relative  bg-[#262626] h-[100vh] text-[#fff]">
      <div className="w-full  z-50">
        <NavBar link="/" />
      </div>
      <div className="flex h-[70vh]">
      <div className="my-auto mx-auto ">
      <form className="mt-24 w-full mx-auto ">
        <div className=" mx-auto w-fit">
          <div className="flex justify-between items-center w-[97%] tablet:w-[650px] gap-5 mx-auto">
            <p className="text-[20px] tracking-wider">
              Click the{" "}
              <span className="text-[24px] font-bold uppercase ">
                {" "}
                {start ? 
                <span className="text-[#19bf5e]">start button</span>
                :
                <span className="text-red-500">stop button</span>
              }
                
              </span>{" "}
               to 
               {" "}
                {start ? "begin" : "end" } using Voice to Text AI
            </p>
            {/* {start ? (
              <div className="flex gap-3 items-end text-[#19bf5e]">
                <FaMicrophoneAlt className="w-[40px] h-[40px] " />
                <span className="text-[18px] font-semibold ">On</span>
              </div>
            ) : (
              <div className="flex gap-3 items-end text-red-500">
                <FaMicrophoneAltSlash className="w-[40px] h-[40px]" />
                <span className="text-[18px] font-semibold">Off</span>
              </div>
            )} */}
          </div>
        </div>
        <div className="gap-4 flex mx-auto mt-8 items-center w-[97%] tablet:w-[650px]">
          <button
            onClick={(e) => {
              e.preventDefault();
              SpeechRecognition.startListening();
              setstart(false)

              console.log("listening start");
            }}
            className="bg-[#19bf5e] flex gap-2  hover:opacity-80 text-[white] py-2 px-4 rounded-lg"
          >
            Start 
            <FaMicrophoneAlt className="w-[20px] h-[20px]" />
          </button>

          {/* <button onClick={resetTranscript}>Reset</button> */}
         
        </div>
      </form>
      <p className="rounded-md p-2 text-[14px] font-semibold bg-[#e6e5e5] mt-10 mx-auto text-black w-full tablet:w-[650px] ">
        {/* <p className="bg-[#e6e5e5] text-black rounded-md w-[550px]"> */}
        {transcript} There are several subfields within AI,
      </p>
      <div className="mx-auto flex justify-between mt-8 w-[97%] tablet:w-[650px] ">
      <button
            onClick={resetTranscript}
            className="bg-[#417ac0] flex gap-2 hover:opacity-80 text-[white] py-2 px-4 rounded-lg"
          >
            Reset
            <MdRestartAlt className="w-[20px] h-[20px]" />
          </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            // SpeechRecognition.stopListening();
            setstart(true)
            console.log("listening stop");
          }}
          className=" ml-auto hover:bg-red-400 flex gap-2 text-[white] py-2 px-4 rounded-lg"
        >
        {start ? "" : "Stop" }

          <FaMicrophoneAltSlash className="w-[30px] text-red-500 h-[30px]" />
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SpeechRec;
