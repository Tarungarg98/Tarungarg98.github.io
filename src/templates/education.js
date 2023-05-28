import React from "react";
import bits_img from "../images/BITS.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/education.css";

const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="row">
        <div className="col-4">
          <img src={bits_img}></img>
          <h3>BITS Pilani</h3>
          <h4>July 2016 - May 2021</h4>
        </div>
        <div className="col-8 brief">
          <h2 className="myname">Intergrated Dual Degree Course</h2>
          <br></br>
          <h4>
            Bachelors of Engineering : Electrical and Electronics Engineering
          </h4>
          <h4> Master of Science : Economics</h4>
          Studying at prestigious BITS Pilani, was an amazing enviroment for
          all-round development. Thanks to 0% attendance policy, you get enough
          chance to explore your interests at the same time, you can study at
          your own pace. I utilized this oportuntity to build my career in Data
          Science through various online course and projects with college
          professors. I managed to secure multiple internships in Data Science
          and with my strong skills, I managed to leave a strong impact in all
          my projects. My parents, family, colleagues, professors all were very
          supportive throughout for an excellent growing opportunity during my
          college.
        </div>
      </div>
    </div>
  );
};

export default Education;
