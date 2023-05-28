import React from "react";
import tarun_img from "../images/tarun1.jpg";
import github_img from "../images/github.png";
import resume_img from "../images/resume.png";
import email_img from "../images/email.png";
import linkedin_img from "../images/linkedin.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/intro.css";

const IntroPage = () => {
  return (
    <div className="intro_page">
      <div className="row">
        <div className="col sm-5 brief">
          <h2 className="myname">Hi, I'm Tarun Garg</h2>
          <h3>Data Scientist @ Cars24</h3>
          Welcome to my personal website! I'm a passionate data scientist with
          expertise in leveraging data-driven insights to solve complex business
          challenges. With experience in natural language processing, anomaly
          detection, and fraud modeling, I excel at applying advanced machine
          learning techniques to extract valuable insights from data. Throughout
          my career, I have worked with renowned organizations, collaborating
          with exceptional mentors and contributing to impactful projects. I am
          driven by a passion for continuous learning and a desire to make a
          positive impact through innovative data-driven solutions. Feel free to
          explore my website to learn more about my projects, expertise, and
          achievements. I'm open to new opportunities and collaborations, so
          let's connect and create something extraordinary together in the world
          of data science.
          <div className="icon">
            <a
              href="https://drive.google.com/file/d/1Mdv1OSIuPaHuFCK637n77w1bpdYWZIVG/view"
              target="_blank"
              title="Resume"
            >
              <img src={resume_img} alt="Resume"></img>
            </a>
            <a
              href="https://github.com/Tarungarg98"
              target="_blank"
              title="Github"
            >
              <img src={github_img} alt="Github"></img>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gargtarun13@gmail.com"
              title="Mail"
              target="_blank"
            >
              <img src={email_img}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/tarungarg98/"
              title="LinkedIn"
              target="_blank"
            >
              <img src={linkedin_img} alt="Linkedin"></img>
            </a>
          </div>
        </div>
        {/* <div className="col sm-2">
          <img src={tarun_img}></img>
        </div> */}
      </div>
    </div>
  );
};

export default IntroPage;
