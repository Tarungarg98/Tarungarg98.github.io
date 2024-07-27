import React from "react";
import github_img from "./images/github.png";
import resume_img from "./images/resume.png";
import email_img from "./images/email.png";
import linkedin_img from "./images/linkedin.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./intro.css";

const IntroPage = () => {
  const changeView = () => {
    window.open("/data-science-journey/", "_blank");
  };
  return (
    <div>
      <div className="intro_page" id="intro_page">
        <div className="brief">
          <div className="myname">
            <h1 className="typewriter">Hi, I'm Tarun Garg</h1>
            <br></br>
            <h2 className="typewriter">Data Scientist 2 @ Ecom Express</h2>
          </div>
          <div className="about_me fade-in-left-to-right">
            Welcome to my personal website! I'm a passionate data scientist,
            skilled in leveraging data-driven insights to solve complex business
            challenges. With expertise in natural language processing, anomaly
            detection, and fraud modeling, I excel at applying advanced machine
            learning techniques to extract valuable insights. With a proven
            track record of collaborating with exceptional mentors, mentoring my
            juniors and contributing to impactful projects in renowned
            organizations, I am driven by a passion for continuous learning.
            Explore my website to learn more about my projects, expertise, and
            achievements. Let's connect and create something extraordinary
            together in the world of data science.
            <br></br>
            <center>
              <button class="blog_url" onClick={changeView}>
                Click here to check out my Data Science Journey
              </button>
            </center>
          </div>
        </div>
        <div className="icon">
          <a
            href="https://drive.google.com/file/d/1KZuAwK3G_uOe_JY8quUhza_rsdpc9j3r/"
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
      <br></br>
    </div>
  );
};

export default IntroPage;
