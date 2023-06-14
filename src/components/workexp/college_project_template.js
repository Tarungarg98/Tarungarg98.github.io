import React from "react";
import Project from "./project_template";
import "./college_project.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CollegeProjects = (props) => {
  return (
    <div className="college_project">
      <div className="row">
        <div className="col-md-3">
          <div>
            <h3 className="prof_name">{props.prof_name}</h3>
            <h4 className="duration">{props.duration}</h4>
            {/* <div className="brief">{props.brief}</div> */}
          </div>
        </div>
        <div className="col-md-9 details">
          <br></br>
          <div className="description">
            <ul>
              {props.projects.map((project) => (
                <li>
                  <Project
                    id={project.id}
                    name={project.name}
                    description={project.description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeProjects;
