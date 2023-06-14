import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav_bar.css";
const NavBar = () => {
  return (
    <div>
      <nav>
        <a href="#intro_page">Home</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#workexp">Work Experience</a>
        <a href="#awards">Awards</a>
        <a href="#volunteering">Volunteering</a>
        {/* <a href="#certificates">Certificates</a> */}
        {/* <a href="#Blog_DS_Journey">Blog</a> */}
      </nav>
    </div>
  );
};

export default NavBar;
