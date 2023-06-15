import React, { useContext } from "react";

import WorkExp from "../workexp/workexp";
import IntroPage from "../Intro/intro";
import Education from "../Education/education";
import DS_Journey from "../DS_Journey/ds_journey";
import Awards from "../awards/awards";
import Certificates from "../certificates/certificates";
import Volunteering from "../Volunteering/volunteering_experiences";
import NavBar from "../navigation_bar/nav_bar";
import Skills from "../skills/skills";
import Publications from "../publications/publications";

import { AppContext } from "../../context/AppContext";
import "./layout.css";

const Layout = () => {
  const { show_blog } = useContext(AppContext);
  let layout_data = <div>{show_blog}</div>;
  if (show_blog === 1) {
    layout_data = <DS_Journey />;
  } else {
    layout_data = (
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
  }
  return (
    <div className="layout">
      <NavBar />
      <div>{layout_data}</div>
    </div>
  );
};

export default Layout;
