import React from "react";
import AiCon from "../assets/App.svg";
import Footer from "../components/Footer";
import lessthan from "../assets/lessthan.svg"
import ContNav from "../components/ContNav";
import { Link } from "react-router-dom";

const Application = () => {
  
  return (
    <div className="">
      <div className="bg-black">
        {/* <NavBarTh /> */}
        <ContNav />
      </div>
      <div className="h-fit w-full bg-black overflow-hidden">
        <img className="h-fit mx-auto" src={AiCon} alt="" />
      </div>
      <div className=" w-[95%] max-w-[1420px] mx-auto">
        
        <p className="my-7 font-bold text-[20px] text-black flex justify-between">
        Aplication of AI
          <Link to='/benefit' className="text-[14px] hover:bg-bluep px-3 text-grey font-[500] flex gap-2 items-center" >
            Benefit of AI 
          <img className="h-fit mx-auto" src={lessthan} alt="" />
          
          </Link>
        </p>
        <br />
        Some of the many applications of AI in various industries, such as
        healthcare, finance, transportation, manufacturing, and entertainment.
        You can provide specific examples of AI systems that are currently in
        use or in development in these industries.
        <div className="mb-3" />
        Here are some potential talking points on the applications of AI:
        <div className="mb-3" />
        1. Healthcare: AI is being used in healthcare to improve patient
        outcomes and enhance the accuracy and speed of diagnoses. For example,
        machine learning algorithms can analyze medical images to detect
        patterns and identify potential health issues, such as tumors or
        lesions. AI is also being used to develop personalized treatment plans
        based on patient data and genetics.
        <div className="mb-3" />
        2. Finance: AI is being used in finance to automate tasks such as fraud
        detection, credit scoring, and investment analysis. AI-powered chatbots
        and virtual assistants can also help customers with queries, and provide
        personalized financial advice.
        <div className="mb-3" />
        3. Transportation: AI is being used in transportation to improve safety
        and optimize traffic flow. Self-driving cars use AI to navigate and make
        decisions in real-time. AI can also be used to predict traffic patterns
        and optimize logistics, leading to more efficient supply chains.
        <div className="mb-3" />
        4. Manufacturing: AI is being used in manufacturing to optimize
        processes, improve product quality, and reduce costs. For example,
        predictive maintenance can help identify potential equipment failures
        before they occur, reducing downtime and improving efficiency. AI can
        also be used to optimize supply chain management and reduce waste.
        <div className="mb-3" />
        5. Entertainment: AI is being used in the entertainment industry to
        personalize recommendations and create new content. Streaming platforms
        use AI to recommend content based on user preferences, and AI-generated
        music and artwork are becoming increasingly common.
        <div className="mb-3" />
        6. Customer service: AI is being used to improve customer service by
        providing quick and accurate responses to queries. Chatbots and virtual
        assistants can handle simple requests and provide personalized
        recommendations, freeing up human agents to handle more complex issues.
        <div className="mb-3" />
        <div className="mb-3" />
        These are just a few examples of the many applications of AI across
        different industries.
      </div>

      <Footer />
    </div>
  );
};

export default Application;
