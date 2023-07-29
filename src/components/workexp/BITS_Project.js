import React from "react";
import CollegeProjects from "./college_project_template";

const BITS_Project = () => {
  const projects = [
    {
      id: "Predictive assessment from ANN and MLR models to optimize the ideal evaporative / hybrid cooler based on experimental observations ( Published : Journal of Building Engineering )",
      name: "Predictive assessment from ANN and MLR models to optimize the ideal evaporative / hybrid cooler based on experimental observations ( Published : Journal of Building Engineering )",
      description: (
        <div class="container">
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S2352710221011141"
            title="Paper Link"
            target="_blank"
          >
            Research Paper Link
          </a>
          <div class="topic_head">Objective</div>
          <p>
            This study aims to develop and compare artificial neural network
            (ANN) and multiple linear regression (MLR) models for predicting the
            wet-bulb effectiveness (ε), coefficient of performance (COP), and
            exergy efficiency (ηex) of a three-stage cooling system. The system
            operates in single-stage modes such as direct evaporative cooling
            (DEC), indirect evaporative cooling (IEC), and direct expansion
            (DX), as well as multi-stage modes like IEC-DEC, DEC-DX, and
            IEC-DEC-DX. The study aims to optimize the ideal cooling system for
            tropical climates and assess the prediction accuracy of the models
            using ambient temperature, ambient relative humidity, conditioned
            air temperature, and corresponding relative humidity as input
            features.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            Experimental data collected from a three-stage evaporative cooling
            test rig from April to July 2019 is used as input for the predictive
            models. The ANN models, mimicking the human brain with
            interconnected neuron structures, and MLR models, establishing
            relationships between variables, are developed and trained using the
            data to predict ε, COP, and ηex.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The performance of single-stage evaporative cooling systems like DEC
            and IEC, and multi-stage combinations such as IEC-DEC, DEC-DX, and
            IEC-DEC-DX, is investigated. ANN and MLR models are developed and
            compared for prediction accuracy using various statistical error
            indicators. The input parameters for the ANN models (ambient
            temperature, ambient relative humidity, conditioned air temperature,
            and corresponding relative humidity) are selected based on their
            accuracy, and the models are optimized by adjusting the number of
            neurons in the hidden layer.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            The study highlights the potential of ANN and MLR models in
            predicting the performance parameters of evaporative cooling
            systems. ANN models outperform MLR, exhibiting higher prediction
            accuracy with minimum mean square error. The ideal cooling system
            for tropical climates is identified, with IEC-DEC showing higher
            cooling capacity and COP in extreme summer conditions, and
            IEC-DEC-DX providing all-weather cooling. The ANN models
            successfully predict the thermodynamic performance parameters within
            an error limit of ±10%. The research opens up possibilities for
            further exploration and improvement in predictive modeling of
            evaporative cooling systems using ANN and MLR techniques.
          </p>
        </div>
      ),
    },
    {
      id: "Calculating the volume of a pseudocyst in the pancreas with image processing",
      name: "Calculating the volume of a pseudocyst in the pancreas with image processing",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            Develop a device for non-invasive calculation of pancreatic
            pseudocyst volume using image processing techniques from endoscopy
            images.
          </p>

          <div class="topic_head">Working Mechanism</div>
          <p>
            Utilizes unsupervised learning to predict the pseudocyst volume.
            Processes input images by separating white and black pixels, forming
            clusters of white pixels iteratively decreasing the clusters to 50
            to represent the pseudocyst boundary, and creating a convex hull to
            enclose the pseudocyst region. Outliers are removed by eliminating
            any points outside 90% of the radius. Additionally, clusters with
            fewer than 3 points within a radius of 100 pixels are also treated
            as outliers and removed. Black pixels within the hull are processed
            to estimate the area, and angle-projection inversion is applied to
            convert the area into volume.
          </p>

          <div class="topic_head">Development Process</div>
          <p>
            Implemented image processing algorithms and unsupervised learning
            techniques for pseudocyst volume calculation. Optimized the process
            through iterations and adjustments to enhance accuracy and
            efficiency.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Opportunities for improvement include refining image processing
            algorithms for more accurate volume estimation and enhancing
            usability through user-friendly interfaces and integration with
            existing endoscopy equipment. Ongoing research could lead to
            advancements in non-invasive diagnosis and monitoring of pancreatic
            pseudocysts.
          </p>
        </div>
      ),
    },
  ];
  const prof_name = (
    <div>
      <a href="https://www.linkedin.com/in/santanu-prasad-datta-29a983109/">
        Guided by : Dr. Santanu Prasad Datta
      </a>
    </div>
  );
  return (
    <div className="container">
      <CollegeProjects
        prof_name={prof_name}
        duration="Jan 2019 - June 2020"
        projects={projects}
      ></CollegeProjects>
    </div>
  );
};

export default BITS_Project;
