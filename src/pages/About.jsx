import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, skills } from "../constants";

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

      <div className="py-16 ">
          <h3 className="subhead-text">
            <u>Work Experience</u>
          </h3>
          <div>
            <p className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
              I have worked with all sorts of clients and projects, levelling up my skills amd teaming up with smart colleagues and senior developers. Her's the rundown:
            </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map ((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                 <div>
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                 </div> 
                }
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{margin: 0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key = {`experience-point-${index}`} 
                    className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
