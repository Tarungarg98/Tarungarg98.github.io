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
            Cars24 is engaged in the used car business, operating in the C2B and
            C2C segments. In the C2B segment, the flow starts with the seller
            selling the car to the dealer who wins the auctions conducted on the
            Cars24 platform. The objective is to determine the probability of
            deal cancellations based on various parameters. Deal cancellations
            can result in inventory getting stuck and potentially leading to
            losses.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            During the auction, multiple dealers participate, and the deal is
            eventually finalized with the winning dealer and the customer. At
            this stage, we evaluate the transaction using various parameters
            including the dealer's historical behavior, bidding patterns,
            seller-dealer collusions, and inspection report. The generated score
            represents the <b>cancellation probability</b>, and when it exceeds
            a certain threshold, a dealer advance token is issued to mitigate
            the risk and proceed with the transaction.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The development process begins by setting hypotheses to select
            variables that provide significant information for predicting
            cancellations. The model training data is obtained by fetching data
            from a database using SQL queries. The data is then extensively
            processed using Python to build the entire feature pipeline.
            Exploratory Data Analysis is performed to evaluate the features and
            ensure data integrity. The model is trained using XGBoost and
            deployed as an API on AWS. We manage this API and regularly update
            it based on business requests. In addition to the model, we have
            implemented several rule flags that have shown a high correlation
            with cancellations in the past. If these rule flags are triggered, a
            dealer advance token is generated following a similar process as the
            model. Retraining the model and making regular modifications to the
            fraud identification measures have contributed to reducing the
            cancellation rate from <b>18% to 7%</b>, while maintaining the same
            flag rate for the Fraud Model.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            As fraudulent patterns evolve, we strive to stay updated and utilize
            these patterns to detect fraudulent transactions. We have identified
            a major issue of survivorship bias in the model retraining exercise.
            To address this, we have explored various methods to incorporate
            cases where deals were lost due to interference from the previous
            model. Including these data points in the training exercise is
            undoubtedly beneficial for building a robust model. Currently, we
            are building a CatBoost model to effectively handle categorical
            data, and we expect significant improvements in model performance
            once this model is deployed.
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
            Our objective was to develop a pricing model and API specifically
            for the Australian market. The aim was to gather data from various
            auction houses through automated scraping processes and utilize
            clickstream and Manufacturer's Suggested Retail Price (MSRP) data to
            analyze buying patterns and predict vehicle depreciation. This
            pricing model would provide valuable insights for pricing used cars
            accurately in the Australian market.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            To achieve our objective, we implemented a working mechanism that
            involved several steps. First, we set up automated cron jobs to
            scrape data from multiple auction houses. This allowed us to gather
            a comprehensive dataset of car listings, including details such as
            make, model, year, mileage, condition, and auction prices. It
            ensured that our dataset was up-to-date and comprehensive. Next, we
            incorporated clickstream data, which provided valuable information
            about user behavior and preferences while searching for and
            purchasing vehicles. By analyzing this data, we gained insights into
            buyer trends and decision-making processes.
          </p>

          <p>
            Furthermore, we utilized Manufacturer's Suggested Retail Price
            (MSRP) data to understand the initial value of vehicles and their
            depreciation rates over time. By combining the auction house data,
            clickstream data, and MSRP data, we developed a robust pricing model
            that could accurately predict the depreciation of used cars in the
            Australian market. The model took into account various factors,
            including the age of the vehicle, mileage, make and model
            popularity, and market demand, to provide accurate pricing
            recommendations. The API is hosted over GCP and is used to predict
            real-time pricing of cars.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            We had third party data from KBB and in-house data of Cars24 along
            with scrapped data of auction houses as our training data. Once we
            obtained the necessary data, we performed extensive data cleaning
            and preprocessing to ensure data integrity and consistency.
          </p>
          <p>
            Next, we conducted thorough analyses on clickstream data and MSRP
            data to understand buying patterns and depreciation trends. This
            involved applying statistical and machine learning techniques to
            identify relevant features and build predictive models. We
            iteratively refined and validated our models to achieve high
            accuracy in predicting vehicle depreciation.
          </p>
          <p>
            Finally, we developed an API that integrated the pricing model and
            made it accessible to users. This API allowed users to input
            relevant vehicle information and receive accurate price estimations
            based on our predictive model. The API was designed to be
            user-friendly, efficient, and scalable, ensuring a seamless
            experience for our use case in the Australian automotive market.
          </p>

          <div class="topic_head">Scope for improvements?</div>
          <p>
            In the Australia module, we encountered challenges due to the noisy
            nature of the data, which impacted the model's performance. To
            address this, one potential area for improvement is to focus on
            enhancing the quality of in-house pricing data and incorporating a
            wider range of data points. By having more accurate and
            comprehensive data, the model's performance can be improved, leading
            to more reliable price predictions.
          </p>
          <p>
            Furthermore, it is essential to reduce dependency on a single data
            source and instead analyze data from multiple sources. This approach
            can help mitigate any biases or limitations associated with a
            specific data provider, allowing for a more comprehensive and
            balanced assessment of fair automotive prices in the market.
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
            The objective of the inventory liquidation project was to help
            liquidate stuck inventory by estimating the liquidation price using
            historical data and supply-demand analysis. The goal was to develop
            a model that could accurately predict the selling price of the
            inventory, enabling the company to optimize the liquidation process
            and maximize returns.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The working mechanism involved analyzing historical data and
            considering supply-demand dynamics to determine the factors
            influencing the selling price of the inventory. The developed model
            incorporated various variables, such as inventory age, market
            trends, product condition, and other relevant factors to estimate
            the liquidation price. By leveraging this information, the model
            could generate price estimates that aligned with the market
            conditions, ensuring more efficient inventory liquidation.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The development process for the inventory liquidation model involved
            several steps. Initially, we identified the relevant parameters for
            predicting the liquidation price of cars in the inventory. Data
            collection was performed, including historical liquidation data,
            vehicle condition information, and supply-demand dynamics. The
            collected data underwent thorough preprocessing and feature
            engineering to extract meaningful insights. We experimented with
            different target variables, including actual price prediction and
            deviations from the predicted and bought prices. It was observed
            that the deviation from the bought price served as the most suitable
            target variable, as it accurately represented the loss incurred
            during liquidation. We trained a Catboost model using the processed
            data to build the inventory liquidation model. The model was
            fine-tuned, validated, and extensively tested to ensure its accuracy
            and performance. As a result, the model demonstrated the ability to
            predict 70% of prices within +/-5% and 90% of prices within +/-10%
            of the actual selling price.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            While the developed model showed promising results, there are still
            opportunities for further improvements. One observation was that
            losses increased significantly with the age of the inventory. To
            address this, we applied additional factors to the model
            predictions, aiming to manage the liquidation rate while improving
            margins. In future versions of the model, it would be beneficial to
            incorporate this information directly into the data pipeline.
            Additionally, external factors such as holding costs and condition
            deterioration could be better captured and integrated into the
            model, allowing for more accurate predictions and optimized
            liquidation strategies.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      Since joining Cars24 as a graduate, I have consistently proven myself to
      be a valuable asset to the company. I embarked on my journey by working on
      the Fraud Model, where I successfully identified crucial fraudulent
      patterns in dealer historical behavior and seller-dealer collusions. Under
      the mentorship of{" "}
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
      </a>{" "}
      and{" "}
      <a
        href="https://www.linkedin.com/in/naresh-mehta-68a52811/"
        title="Naresh Mehta"
        target="_blank"
      >
        Naresh Mehta
      </a>
      , I actively collaborated with my colleagues{" "}
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
      , Abhishek Bhardwaj to drive impactful results. Presently, I am actively
      involved in retraining an updated version of the model to enhance its
      effectiveness. Additionally, I gained exposure to the Pricing for
      Australia Module and Stuck Inventory Liquidation, further expanding my
      skill set. Throughout my tenure, I have received numerous recognitions
      from the organization, which serve as a testament to my dedication and
      commitment to delivering impactful results. I am proud to have made a
      positive impact on Cars24's operations, and I am eager to continue
      leveraging my skills and knowledge to drive further success within the
      company.
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
