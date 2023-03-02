import React from "react";
import { Link } from "react-router-dom";
import AiCon from "../assets/AiCon.svg"

const note = [
  {
    id: 1,
    title: "Introduction to AI",
    desc: "Artificial intelligence (AI) is a field of computer science that focuses on the creation of intelligent machines that can perform tasks that typically require human-level intelligence, such as visual perception, speech recognition ...",
  },
  {
    id: 2,
    title: "Application of AI",
    desc: "Some of the many applications of AI in various industries, such as healthcare, finance, transportation, manufacturing, and entertainment. You can provide specific examples of AI systems that are currently in use or in development ...",
  },
  {
    id: 3,
    title: "Benefit of AI",
    desc: "There are many benefits of AI, such as increased efficiency, improved decision-making, enhanced customer experiences, improved safety, increased innovation, and cost savings ...",
  },
  {
    id: 4,
    title: "Challenges of AI",
    desc: "There challenges and risks associated with AI, such as job displacement, bias, lack of empathy, security risks, and dependence on technology. You can also discuss ethical concerns around AI, such as privacy and data protection ...",
  },
  {
    id: 5,
    title: "Future of AI",
    desc: "Some of the emerging trends and developments in AI, such as the growth of AI-powered voice assistants, the integration of AI with the Internet of Things, and the rise of explainable AI ...",
  },
  {
    id: 6,
    title: "Opportunities for further research",
    desc: "Some of the many opportunities for further research and development in AI, such as improving the accuracy and reliability of AI systems, increasing the transparency and accountability of AI, and exploring new applications ...",
  },
];
const AiCont = () => {
  return (
    <div id="content" className="relative w-[97%] h-fit mx-auto max-w-[1430px]">
    <img className="absolute bottom-0 right-20 h-full" src={AiCon} alt="ai"/>
      <div className="py-5">
        <p className="font-[700] text-[26px] tablet_l:text-[36px] leading-12 my-6 w-[100%] tablet_l:w-[550px]">Learning about AI [Artificial Intelligence] is made easy</p>
        <div className="flex flex-wrap gap-5 justify-center tablet_l:justify-between">
            {note.map((item) => (
                <div key={item.id} className="w-[95%] tablet_l:w-[45%] pb-5">
                    <p className="font-[600] text-[20px]">{item.title}</p>
                    <p className="font-[500] mt-2 mb-5">{item.desc}</p>
                    <Link to="#" className="py-2 px-6 border-2 border-blue rounded-md">Go</Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AiCont;
