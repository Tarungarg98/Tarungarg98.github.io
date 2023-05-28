import React from "react";
import Project from "./project_template";
import "./companypage.css";

const CompanyPage = (props) => {
  return (
    <div className="companypage">
      <div className="row">
        <div className="col-3">
          <div>
            <img src={props.image}></img>
          </div>
        </div>
        <div className="col-9 details">
          <h3 className="designation">{props.designation}</h3>
          <h4 className="duration">{props.duration}</h4>
          <div className="brief">{props.brief}</div>
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

export default CompanyPage;
