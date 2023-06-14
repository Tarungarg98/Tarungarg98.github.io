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
            The Power Consumption Anomaly Detection Project at Walmart Labs
            aimed to detect abnormal power flow and raise alerts in case of
            significant variations in power consumption. The project's goal was
            to minimize power breakdowns, power cuts, and short circuits, which
            could lead to financial losses and disrupt operations in offices,
            industries, and showrooms.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The project utilized a live and interactive user interface designed
            using Dash-plotly. Input parameters related to power consumption
            were passed to the model, which predicted power consumption and
            generated a graph along with any detected anomalies. The user
            interface displayed current and previous faults, allowing users to
            visualize graphs and input parameters to understand the causes of
            faults effectively.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The model was developed using unsupervised learning techniques. The
            provided dataset included temperature, dewpoint, day of the week,
            hour of the day, meter name, store number, and actual power
            consumption in kWh. Exploratory data analysis and time series
            analysis were performed to gain insights into the data. However, as
            the data did not exhibit significant seasonal or trend components,
            Artificial Neural Networks (ANN) were chosen for further analysis.
          </p>
          <p>
            For ANN, day of the week and hour of the day were encoded using
            one-hot encoding. The dataset consisted of 97,568 records for the
            Dehumidifier Meter across six different stores. Data cleaning was
            conducted by removing values that were either zero or lying above
            the mean plus two times the standard deviation. The dataset was
            shuffled, and then split into a training set (80%), validation set
            (10%), and testing set (10%).
          </p>
          <p>
            The ANN model, comprising a single hidden layer with a linear output
            layer, was trained using power consumption as the output variable.
            The Adam optimizer with mean squared error as the cost function was
            employed, with a batch size of 32. Early stopping was implemented to
            prevent overfitting. The front-end was designed using Dash-plotly to
            display the model results through graphs. Anomalies were categorized
            as instances where the actual value lay outside the 95% confidence
            interval of the predicted value.
          </p>
          <div class="topic_head">Impact and Scope for Improvement</div>
          <p>
            Although the project successfully developed a model for power
            consumption anomaly detection, its implementation and impact were
            not realized during the course of the project. However, the model
            has the potential to provide substantial benefits to Walmart Labs by
            minimizing power-related disruptions and financial losses. Future
            efforts could focus on integrating the developed model into the
            company's existing power management systems, conducting real-time
            monitoring, and refining the anomaly detection algorithms for
            enhanced accuracy. Additionally, exploring the incorporation of
            other data sources and advanced techniques, such as ensemble
            learning or recurrent neural networks, could further improve the
            model's performance and contribute to more efficient power
            management within Walmart Labs.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      Working for MNC on a large-scale project has been an exceptional
      opportunity for professional growth. I had the privilege of contributing
      to the company's efforts in detecting anomaly power consumption in Walmart
      stores through the application of various approaches and machine learning
      (ML) models. During this project, I received invaluable guidance and
      mentorship from{" "}
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
      who played crucial roles in my development. I am proud to have made a
      meaningful impact on the company's operations by leveraging ML techniques
      to identify and address abnormal power consumption patterns. This
      experience has further solidified my passion for utilizing data-driven
      approaches to drive efficiency and optimize resource utilization.
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
