import React from "react";
import { Link } from "react-router-dom";
import AiCon from "../assets/AiCon.svg";
import rightArrow from "../assets/rightArrow.svg";

const note = [
  {
    id: 1,
    link: "/introduction",
    title: "Introduction to AI",
    desc: "Artificial intelligence (AI) is a field of computer science that focuses on the creation of intelligent machines that can perform tasks that typically require human-level intelligence, such as visual perception, speech recognition ...",
    desc2:
      "Artificial intelligence (AI) is a field of computer science that focuses on the creat...",
  },
  {
    id: 2,
    link: "/application",
    title: "Application of AI",
    desc: "Some of the many applications of AI in various industries, such as healthcare, finance, transportation, manufacturing, and entertainment. You can provide specific examples of AI systems that are currently in use or in development ...",
    desc2:
      "Some of the many applications of AI in various industries, such as healthcare, finance, transportation,...",
  },
  {
    id: 3,
    link: "/benefit",
    title: "Benefit of AI",
    desc: "There are many benefits of AI, such as increased efficiency, improved decision-making, enhanced customer experiences, improved safety, increased innovation, and cost savings ...",
    desc2:
      "There are many benefits of AI, such as increased efficiency, improved decision-making, enhanced...",
  },
  {
    id: 4,
    link: "/challenges",
    title: "Challenges of AI",
    desc: "There challenges and risks associated with AI, such as job displacement, bias, lack of empathy, security risks, and dependence on technology. You can also discuss ethical concerns around AI, such as privacy and data protection ...",
    desc2:
      "There challenges and risks associated with AI, such as job displacement, bias, lack of empath...",
  },
  {
    id: 5,
    link: "/future",
    title: "Future of AI",
    desc: "Some of the emerging trends and developments in AI, such as the growth of AI-powered voice assistants, the integration of AI with the Internet of Things, and the rise of explainable AI ...",
    desc2:
      "Some of the emerging trends and developments in AI, such as the growth of AI-powered voice...",
  },
  {
    id: 6,
    link: "/oppotunities",
    title: "Opportunities for further research",
    desc: "Some of the many opportunities for further research and development in AI, such as improving the accuracy and reliability of AI systems, increasing the transparency and accountability of AI, and exploring new applications ...",
    desc2:
      "Some of the many opportunities for further research and development in AI, such as improving the...",
  },
];
const AiCont = () => {
  return (
    <div
      id="content"
      className="relative w-[97%] h-fit mx-auto max-w-[1430px]"
    >
      <img
        className="hidden z-0 tablet_l:block absolute bottom-0 right-0 h-full"
        src={AiCon}
        alt="ai"
      />
      <div className="relative py-5 z-10">
        <p className="font-[700] text-[26px] tablet_l:text-[36px] leading-12 my-6 w-[100%] tablet_l:w-[550px]">
          Learning about AI [Artificial Intelligence] is made easy
        </p>
        <div className="flex flex-wrap gap-5 justify-center tablet_l:justify-between">
          {note.map((item) => (
            <div
              key={item.id}
              className="flex tab:block w-[95%] tablet_l:w-[45%] pb-3 tab:pb-5 border-[3px] tab:border-0 border-b-blue border-l-0 border-t-0 border-r-0"
            >
              <div className="">
                <p className="font-[600] text-[20px] tab:text-[20px]">
                  {item.title}
                </p>
                <p className="text-[18px] hidden tab:block font-[500] leading-8 mt-2 mb-5">
                  {item.desc}
                </p>
                <p className="tab:hidden text-[16px] font-[500] mt-2 ">
                  {item.desc2}
                </p>
                  <Link
                    to={item.link} 
                    className="py-1.5 px-8 mt-[-16px] w-fit text-blue font-semibold hidden tab:block border-[3px] border-blue rounded-md"
                  >
                    Go
                  </Link>
              </div>
              <Link
                to={item.link}
                className="w-[25%] flex tab:hidden items-center"
              >
                <img
                  className="w-[44px] h-[44px] m-auto"
                  src={rightArrow}
                  alt=".."
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiCont;
