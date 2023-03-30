import React from "react";
import NavBar from "../components/NavBar";
import AiCon from "../assets/Chal.svg";
import Footer from "../components/Footer";

const Challenges = () => {
  return (
    <div>
      <div className="bg-black">
        <NavBar />
      </div>
        <div className="h-fit bg-black w-full overflow-hidden">
          <img className="h-fit mx-auto" src={AiCon} alt="" />
        </div>
      <div className=" w-[95%] max-w-[1420px] mx-auto">
        <p className="mt-7  font-bold text-[20px] text-black">Challege of AI</p>
        <br />
        There challenges and risks associated with AI, such as job displacement,
        bias, lack of empathy, security risks, and dependence on technology. You
        can also discuss ethical concerns around AI, such as privacy and data
        protection.
        <div className="mb-3" />
        Here are some potential challenges of AI:
        <div className="mb-3" />
        1. Ethical Concerns: There are ethical concerns around AI, including the
        use of AI for potentially harmful or biased purposes, such as facial
        recognition technology that may be used for surveillance or algorithmic
        hiring processes that may be discriminatory.
        <div className="mb-3" />
        2. Job Displacement: AI has the potential to automate jobs and displace
        human workers, leading to job loss and potentially exacerbating economic
        inequality.
        <div className="mb-3" />
        3. Technical Complexity: AI systems can be complex and difficult to
        understand, leading to potential errors or unintended consequences.
        <div className="mb-3" />
        4. Lack of Transparency: Some AI systems may lack transparency, making
        it difficult to understand how they are making decisions or to identify
        potential biases.
        <div className="mb-3" />
        5. Data Privacy and Security: AI systems often rely on large amounts of
        data, which raises concerns around data privacy and security.
        <div className="mb-3" />
        6. Regulation and Policy: There are currently few regulations and
        policies governing the development and use of AI, which could lead to
        potential abuses or negative consequences.
        <div className="mb-3" />
        7. Cost: Developing and implementing AI systems can be costly, which
        could limit access to these technologies for smaller businesses and
        organizations.
        <div className="mb-3" />
        These are just a few potential challenges of AI.
      </div>
      <Footer />
    </div>
  );
};

export default Challenges;
