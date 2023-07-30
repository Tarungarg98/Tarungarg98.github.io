import React from "react";

import mhsgImg from "./images/mhsg1.png";
import nssImg from "./images/nss.png";
import "./volunteer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Volunteering = () => {
  return (
    <div className="volunteering" id="volunteering">
      <h1>Volunteering</h1>
      <hr></hr>
      <div className="row">
        <div className="col-md-3">
          <img src={mhsgImg} alt="BITS MHSG Logo"></img>
          <h5>May 2020 - Present</h5>
        </div>
        <div className="col-md-9 brief">
          <h4>Founder, Leader & Mentor</h4>
          Recognizing the challenges of lockdowns and distressing news during
          the pandemic, I took the initiative to establish a Mental Health
          Support Community for fellow BITSians. Over three years, this
          initiative grew into a formal student body, with many individuals
          contributing to its success. We organized virtual events and shared
          informative articles on mental health. I am dedicated to expand its
          reach and making a difference in supporting mental health within our
          community. If you'd like to contribute, reach out to me or the current
          student body of BITS MHSG.
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-md-3">
          <img src={nssImg} alt="NSS Logo"></img>
          <h5>Aug 2016 - Apr 2019</h5>
        </div>
        <div className="col-md-9 brief">
          <h4>Core Member</h4>
          During my involvement with the National Service Scheme (NSS), I
          actively participated in impactful social activities like Blood
          Donation Camps, Tree Plantation Drives, and Campus Cleaning Drives. I
          also visited orphanages and old age homes to provide support. Working
          with fellow volunteers, professionals, and local authorities, I
          ensured successful execution of each initiative, raising awareness
          about important social issues. Through my deep passion for social
          work, I actively contributed to fostering a more compassionate and
          inclusive society during my tenure with the NSS.
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Volunteering;
