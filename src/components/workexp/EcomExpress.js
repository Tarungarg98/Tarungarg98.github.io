import React from "react";
import ecom_express_img from "./images/ecom_express.png";
import CompanyPage from "./companypage_template";
import "bootstrap/dist/css/bootstrap.min.css";

const EcomExpress = () => {
  const projects = [
    {
      id: "Reattempt Delivery Success Prediction",
      name: "Reattempt Delivery Success Prediction",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The goal of this project was to develop a ML-based solution to
            predict the success probability of reattempted deliveries.
            Reattempted deliveries generally have a low success rate and are
            often deprioritized by delivery centers. By accurately ranking
            pending deliveries based on their likelihood of success, the project
            aimed to optimize resource allocation, improve delivery efficiency,
            and reduce operational costs, saving valuable time and effort.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The solution leverages historical delivery data to analyze patterns
            and predict the likelihood of successful reattempts. By using
            features such as customer behavior, geographic trends, past delivery
            interactions, and logistical parameters, the model generates a
            success probability score for each reattempt. Deliveries are then
            ranked in real-time, allowing delivery centers to focus their
            resources on high-priority cases. This ranking system ensures that
            time and resources are spent on deliveries with the highest
            likelihood of success, significantly enhancing operational
            efficiency.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The project began with the collection and preparation of extensive
            historical delivery data, including key attributes such as delivery
            outcomes, timestamps, customer response patterns, and geolocation
            data. After meticulous feature engineering, the most impactful
            variables influencing success rates were identified. A custom deep
            learning model was then developed and trained on labeled datasets to
            accurately predict success probabilities. The model’s performance
            was validated against real-world data, achieving a 90% success rate
            in forecasting conversions, while reducing the overall attempt ratio
            to 55%. Finally, the solution was deployed on a AWS Lambda to enable
            real-time predictions and seamless integration with delivery center
            workflows.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            While the model demonstrated remarkable accuracy and efficiency,
            there is still room for enhancement. Incorporating additional data,
            such as the shipment history, delivery pattern and customer-specific
            preferences, could further improve prediction accuracy. Advanced
            clustering techniques could be employed to group similar delivery
            zones, enabling more localized and precise predictions.
            Additionally, utilizing advanced deep learning algorithms like LSTM,
            Transformers could better capture the historical events as a series.
            A feedback loop could also be implemented, enabling the model to
            learn continuously from new delivery outcomes and adapt to evolving
            patterns over time.
          </p>
        </div>
      ),
    },
    {
      id: "Geotag Validation System for Delivery Accuracy",
      name: "Geotag Validation System for Delivery Accuracy",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            To develop and implement a geotag validation system that ensures
            delivery accuracy by analyzing the reliability of location data
            captured at the point of delivery, enhancing operational efficiency
            and customer satisfaction at Ecom Express.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The delivery pattern of field executives is analyzed using
            historical data to identify typical routes and behaviors. Various
            parameters, such as distance from the intended delivery location and
            timing, are assessed to evaluate the likelihood of a geotag being
            inaccurately punched. This analysis helps flag potentially incorrect
            deliveries for further review. Using this mechanism, we are able to
            tag 80% of the delivery geocodes as good.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The development process involved calculating key metrics for each
            field executive, such as the time difference (timedelta) and
            distance change (distance delta) from the previous delivery.
            Additionally, the distance from the distribution center and the time
            of delivery were factored in. These parameters, combined with our
            address intelligence algorithms, were used to classify each geocode
            as either good or bad, helping to ensure accurate delivery data and
            improve operational efficiency.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            The system can be improved by fine-tuning the parameters to account
            for edge cases such as unusual delivery routes or remote areas.
            Enhancing the accuracy of the address intelligence can reduce false
            positives. Additionally, incorporating feedback loops from delivery
            agents could help in refining the tagging mechanism.
          </p>
        </div>
      ),
    },
    {
      id: "Identifying Geo Codes for an Address",
      name: "Identifying Geo Codes for an Address",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The goal of this project is to accurately predict geocodes and their
            associated error radii for delivery addresses linked to Airway Bill
            Numbers, ensuring precise and timely deliveries.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            Geocode prediction falls into two primary categories. For addresses
            previously recorded in the system, historical delivery geocodes are
            used to predict the most accurate geocode and error radius. For new
            addresses, a custom Address GPT model trained with H3 Cells is used
            to predict geocodes with high accuracy. Achieved 85% accuracy, with
            true results falling within the desired error radius.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The development process leveraged a centroid-based approach using
            historical geocodes labeled as accurate through a data-cleaning
            pipeline. By calculating the median latitude and longitude of these
            points, we generated candidate geocodes (1-4 combinations, depending
            on the data set). The final geocode was selected by calculating the
            Haversine distance for each candidate, and the one with the minimum
            average distance was chosen. For error radius estimation, different
            methods were applied based on the number of data points in the
            dataset.
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
            Further improvements can be made by implementing outlier detection
            to enhance the quality of the historical data used for predictions.
            Additionally, clustering techniques could be introduced to improve
            the efficiency and accuracy of geocode prediction.
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
