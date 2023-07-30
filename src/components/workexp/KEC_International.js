import React from "react";
import kec_img from "./images/kec.png";
import CompanyPage from "./companypage_template";

const KEC_INTERNATIONAL = () => {
  const projects = [
    {
      id: "Vehicle Waiting Time Analysis",
      name: "Vehicle Waiting Time Analysis",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The Logistics Optimization Project at KEC International aimed to
            analyze and propose strategies for improving logistics efficiency
            and reducing operational expenses.
          </p>
          <div className="topic_head">Our Findings and Recommendations</div>
          <p>
            We identified areas for improvement, proposing strategies like
            optimizing laborers, targeted training, and efficient vehicle
            arrivals. Outsourcing certain tasks and reducing vehicle waiting
            time were also recommended.
          </p>
          <div class="topic_head">Potential Impact</div>
          <p>
            The proposed measures can significantly impact operations, improving
            productivity, reducing costs, and minimizing delays, leading to
            enhanced customer satisfaction and increased profitability.
          </p>
          <div class="topic_head">Opportunities for Future Implementation</div>
          <p>
            Leveraging our insights, KEC International can optimize logistics
            through advanced analytics, collaborations with external providers,
            and continuous monitoring of KPIs for ongoing improvement.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      During my internship at KEC International, I collaborated closely with my
      mentor,{" "}
      <a
        href="https://www.linkedin.com/in/saurabh-agarwal-176592162/"
        title="Saurabh Agarwal"
        target="_blank"
      >
        Saurabh Agarwal
      </a>
      , to streamline logistics Turnaround Time (TAT) through a detailed
      analysis of vehicle waiting times. By diligently compiling my findings
      into a comprehensive report, I presented actionable suggestions to
      optimize logistics operations, ensuring seamless workflow and improved
      productivity. This experience has honed my analytical skills and instilled
      a strong sense of dedication, preparing me for future challenges with
      confidence.
    </div>
  );
  return (
    <div className="container">
      <CompanyPage
        companyname="KEC International"
        designation="Logistic Intern"
        duration="May 2018 - July 2018"
        brief={brief}
        image={kec_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default KEC_INTERNATIONAL;
