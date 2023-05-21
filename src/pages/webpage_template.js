import React from "react";
import Project from "./project_template";

const Webpage = (props) => {
  return (
    <div className="webpage">
      {/* <div className="companyName">{props.companyname}</div> */}
      <div className="row">
        <div className="col-sm-4">
          {" "}
          <div>
            <img src={props.image} alt="-" width="50%"></img>
          </div>
        </div>
        <div className="col-sm-8">
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
  );
};

export default Webpage;
