import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium text-sm text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Tulsi</span>👋
      <br />
      <span className="text-sm">
        A Software Engineer based in India and graduated from Australia.
      </span>
    </h1>
  ),
  2: (
    <InfoBox
      text="Completed several full stack projects using React, JavaScript and its libraries and frameworks, HTML, CSS, Python and concepts like API. With additional training in Robotics, Networking and IoT."
      link="/about"
      btnText="More about me"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years, curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a smart and passionate dev? I am just a few keystrokes away!"
      link="/contact"
      btnText="Let's connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
