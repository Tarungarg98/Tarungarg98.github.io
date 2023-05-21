import React from "react";
import kec_img from "../images/kec.png";
import Webpage from "./webpage_template";

const KEC_INTERNATIONAL = () => {
  const projects = [
    {
      id: "Vehicle Waiting Time Analysis",
      name: "Vehicle Waiting Time Analysis",
      description: (
        <div class="container">
          <h3>What is it about?</h3>
          <p>
            Logistics is a significant part of the industry. Any delay can lead
            to a massive cost to the company as all inbound/outbound of goods
            should be continuous. Any idle time increases the inventory cost by
            a significant margin. In this project, we aim to analyse the reasons
            leading to an increase in logistics cost.
          </p>
          <h3>What we found?</h3>
          <p>
            We studied various factors involved in the logistics of KEC
            International. Some of the methods proposed were to optimize the
            number of labours, proper training of workers, vehicles arrival
            throughout the day. We also did an analysis about which task can be
            outsourced so the focus on rest can be improved. We proposed various
            measures to reduce vehicle waiting time by 8% of outbound vehicles
            by optimizing manufacturing schedule. We also assisted the
            organization in designing training programs for workers to utilize
            workforce efficiently.
          </p>
          <h3>Team</h3>
          <p>
            This project was designed during my Summer Internship at KEC
            International in 2018.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="container">
      <Webpage
        companyname="KEC International"
        image={kec_img}
        projects={projects}
      ></Webpage>
    </div>
  );
};

export default KEC_INTERNATIONAL;
