import React from "react";
import ecom_express_img from "./images/ecom_express.png";
import CompanyPage from "./companypage_template";
import "bootstrap/dist/css/bootstrap.min.css";

const EcomExpress = () => {
  const projects = [
    {
      id: "Identifying Geo Codes for an Address",
      name: "Identifying Geo Codes for an Address",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The objective is to predict Geo Codes and the error radius of the
            destination address for the respective Airway Bill Numbers to ensure
            accurate and timely delivery.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            Predicting Geo codes of an address falls broadly under two
            categories. For addresses already in the system, we use historical
            delivery geocodes to predict the precise geo code and error radius.
            For new addresses, we have trained our custom Address GPT to predict
            the geocodes using H3 Cells.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            For the midoid approach, we used historical delivered geocodes which
            were labeled as good by our cleaning data pipeline. These geocodes
            were processed by taking the medians across latitude and longitude.
            Considering our data can have odd/even number of data points, we can
            have 1-4 median lat-long combinations.
          </p>
          <p>
            For identifying the best lat-long from these combinations, we
            calculated the haversine distance from all data points for each
            candidate. The candidate with the minimum distance for all points is
            chosen as the final geocode for the address. For error radius, we
            have different scenarios based on the number of data points in the
            data.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Outlier detection can be applied to ensure we have quality
            historical data to predict on. Clustering techniques can also be
            used to efficiently find the geocodes.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      After an impactful stint at Cars24, moving on to Ecom Express came with a
      load of responsibilities. I joined at a senior position and quickly took
      over existing projects, making an impact within a month of joining.
      Leveraging my experience in writing quality code, I ensured that all my
      contributions were modular, easy to read, and understandable from the very
      beginning.
    </div>
  );
  return (
    <div className="container">
      <CompanyPage
        companyname="Ecom Express"
        designation="Data Scientist 2"
        duration="June 2024 - Present"
        brief={brief}
        image={ecom_express_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default EcomExpress;
