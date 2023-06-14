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
          <img src={mhsgImg}></img>
          <h4>Founder, Leader & Mentor</h4>
          <h5>May 2020 - Present</h5>
        </div>
        <div className="col-md-9 brief">
          During the challenging times of the pandemic, I took the initiative to
          establish a Mental Health Support Community for fellow BITSians.
          Recognizing the difficulties of adjusting to the new normal of
          lockdowns and the distressing news around us, I felt compelled to
          provide support in any way possible. Over the past three years, this
          initiative has grown into a formal student body on campus, with many
          individuals joining and contributing to its success. As the COVID-19
          pandemic forced new batches to experience virtual college life, we
          organized a series of engaging events to create a sense of
          togetherness and enjoyment for them. Additionally, our team crafted
          informative articles on mental health, which we shared with the
          community. With the gradual reopening of colleges offline, we have
          organized numerous on-campus events that have garnered positive
          feedback from students and faculty members alike. As I continue to
          take charge of this initiative, I act as a mentor, constantly
          brainstorming new ideas to expand and enhance its reach. If any of my
          fellow BITSians would like to contribute to this meaningful cause, I
          encourage you to reach out to me or the current student body of BITS
          MHSG. Together, let's make a difference in supporting mental health
          within our community.
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-md-3">
          <img src={nssImg}></img>
          <h4>Member</h4>
          <h5>Aug 2016 - Apr 2019</h5>
        </div>
        <div className="col-md-9 brief">
          During my involvement with the National Service Scheme (NSS), I
          actively participated in a wide range of impactful social activities.
          I contributed to significant events such as Blood Donation Camps, Tree
          Plantation Drives, and Campus Cleaning Drives, all aimed at improving
          our community. Additionally, I dedicated my time to visiting
          orphanages and old age homes, providing care and support to those in
          need. Working closely with fellow volunteers, professionals, and local
          authorities, I ensured the smooth coordination and successful
          execution of each initiative. These activities allowed me to raise
          awareness about important social issues and make a positive impact on
          the lives of others. Through my deep passion for social work, I
          actively contributed to fostering a more compassionate and inclusive
          society during my tenure with the NSS.
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Volunteering;
