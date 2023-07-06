import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import skill_img from "./images/skill.png";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1> Skills</h1>
      <hr></hr>
      <div className="row">
        <div className="col-md-2">
          <h3>Tech Stack</h3>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>R</li>
            <li>Stata</li>
            <li>C++</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>Technical Proficiency</h3>
          <ul>
            <li>Python Expertise</li>
            <li>Exploratory Data Analysis</li>
            <li>Strong Debugging Skills</li>
            <li>Extracting patterns from data</li>
            <li>Data Science</li>
            <li>Machine Learning</li>
            <li>Natural Language Processing</li>
            <li>Deep Learning</li>
          </ul>
        </div>
        <div className="col-md-2 skills_img">
          <img src={skill_img} alt="Skills Logo"></img>
        </div>
        <div className="col-md-3">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication skill</li>
            <li>Critical thinking</li>
            <li>Storytelling</li>
            <li>Attention to Detail</li>
            <li>Business Understanding</li>
            <li>Strong Visualization</li>
            <li>Leadership & Team Work</li>
            <li>Problem Solving</li>
            <li>Decision Making</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h3>Coding Proficiency</h3>
          <ul>
            <li>AWS</li>
            <li>Docker</li>
            <li>Pandas</li>
            <li>Object Oriented Programming</li>
            <li>Matplolib</li>
            <li>Flask</li>
            <li>Plotly</li>
          </ul>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Skills;
