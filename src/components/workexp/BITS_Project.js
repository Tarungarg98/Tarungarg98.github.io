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
            The objective of this study is to develop and compare artificial
            neural network (ANN) and multiple linear regression (MLR) models for
            predicting the wet-bulb effectiveness (ε), coefficient of
            performance (COP), and exergy efficiency (ηex) of a three-stage
            cooling system. The system operates in single-stage modes such as
            direct evaporative cooling (DEC), indirect evaporative cooling
            (IEC), and direct expansion (DX), as well as multi-stage modes like
            IEC-DEC, DEC-DX, and IEC-DEC-DX. The study aims to optimize the
            ideal cooling system for tropical climates and assess the prediction
            accuracy of the models.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The study utilizes experimental data collected from a three-stage
            evaporative cooling test rig from April to July 2019. The input
            parameters for the predictive models include ambient temperature,
            ambient relative humidity, conditioned air temperature, and
            corresponding relative humidity. ANN models, which mimic the human
            brain by extracting information from interconnected neuron
            structures, and MLR models, which establish relationships between
            dependent and independent variables, are developed. The models are
            trained using the experimental data to predict ε, COP, and ηex.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The study investigates the performance of single-stage evaporative
            cooling systems such as DEC and IEC, as well as multi-stage
            combinations like IEC-DEC, DEC-DX, and IEC-DEC-DX. The ANN and MLR
            models are developed and compared for their prediction accuracy.
            Statistical error indicators such as mean square error, root mean
            square error, error-index, mean relative error, mean absolute error,
            and correlation coefficient are used to assess the models'
            performance. The input parameters for the ANN models are selected
            based on their prediction accuracy, and the models are optimized by
            adjusting the number of neurons in the hidden layer.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            The study highlights the potential of ANN and MLR models in
            predicting the performance parameters of evaporative cooling
            systems. It reveals that the ANN models outperform the MLR method,
            exhibiting higher prediction accuracy with minimum mean square
            error. The study also identifies the ideal cooling system for
            tropical climates, with IEC-DEC exhibiting higher cooling capacity
            and COP in extreme summer conditions. However, the study
            acknowledges the competency of IEC-DEC-DX in providing all-weather
            cooling. The ANN models successfully predict the thermodynamic
            performance parameters within an error limit of ±10%. The research
            opens up possibilities for further exploration and improvement in
            predictive modelling of evaporative cooling systems using ANN and
            MLR techniques.
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
            The objective of this project is to design a device that utilizes
            image processing techniques to calculate the volume of a pseudocyst
            in the pancreas. The device aims to provide a non-invasive method
            for determining the volume of the pseudocyst using images obtained
            from endoscopy.
          </p>

          <div class="topic_head">Working Mechanism</div>
          <p>
            The device employs an unsupervised learning technique for volume
            prediction. The process begins with an input image, which is
            analyzed using image processing algorithms. The algorithm separates
            white and black pixels within the image. The white pixels,
            representing the pseudocyst region, are then grouped into clusters.
            The clustering is performed iteratively to create a smooth curve
            that represents the pseudocyst boundary.
          </p>

          <p>
            As the clustering continues, a convex hull is formed to enclose the
            clustered white pixels. To ensure accuracy, outliers are removed by
            eliminating any points outside 90% of the radius. Additionally,
            clusters with fewer than 3 points within a radius of 100 pixels are
            also treated as outliers and removed.
          </p>

          <p>
            The final step involves fitting the 50 clusters of white pixels
            using the convex hull as the definitive boundary of the pseudocyst.
            The black pixels within the hull, which represent the non-pseudocyst
            region, are further processed to obtain a precise estimation of the
            area. Finally, the estimated area is converted into volume by
            applying an angle-projection inversion technique.
          </p>

          <div class="topic_head">Development Process</div>
          <p>
            The device's development involved implementing the image processing
            algorithms necessary for pseudocyst volume calculation. The
            unsupervised learning technique was employed to analyze the image
            data and perform the necessary operations to extract the pseudocyst
            region and estimate its volume. The process was optimized through
            iterations and adjustments to improve accuracy and efficiency.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            This project represents a significant advancement in non-invasive
            pseudocyst volume calculation using image processing techniques.
            However, there is room for further improvement and refinement. The
            accuracy of volume estimation could be enhanced by considering
            additional factors and refining the image processing algorithms.
            Furthermore, the device's usability and accessibility could be
            improved through user-friendly interfaces and integration with
            existing endoscopy equipment. Continued research and development in
            this field could lead to advancements in diagnosing and monitoring
            pancreatic pseudocysts using non-invasive methods.
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
