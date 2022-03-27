import React from "react";
import "./Projects.css";
const Projects = (props) => {
  return (
    <div className="projects">
      <div className="image">
        <img src={props.Data.image} alt="hi" width="500px" height="600px" />
      </div>
      <div className="content">
        <h2 className="name">{props.Data.name}</h2>
        <h3 className="category">{props.Data.category}</h3>
        <p className="description">
          {props.Data.description}
        </p>
      </div>
    </div>
  );
};
export default Projects;
