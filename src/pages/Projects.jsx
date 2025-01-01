import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        {" "}
        My {""}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
          I have worked on a variety of projects, ranging from personal
          projects, internship projects to freelance work. Here are the ones
          closest to my heart:
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4>
                {project.name}
              </h4>
              <p>
                {project.description}
              </p>
              <div>
                <Link
                  to={project.link}
                  target="_blank"
                ></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
