import React from "react";

import projectdata from '../data/projectdata.json';

import { getImageUrl } from "../../utils";

export default function Projects() {
  return (
    <>
    {
      projectdata.map((project, id) => {
        return (
          <div key={id} className="projectContainer">
            <img src={getImageUrl(project.imgSrc)} alt={`${project.title}`} className="projectImg"></img>
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectDesc">{project.description}</p>
            <div className="projectLinks">
              <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
              <a href={project.source} target="_blank" rel="noreferrer">Source</a>
            </div>
          </div>
        )
      })
    }
    </>

);
}