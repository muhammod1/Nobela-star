import React from "react";
import NavBar from "../components/NavBar";
import AiCon from "../assets/Fut.svg";
import Footer from "../components/Footer";

const Future = () => {
  return (
    <div>
      <div className="bg-black">
        <NavBar />
        <div className="h-[500px] overflow-hidden">
          <img className="" src={AiCon} alt="" />
        </div>
      </div>
      <div className=" w-[95%] max-w-[1420px] mx-auto">
        <p className="mt-7  font-bold text-[20px] text-black">Future of AI</p>
        <br />
        The future of AI involves advanced cognitive systems capable of doing
        what machine learning systems can’t. They will intelligently and
        fluently interact with human experts, providing them with articulate
        explanations and answers, even at the edge of the network or in robotic
        devices. Across the board, people will see and work with systems endowed
        with rare and valuable intelligence. For example:
        <div className="mb-3" />
        Digital life is augmenting human capacities and disrupting eons-old
        human activities. Code-driven systems have spread to more than half of
        the world’s inhabitants in ambient information and connectivity,
        offering previously unimagined opportunities and unprecedented threats.
        As emerging algorithm-driven artificial intelligence (AI) continues to
        spread, will people be better off than they are today?
        <div className="mb-3" />
        Here are some potential talking points on the future of AI:
        <div className="mb-3" />
        1. Advancements in AI Research: AI research is continuing to make
        significant advancements, such as in areas like natural language
        processing, computer vision, and machine learning. This is leading to
        new possibilities and applications of AI.
        <div className="mb-3" />
        2. Increased Automation: AI is likely to continue to automate many tasks
        and processes, leading to increased efficiency and productivity. This
        could potentially lead to job displacement and require re-skilling of
        the workforce.
        <div className="mb-3" />
        3. Improved Human-AI Collaboration: The future of AI may involve
        improved collaboration between humans and AI systems, with AI taking on
        tasks that are best suited for machines while humans focus on tasks that
        require more creativity, critical thinking, and decision-making.
        <div className="mb-3" />
        4. Greater Personalization: As AI becomes more advanced, it is likely
        that it will be able to provide more personalized experiences for users.
        This could include personalized recommendations, tailored customer
        service, and even personalized medical treatments.
        <div className="mb-3" />
        5. Ethical Concerns: As AI becomes more prevalent and advanced, there
        will likely be greater attention paid to ethical concerns around AI,
        such as data privacy, bias, and transparency in decision-making
        processes.
        <div className="mb-3" />
        6. AI-Powered Innovation: As AI technology continues to evolve, it is
        likely to create new opportunities for innovation in areas such as
        healthcare, transportation, and manufacturing. This could lead to
        significant improvements in our daily lives.
        <div className="mb-3" />
        7. AI Governance: With the increasing importance of AI in our lives,
        there may be a need for greater governance and regulation of AI to
        ensure that it is being used safely and responsibly._
      </div>
      <Footer />
    </div>
  );
};

export default Future;
