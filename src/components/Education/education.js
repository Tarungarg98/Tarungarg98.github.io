import React from "react";
import bits_img from "./images/BITS.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./education.css";

const Education = () => {
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <hr></hr>
      <div className="row">
        <div className="col-md-4">
          <img src={bits_img} alt="BITS Logo"></img>
          <h3>BITS Pilani</h3>
          <h4>July 2016 - May 2021</h4>
        </div>
        <div className="col-md-8 content">
          <h2>Intergrated Dual Degree Course</h2>
          <h4>
            Bachelors of Engineering : Electrical and Electronics Engineering
          </h4>
          <h4> Master of Science : Economics</h4>
          <div className="brief">
            Studying at prestigious BITS Pilani, was an amazing enviroment for
            all-round development. Thanks to 0% attendance policy, you get
            enough chance to explore your interests and study at your own pace.
            I utilized this oportuntity to build my career in Data Science
            through various online course and projects with college professors.
            I managed to secure multiple internships in Data Science and
            delivered effetively with my strong skill set.
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Education;
