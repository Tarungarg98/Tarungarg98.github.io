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
          <div class="topic_head">What is it about?</div>
          <p>
            During bidding of Cars, there are many cases of frauds happening by
            dealers and sellers. Our objective is improve the existing model to
            raise flag on potential fraud cases with better precision.
          </p>
          <div class="topic_head">How it works?</div>
          <p>
            During auction, various parameters are checked and the audit model
            returns a score which is used to calculate the probability of fraud
            happening. In case of potential fraud cases, audit flag is raised
            and further investigation happens to avoid losses.
          </p>
          <div class="topic_head">How we made it?</div>
          <p>
            We started with forming our hypothesis on what cases can lead to
            possible frauds. Data cleaning was done and our hypothesis were
            checked on historical auction data, relevant details about dealers
            and sellers. The hypothesis which had significantly high fraud rate
            were added as a separate flag in addition to model score.
          </p>
          <div class="topic_head">Scope for improvements?</div>
          <p></p>
          <div class="topic_head">Team</div>
          <p>
            This project is being designed as my current project at Cars 24,
            along with Atish Jain.
          </p>
        </div>
      ),
    },
    {
      id: "Australia Pricing Module",
      name: "Australia Pricing Module",
      description: (
        <div class="container">
          <div class="topic_head">What is it about?</div>
          <p></p>
          <div class="topic_head">How it works?</div>
          <p></p>
          <div class="topic_head">How we made it?</div>
          <p></p>
          <div class="topic_head">Scope for improvements?</div>
          <p></p>
        </div>
      ),
    },
    {
      id: "Inventory Minimum Selling Price Prediction",
      name: "Inventory Minimum Selling Price Prediction",
      description: (
        <div class="container">
          <div class="topic_head">What is it about?</div>
          <p></p>
          <div class="topic_head">How it works?</div>
          <p></p>
          <div class="topic_head">How we made it?</div>
          <p></p>
          <div class="topic_head">Scope for improvements?</div>
          <p></p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      Since joining Cars24 as a graduate, I have consistently proven myself to
      be a valuable asset to the company. I embarked on my journey by working on
      the Fraud Model, where I successfully identified crucial fraudulent
      patterns in dealer historical behavior and seller-dealer collusions.
      Presently, I am actively involved in retraining an updated version of the
      model to enhance its effectiveness. Additionally, I gained exposure to the
      Pricing for Australia Module and Stuck Inventory Liquidation, broadening
      my skill set. Throughout my tenure, I have received numerous recognitions
      from the organization for my significant contributions. These
      acknowledgments serve as a testament to my dedication and commitment to
      delivering impactful results. I am proud to have made a positive impact on
      Cars24's operations, and I am eager to continue leveraging my skills and
      knowledge to drive further success within the company.
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
