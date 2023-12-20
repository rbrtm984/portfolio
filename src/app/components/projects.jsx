import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./projectitem";
// import shipLogImg from "/shiplog.png";
// import easyCourtImg from "../../public/images/easycourt.png";
// import kaleidoscopeImg from "../../public/images/kaleidoscope.png";
// import socialHourImg from "../../public/images/socialhour.png";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="test-xl tracking-widest uppercase text-[#136F63]">
          Projects
        </p>
        <h2 className="py-4">{`What I've Built`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ship Log"
            backgroundImg="/shiplogImg.png"
            projectUrl="/shiplog"
          />
          <ProjectItem
            title="Easy Court"
            backgroundImg="/easyCourtImg.png"
            projectUrl="/easycourt"
          />
          <ProjectItem
            title="Social Hour"
            backgroundImg="/socialHourImg.png"
            projectUrl="/socialhour"
          />
          <ProjectItem
            title="Kaleidoscope"
            backgroundImg="/kaleidoscopeImg.png"
            projectUrl="/kaleidoscope"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
