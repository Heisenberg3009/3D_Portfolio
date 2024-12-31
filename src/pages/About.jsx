import React from "react";
import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Tulsi Narayanan
        </span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
          Software Engineer based in Australia, specializing in technical
          education and full stack development. Experienced with all stages of
          the development cycle for dynamic web projects. Well-versed in
          numerous programming languages including JavaScript, Python, and C++.
          Strong background in project management and customer relations.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          <u>My Skill Set</u>
        </h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
