import React from "react";
import "./certificates.css";
import react_img from "./images/react.png";
import deep_learning_img from "./images/deep_learning.png";
import machine_learning_img from "./images/machine_learning.png";
import nlp_img from "./images/nlp.png";
import tensorflow_img from "./images/tensorflow.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Certificates = () => {
  return (
    <div className="certificates" id="certificates">
      <h1> Certificates</h1>
      <div class="row">
        <div class="col">
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/QQ6YSCUQ7A6H"
            target="_blank"
          >
            <img src={nlp_img}></img>
          </a>
        </div>
        <div class="col">
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/M3YXH4QVP7DC"
            target="_blank"
          >
            <img src={deep_learning_img}></img>
          </a>
        </div>
        <div class="col">
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/EPYDJB2KLV6R"
            target="_blank"
          >
            <img src={tensorflow_img}></img>
          </a>
        </div>
        <div class="col">
          <a
            href="https://www.coursera.org/account/accomplishments/records/ANMCUMCPPYD8"
            target="_blank"
          >
            <img src={machine_learning_img}></img>
          </a>
        </div>
        <div class="col">
          <a
            href="https://coursera.org/share/558d091161ad935020239da513625caf"
            target="_blank"
          >
            <img src={react_img}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
