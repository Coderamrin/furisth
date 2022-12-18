import React from "react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

const Projects = () => {
  const projectData = [
    {
      img: project1,
      title: "Seo for Digital agency",
    },
    {
      img: project2,
      title: "Vieo Marketign for Faang",
    },
    {
      img: project3,
      title: "Facebook add boosting",
    },
  ];

  return (
    <section className="bg-gray-900 text-white" id="projects">
      <div className="container mx-auto py-20">
        <h2 className="text-4xl text-center pb-10 font-bold">
          Our latest Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {projectData.map((project, i) => {
            return (
              <div key={i}>
                <img src={project.img} alt={project.title} className="w-full" />
                <h4 className="text-2xl font-bold pt-10 pb-2">
                  <a href="/project-1">{project.title}</a>
                </h4>
                <p className="text-gray-600 text-xl">Marketing, Promotion, Production, Selling</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
