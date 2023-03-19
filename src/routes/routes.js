import React from "react";
import { Route, Routes } from "react-router-dom";
import SpeechRec from "../pages/SpeechRec/SpeechRec";
import ImgGen from "../pages/ImgGen/ImgGen";
import Home from "../pages/Home";
import Application from "../pages/Application";
import Benefit from "../pages/Benefit";
import Challenges from "../pages/Challenges";
import Future from "../pages/Future";
import Oppotunity from "../pages/Oppotunity";
import Introduction from "../pages/Introduction";

const CreateRoutes = () => {
  return (
    <div className="relative">
      <div className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/image" element={<ImgGen />}></Route>
          <Route path="/speechRec" element={<SpeechRec />}></Route>
          <Route path="/application" element={<Application />}></Route>
          <Route path="/benefit" element={<Benefit />}></Route>
          <Route path="/challenges" element={<Challenges />}></Route>
          <Route path="/future" element={<Future />}></Route>
          <Route path="/oppotunities" element={<Oppotunity />}></Route>
          <Route path="/introduction" element={<Introduction />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default CreateRoutes;
