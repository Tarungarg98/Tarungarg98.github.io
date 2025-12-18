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
            <h2 className="typewriter">Senior Data Scientist @ Zomato</h2>
          </div>
          <div className="about_me fade-in-left-to-right">
            Welcome to my personal website! I'm a Senior Data Scientist at
            Zomato, heading marketing-related data science projects. With 5+
            years of experience in logistics optimization, fraud detection, and
            growth analytics, I build end-to-end ML solutions that drive
            measurable business impact—from pLTV models for Google Ads to
            geospatial analytics and intelligent recommendation systems. I've
            delivered high-impact projects at Zomato, Ecom Express, Cars24, and
            Walmart Labs, collaborating across teams to translate complex data
            challenges into scalable solutions. Explore my work to see how I
            leverage machine learning and strategic thinking to solve real-world
            business problems.
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
