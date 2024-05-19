import React from "react";

import WorkExp from "../workexp/workexp";
import IntroPage from "../Intro/intro";
import Education from "../Education/education";
import Awards from "../awards/awards";
import Certificates from "../certificates/certificates";
import Volunteering from "../Volunteering/volunteering_experiences";
import NavBar from "../navigation_bar/nav_bar";
import Skills from "../skills/skills";
import Publications from "../publications/publications";

import "./layout.css";

const Layout = () => {
  let layout_data = (
    <div>
      <IntroPage />
      <Education />
      <Skills />
      <WorkExp />
      <Awards />
      <Publications />
      <Volunteering />
      <div className="certificate_component">
        <Certificates />
      </div>
    </div>
  );
  // }
  return (
    <div className="layout">
      <NavBar />
      <div>{layout_data}</div>
    </div>
  );
};

export default Layout;
