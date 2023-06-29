import React from "react";
import Popup from "./Popup_workexp";
import { useState } from "react";
import useGAEvent from "../GA4/ga4analytics";

const Project = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const Project_expand_GAEvent = () => {
    useGAEvent("project-expand", props.name);
  };

  return (
    <div className="project">
      <button
        className="project-title"
        onClick={() => {
          setButtonPopup(~buttonPopup);
          Project_expand_GAEvent();
        }}
      >
        {props.name}
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="project-description content">{props.description}</div>
      </Popup>
    </div>
  );
};

export default Project;
