import React from "react";
import cars24_img from "../images/cars24.png";
import Webpage from "./webpage_template";
import "bootstrap/dist/css/bootstrap.min.css";

const Cars24 = () => {
  const projects = [
    {
      id: "Fraud Detection in Cars Auction",
      name: "Fraud Detection in Cars Auction",
      description: (
        <div class="container">
          <h3>What is it about?</h3>
          <p>
            During bidding of Cars, there are many cases of frauds happening by
            dealers and sellers. Our objective is improve the existing model to
            raise flag on potential fraud cases with better precision.
          </p>
          <h3>How it works?</h3>
          <p>
            During auction, various parameters are checked and the audit model
            returns a score which is used to calculate the probability of fraud
            happening. In case of potential fraud cases, audit flag is raised
            and further investigation happens to avoid losses.
          </p>
          <h3>How we made it?</h3>
          <p>
            We started with forming our hypothesis on what cases can lead to
            possible frauds. Data cleaning was done and our hypothesis were
            checked on historical auction data, relevant details about dealers
            and sellers. The hypothesis which had significantly high fraud rate
            were added as a separate flag in addition to model score.
          </p>
          <h3>Scope for improvements?</h3>
          <p></p>
          <h3>Team</h3>
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
          <h3>What is it about?</h3>
          <p></p>
          <h3>How it works?</h3>
          <p></p>
          <h3>How we made it?</h3>
          <p></p>
          <h3>Scope for improvements?</h3>
          <p></p>
          <h3>Team</h3>
          <p>
            This project is being designed as my current project at Cars 24,
            along with Atish Jain.
          </p>
        </div>
      ),
    },
    {
      id: "Inventory Minimum Selling Price Prediction",
      name: "Inventory Minimum Selling Price Prediction",
      description: (
        <div class="container">
          <h3>What is it about?</h3>
          <p></p>
          <h3>How it works?</h3>
          <p></p>
          <h3>How we made it?</h3>
          <p></p>
          <h3>Scope for improvements?</h3>
          <p></p>
          <h3>Team</h3>
          <p>
            This project is being designed as my current project at Cars 24,
            along with Atish Jain.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="container">
      <Webpage
        companyname="Cars24"
        image={cars24_img}
        projects={projects}
      ></Webpage>
    </div>
  );
};

export default Cars24;
