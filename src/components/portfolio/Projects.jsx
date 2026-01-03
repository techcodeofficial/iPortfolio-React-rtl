import React from "react";
import projectsData from "../../constants/projectsData";
import Project from "./Project";
const Projects = ({ filterId }) => {
  return (
    <div
      className="row gy-4 isotope-container"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {projectsData
        .filter((item) => {
          if (filterId === 0) return true;
          return item.filterId == filterId;
        })
        .map((item, i) => (
          <Project key={i} {...item} />
        ))}
    </div>
  );
};
export default Projects;
