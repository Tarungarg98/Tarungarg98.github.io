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
            analyze and propose strategies for improving the efficiency of
            logistics operations within the company. The project focused on
            identifying factors that contributed to increased logistics costs
            and delays, with the ultimate goal of optimizing processes and
            reducing operational expenses.
          </p>
          <div className="topic_head">Our Findings and Recommendations</div>
          <p>
            After conducting a comprehensive study of various factors involved
            in the logistics operations of KEC International, our team
            identified several areas for improvement. We proposed strategies to
            optimize the number of laborers, provide targeted training to
            workers, and strategize the arrival of vehicles throughout the day.
            Additionally, we analyzed tasks that could be outsourced to external
            service providers, allowing the internal workforce to focus on
            critical activities. Our recommendations also included measures to
            reduce vehicle waiting time for outbound vehicles by optimizing the
            manufacturing schedule and designing training programs to utilize
            the workforce more effectively.
          </p>
          <div class="topic_head">Potential Impact</div>
          <p>
            Although the proposed recommendations from our project were not
            implemented during our tenure, they have the potential to
            significantly impact the logistics operations at KEC International.
            By optimizing labor resources, providing targeted training, and
            strategizing vehicle arrivals, the company can improve productivity,
            reduce operational costs, and minimize delays. Implementing the
            proposed measures can lead to smoother operations, reduced vehicle
            waiting time, and improved overall efficiency in the logistics
            process. These improvements would not only reduce expenses but also
            enhance customer satisfaction and contribute to increased
            profitability.
          </p>
          <div class="topic_head">Opportunities for Future Implementation</div>
          <p>
            While our project's recommendations were not implemented, there is a
            scope for future implementation to realize the benefits outlined. By
            leveraging the findings and insights from our study, KEC
            International can embark on a journey towards optimizing its
            logistics operations. This could involve the adoption of advanced
            analytics, predictive modeling techniques, and real-time monitoring
            to drive data-driven decision-making. Furthermore, exploring
            collaborations with external service providers for specific tasks
            and continuous monitoring of key performance indicators (KPIs) can
            help track progress and identify further areas of improvement. By
            embracing these opportunities, KEC International can enhance its
            logistics efficiency, reduce costs, and gain a competitive edge in
            the industry.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      KEC International is a prominent manufacturing company that manages
      extensive daily operations involving loading and unloading processes.
      Throughout my internship, I actively engaged in valuable discussions with
      my mentor,{" "}
      <a
        href="https://www.linkedin.com/in/saurabh-agarwal-176592162/"
        title="Saurabh Agarwal"
        target="_blank"
      >
        Saurabh Agarwal
      </a>
      , to enhance logistics Turnaround Time (TAT) by conducting a comprehensive
      analysis of vehicle waiting times. Drawing upon the insights gained from
      these discussions and my diligent efforts, I compiled a comprehensive
      report that encapsulated my findings and presented actionable suggestions
      to the company. This report aimed to optimize the overall efficiency of
      their logistics operations, ensuring seamless workflow and improved
      productivity. I believe that my dedication and analytical skills have
      positioned me well to thrive in challenging roles.
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
