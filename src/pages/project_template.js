import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Project = (props) => {
  return (
    <div className="project">
      <Popup trigger={<div className="project-title">{props.name}</div>}>
        <div className="project-description content">{props.description}</div>
      </Popup>
    </div>
  );
};

export default Project;
