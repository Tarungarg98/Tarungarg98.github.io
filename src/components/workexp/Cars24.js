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
            The development process begins with data fetching using SQL queries.
            Python is extensively used to process the data and build the feature
            engineering pipeline. Exploratory Data Analysis (EDA) is performed
            to evaluate the features and ensure data integrity. The XGBoost
            model is trained and deployed as a Flask API on AWS. Additionally,
            rule flags, which are correlated with past cancellations, are
            implemented to trigger dealer advance tokens.
          </p>
          <p>
            Regular model retraining and updates to fraud identification
            measures have reduced the cancellation rate from <b>18% to 8%</b>.
            In the latest retraining, survivorship bias was addressed by
            including cases in the training data that were blocked by the
            existing fraud model. We achieved an <b>AUC of 80%</b> by including
            new features and retaining information from the previous model.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            We aim to continously detect evolving fraudulent patterns and
            address survivorship bias in model retraining. Incorporating lost
            deal data due to the previous model's interference and deploying a
            CatBoost model for capturing categorical data efficiently might
            enhance performance.
          </p>
        </div>
      ),
    },
    {
      id: "Dynamic Auction",
      name: "Dynamic Auction",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The objective of this project is to implement a bidding system that
            adjusts dynamically based on historical bidding patterns. The
            primary goal is to set dynamic anchors and dynamic durations for the
            auction process and continually revise these anchors according to
            the observed behaviors and participation patterns of bidders. This
            in turn will help reducing the number of reauctions, getting quality
            bids and in turn, increasing the Deal Conversion.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The working mechanism involves analyzing historical bidding data to
            establish initial anchor points for auctions. These anchor points
            are dynamic, adapting to previous bidding patterns and behaviors.
            Additionally, the system continually monitors auction participation
            behaviors, bidder activity, and responses to the set anchors. Based
            on these observations, it revises and updates the anchor points to
            optimize the auction process dynamically.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The development process began by gathering historical bidding data
            and conducting an in-depth analysis to identify patterns and trends.
            Algorithms were developed to establish initial anchor points based
            on this historical data. Subsequently, a real-time monitoring system
            was implemented to observe bidder behaviors during live auctions.
            This system was integrated to dynamically adjust the anchor points
            based on real-time participation data, ensuring continual
            optimization of the auction process. The API is deployed over Google
            Kubernetes Engine (GKE) which is self-scalable to manage the load.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Enhancements could include refining the algorithms used to analyze
            historical data for better pattern recognition. We do plan to
            incorporate addition vehicle details to set the initial and revision
            factors at a much granular level.
          </p>
        </div>
      ),
    },
    {
      id: "Franchise OCB",
      name: "Franchise OCB",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The objective of this project is to develop a system that enables
            Cars24 franchises to effectively utilize the Cars24 platform for car
            conversions, facilitating business scale-up for both the franchises
            and Cars24.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            For a deal, franchises are first allowed to purchase cars for
            themselves. If they choose not to procure the cars, they can use the
            Cars24 platform to sell them to other dealers onboarded on the
            platform. They are provided with{" "}
            <b>acceptance probability slabs for different price points</b>,
            allowing them to negotiate with sellers and initiate a one-click-buy
            on our platform.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The development process began by utilizing historical conversion
            data and conducting an in-depth analysis to identify patterns and
            trends. While data from existing stores was available, we mapped it
            to align with new franchise stores for optimal results. Conversion
            probabilities for cars at different price levels were calculated and
            distributed into slabs for very low acceptance, low acceptance,
            medium acceptance, and high acceptance through custom-defined logic.
            This system dynamically adjusts price points based on real-time
            participation data, ensuring continual optimization of the auction
            process. The API is deployed on Google Kubernetes Engine (GKE),
            which is self-scalable to manage the load.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Enhancements could include refining the algorithms used to analyze
            historical data for better pattern recognition. We plan to
            incorporate anctual franchise bidding data to set the price range
            and factors at a much more optimal level.
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
        href="https://www.linkedin.com/in/pankaj-kumar-porwal-7b120929/"
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
      . Currently, I'm involved in aution efficiency to enhance conversions. I
      also gained exposure to Fraud Detection, Pricing for Australia Module and
      Stuck Inventory Liquidation, expanding my skill set.{" "}
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
