import React from "react";
import Popup from "./Popup_workexp";
import { useState } from "react";
import ReactGA from "react-ga4";

const Project = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const Expand_project = (project_name) => {
    ReactGA.event("click", {
      category: "project-title",
      label: project_name,
    });
  };

  return (
    <div className="project">
      <button
        className="project-title"
        onClick={() => {
          setButtonPopup(~buttonPopup);
          Expand_project(props.name);
        }}
      >
        {" "}
        > {props.name}
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="project-description content">{props.description}</div>
      </Popup>
    </div>
  );
};

export default Project;
