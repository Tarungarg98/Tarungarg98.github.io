import React from "react";
import walmartLabs_img from "./images/walmart.png";
import CompanyPage from "./companypage_template";

const WalmartLabs = () => {
  const projects = [
    {
      id: "Anamoly_Detection",
      name: "Anamoly Detection",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            Walmart Labs' Power Consumption Anomaly Detection Project aimed to
            detect abnormal power flow and alert on significant variations to
            prevent financial losses and operational disruptions.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The project used Dash-plotly for a user-friendly interface,
            predicting power consumption and finding anomalies anomalies. It
            displayed graphs and faults to understand causes effectively.
            Anomalies were categorized when actual values fell outside the 95%
            confidence interval of the predicted value.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            Dataset contained temperature, dewpoint, day of the week, hour of
            the day, meter name, store number, and actual power consumption in
            kWh. Exploratory data analysis and time series analysis provided
            insights. The data did not exhibit significant seasonal or trend
            components, thus Artificial Neural Network (ANN) was chosen for
            further development.
          </p>
          <p>
            The dataset had 97,568 records for the Dehumidifier Meter across six
            stores. Data cleaning involved removing zero and extreme values
            lying beyond 2*standard deviation. Day of the week and hour of the
            day were one-hot encoded. Data was split into train, test and oot
            (80:10:10). The ANN model with a linear output and mse as the cost
            function, was trained using power consumption as the output
            variable.
          </p>
          <div class="topic_head">Impact and Scope for Improvement</div>
          <p>
            The project has potential benefits to provide substantial benefits
            by minimizing power-related disruptions and financial losses. Future
            work involves integrating it into power management systems, refining
            anomaly detection algorithms, and exploring advanced techniques like
            ensemble learning and recurrent neural networks for more efficient
            power management at Walmart Labs.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      Working on a large-scale project at an MNC has been a remarkable
      opportunity for professional growth. I contributed to detecting anomaly
      power consumption in Walmart stores using diverse ML models and
      approaches. Mentorship from{" "}
      <a
        href="https://www.linkedin.com/in/ritish-menon/"
        title="Ritish Menon"
        target="_blank"
      >
        Ritish Menon
      </a>{" "}
      and{" "}
      <a
        href="https://www.linkedin.com/in/mainak-mitra-a5152171/"
        title="Mainak Mitra"
        target="_blank"
      >
        Mainak Mitra
      </a>{" "}
      were invaluable for driving this. Making meaningful impact on the
      company's operations, optimizing resource utilization with ML techniques,
      solidified my passion for data-driven approaches to drive efficiency.
    </div>
  );
  return (
    <div className="container">
      <CompanyPage
        companyname="Walmart Labs"
        designation="Data Science Intern"
        duration="May 2020 - July 2020"
        brief={brief}
        image={walmartLabs_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default WalmartLabs;
