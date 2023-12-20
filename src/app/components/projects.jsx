import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./projectitem";
// import shipLogImg from "/shiplog.png";
// import easyCourtImg from "../../public/images/easycourt.png";
// import kaleidoscopeImg from "../../public/images/kaleidoscope.png";
// import socialHourImg from "../../public/images/socialhour.png";

function Projects() {
  // holding data about projects in array
  const projects = [
    {
      title: "Ship Log",
      backgroundImg: "/shiplogImg.png",
      projectUrl: "/shiplog",
      testid: "shiplog"
    },
    {
      title: "Easy Court",
      backgroundImg: "/easyCourtImg.png",
      projectUrl: "/easycourt",
      testid: "easycourt"

    },
    {
      title: "Social Hour",
      backgroundImg: "/socialHourImg.png",
      projectUrl: "/socialhour",
      testid: "socialhour"

    },
    {
      title: "Kaleidoscope",
      backgroundImg: "/kaleidoscopeImg.png",
      projectUrl: "/kaleidoscope",
      testid: "kaleidoscope"
    },
  ];

  return (
    <div id="projects" className="w-full" data-testid="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="test-xl tracking-widest uppercase text-[#136F63]">
          Projects
        </p>
        <h2 className="py-4">{`What I've Built`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              data-testid={project.testid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
