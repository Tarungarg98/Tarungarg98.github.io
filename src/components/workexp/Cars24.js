import React from "react";
import cars24_img from "./images/cars24.png";
import CompanyPage from "./companypage_template";
import "bootstrap/dist/css/bootstrap.min.css";

const Cars24 = () => {
  const projects = [
    {
      id: "Fraud Detection in Cars Auction",
      name: "Fraud Detection in Cars Auction",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The objective is to predict deal cancellations in the C2B used car
            segment of Cars24 based on various parameters. The goal is to
            prevent inventory getting stuck and potential losses by identifying
            deals with a high probability of cancellation.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            In the C2B segment, the auction involves multiple dealers, and the
            winning dealer's behavior, bidding patterns, and inspection reports
            are evaluated to determine <b>cancellation probability</b>. When the
            score exceeds a threshold, a dealer advance token is initiated to
            mitigate the risk.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            Data is fetched from using SQL queries, python is extensively used
            to process the data and build the feature engineering pipeline.
            Exploratory Data Analysis evaluates the features and ensures data
            integrity. XGBoost trained model is deployed as a flask API on AWS.
            Additionally, rule flags, correlated with past cancellations, are
            implemented to trigger dealer advance tokens. Retraining the model
            and regular modifications to fraud identification measures have
            reduced the cancellation rate from 18% to 10%.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            We aim to detect evolving fraudulent patterns and address
            survivorship bias in model retraining. Incorporating lost deal data
            due to the previous model's interference and deploying a CatBoost
            model for categorical data might enhance performance.
          </p>
        </div>
      ),
    },
    {
      id: "Australia Pricing Module",
      name: "Australia Pricing Module",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            Our goal was to develop a pricing model and API for the Australian
            market, gathering data from auctions, clickstream, and MSRP data to
            predict vehicle depreciation accurately. This model aimed to provide
            valuable insights for pricing used cars in Australia.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            We automated data collection from auction houses, used clickstream
            data to understand buyer behavior, and leveraged MSRP data for
            initial vehicle values and depreciation rates. Combining these
            datasets, we built a robust pricing model considering factors like
            vehicle age, mileage, popularity, and market demand. The model
            offers real-time pricing predictions through a GCP-hosted API.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            We utilized third-party data from KBB and Cars24, performing
            extensive data cleaning and analysis. Statistical and machine
            learning techniques helped identify relevant features and build
            predictive models. The developed API integrated the pricing model,
            offering accurate price estimations based on user inputs.
          </p>

          <div class="topic_head">Scope for improvements?</div>
          <p>
            Improving in-house pricing data quality and reducing dependency on a
            single data source by analyzing data from multiple providers would
            lead to a more comprehensive assessment of fair automotive prices in
            the Australian market.
          </p>
        </div>
      ),
    },
    {
      id: "Inventory Minimum Selling Price Prediction",
      name: "Inventory Minimum Selling Price Prediction",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The inventory liquidation project aimed to optimize the liquidation
            process and maximize returns by accurately estimating the selling
            price of stuck inventory.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The model analyzes historical data and supply-demand dynamics to
            estimate the liquidation price. By considering market conditions and
            relevant factors, it generated price estimates aligned with
            real-time conditions, ensuring efficient inventory liquidation.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            Data collection included historical liquidation data, vehicle
            condition information, and supply-demand dynamics being leveraged to
            develop a model incorporating variables like inventory age, market
            trends and product condition. After thorough preprocessing and
            feature engineering, we experimented with different target
            variables. Deviation from the bought price emerged as the most
            suitable target, representing incurred losses during liquidation. We
            trained a Catboost model using the processed data and fine-tuned,
            validated, and extensively tested it. The model achieved 70% price
            prediction accuracy within +/-5% and 90% within +/-10% of the actual
            selling price.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            The model's accuracy could be further enhanced by incorporating
            factors like holding costs and condition deterioration. Optimizing
            liquidation rates would help manage losses effectively and improve
            margins. Future versions should integrate these insights directly
            into the data pipeline for more accurate predictions and optimized
            strategies.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      During my time at Cars24, I've been a valuable asset to the company. I
      contributed to the Fraud Model, identifying crucial fraudulent patterns
      and collaborated with a skilled team under mentorship of{" "}
      <a
        href="https://www.linkedin.com/in/pankaj-porwal-7b120929/"
        title="Pankaj Porwal"
        target="_blank"
      >
        Dr Pankaj Porwal
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/atishnits/"
        title="Atish Jain"
        target="_blank"
      >
        Atish Jain
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/prathmesh-gargava-0ab5a821/"
        title="Prathmesh Gargava"
        target="_blank"
      >
        Prathmesh Gargava
      </a>{" "}
      and{" "}
      <a
        href="https://www.linkedin.com/in/naresh-mehta-68a52811/"
        title="Naresh Mehta"
        target="_blank"
      >
        Naresh Mehta
      </a>
      . Currently, I'm involved in retraining an updated version of the model
      for enhanced effectiveness. I also gained exposure to Pricing for
      Australia Module and Stuck Inventory Liquidation, expanding my skill set.{" "}
      <a href="#awards">Recognitions</a> from the organization validate my
      dedication, and I'm proud of the positive impact I've made.
      {/* , I actively collaborated with my colleagues{" "}
      <a
        href="https://www.linkedin.com/in/kanaad-kesharwani-1ab38115a/"
        title="Kanaad Kesharwani"
        target="_blank"
      >
        Kanaad Kesharwani
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/aman-kumar-3b8970147/"
        title="Aman Kumar"
        target="_blank"
      >
        Aman Kumar
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/ravi-saini-194933183/"
        title="Ravi Saini"
        target="_blank"
      >
        Ravi Saini
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/mohit-yadav-3b183630/"
        title="Mohit Yadav"
        target="_blank"
      >
        Mohit Yadav
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/siddhantpathak1996/"
        title="Siddhant Pathak"
        target="_blank"
      >
        Siddhant Pathak
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/ankush-kumar-singh-67434998/"
        title="Ankush Kumar Singh"
        target="_blank"
      >
        Ankush Kumar Singh
      </a>
      , Abhishek Bhardwaj */}
    </div>
  );
  return (
    <div className="container">
      <CompanyPage
        companyname="Cars24"
        designation="Data Scientist"
        duration="May 2021 - Present"
        brief={brief}
        image={cars24_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default Cars24;
