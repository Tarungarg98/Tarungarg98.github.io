import React from "react";
import ecom_express_img from "./images/zomato.png";
import CompanyPage from "./companypage_template";
import "bootstrap/dist/css/bootstrap.min.css";

const Zomato = () => {
  const projects = [
    {
      id: "New User Revenue Prediction",
      name: "New User Revenue Prediction",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            To design a predictive model that forecasts the Lifetime Value (LTV)
            of newly acquired users and feed these predictions back to Google
            Ads as conversion signals. This closed-loop feedback mechanism
            enables Google's algorithms to better understand user quality and
            automatically optimize targeting strategies to acquire more
            high-value users through pLTV (predicted Lifetime Value) campaigns,
            ultimately improving marketing ROI and reducing customer acquisition
            costs.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The system predicts the expected revenue a new user will generate
            within their first 30 days based on early behavioral signals and
            contextual features captured during acquisition. These pLTV scores
            are then transmitted to Google Ads as enhanced conversion values,
            replacing simple binary conversion events with granular value-based
            signals. Google's machine learning algorithms use this feedback to
            identify patterns associated with high-value users and adjust
            bidding and targeting strategies in real-time. This creates a
            virtuous cycle where better predictions lead to better user
            acquisition, which in turn improves model training data quality.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            We built a machine learning pipeline that ingests user acquisition
            data—including demographic signals, first-touch attribution, device
            information, location, and early engagement metrics—to predict
            30-day revenue potential. The model was trained on historical
            cohorts where actual LTV was observed, using regression techniques
            to estimate continuous revenue values. To ensure reliability, we
            implemented extensive validation through backtesting and holdout
            cohort analysis. The predicted LTV values were then integrated with
            Google Ads API, sending conversion values back to Google's platform
            in near real-time. Close collaboration with marketing and growth
            teams ensured alignment on business metrics and campaign goals.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Future enhancements include expanding the prediction window beyond
            30 days to capture longer-term value, incorporating additional
            behavioral features from early user sessions, and extending the
            feedback loop to other marketing channels beyond Google Ads.
            Implementing A/B tests to measure the incremental impact of pLTV
            campaigns versus traditional conversion-based campaigns would
            provide stronger evidence of business value. Additionally, building
            real-time model retraining pipelines to adapt to seasonal patterns
            and changing user behavior would ensure sustained prediction
            accuracy over time.
          </p>
        </div>
      ),
    },
    {
      id: "Retargeting Campaign Optimization",
      name: "Retargeting Campaign Optimization",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            To build a predictive model that estimates the probability of
            existing users clicking on digital ads, enabling optimized marketing
            spend allocation during strategic campaigns. The goal was to
            identify high-intent users who are most likely to engage with ads,
            allowing us to drive sudden spikes in app opens and order volumes
            through targeted digital marketing efforts while maintaining cost
            efficiency.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The system leverages historical user engagement data, past ad
            interaction patterns, and behavioral signals to predict
            click-through probability for each user in the retargeting pool.
            Users are scored and ranked based on their predicted likelihood to
            click, enabling marketing teams to prioritize high-probability users
            for ad campaigns. This targeted approach ensures that ad spend is
            concentrated on users most likely to convert, maximizing return on
            ad spend (ROAS) while minimizing wastage on low-intent audiences.
            During time-sensitive campaigns—such as flash sales, festive
            promotions, or re-engagement drives—this model helps achieve rapid
            app traffic spikes by reaching the right users at the right time.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            We developed a binary classification model trained on historical
            retargeting campaign data, where user features such as recency of
            last order, frequency of app usage, engagement with previous ads,
            preferred cuisine types, average order value, and time since last
            interaction were used as inputs. The model outputs a probability
            score indicating the likelihood of ad click for each user. To ensure
            robustness, we validated the model using A/B testing, comparing
            campaigns targeted using model predictions versus random or
            rule-based targeting strategies. Performance metrics such as
            click-through rate (CTR), cost per click (CPC), and incremental app
            opens were closely monitored. The prediction scores were integrated
            into the marketing automation platform, allowing real-time audience
            segmentation and dynamic budget allocation across channels like
            Google Ads, Facebook, and programmatic display networks.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Future improvements include incorporating real-time behavioral
            signals—such as current browsing activity or abandoned cart
            data—into the prediction pipeline to increase responsiveness.
            Expanding the model to predict not just clicks but also downstream
            conversions (orders placed post-click) would provide even more
            precise targeting. Additionally, integrating reinforcement learning
            techniques could enable the model to continuously adapt to changing
            user behavior and optimize bidding strategies dynamically across
            multiple marketing channels.
          </p>
        </div>
      ),
    },
    {
      id: "Enhancing address accessibility on map",
      name: "Enhancing address accessibility on map",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            To improve the user experience during address selection by
            extracting and displaying relevant house numbers and POI (Point of
            Interest) towers on the map. This contextual information helped
            users confidently drop pins by identifying known landmarks, reducing
            ambiguity and increasing trust in the system.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            Using advanced regex techniques, we extracted structured
            entities—such as house numbers and POI towers—from unstructured
            Pan-India address text. These entities were dynamically rendered on
            the map interface during address selection. To maintain clarity and
            usability, special attention was paid to avoid visual clutter by
            applying smart deduplication and display rules. The enhanced map
            experience helped users recognize their location faster, leading to
            quicker and more accurate pin placement.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            We built a scalable regex pipeline capable of handling a wide
            variety of address formats seen across different geographies in
            India. Guardrails were implemented at multiple stages to ensure high
            precision, including format validation, confidence scoring, and
            fallback logic for ambiguous cases. Throughout the process, we
            actively collaborated with frontend developers and product managers
            to ensure seamless integration into the address selection flow. This
            coordination was critical in aligning the technical capabilities
            with UI constraints and product goals, ensuring that the output
            added real value without compromising performance or design
            integrity.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Future enhancements can include integrating NLP-based extraction
            techniques to better handle noisy and multilingual address inputs.
            Continuous monitoring and incorporating user feedback will help
            refine extraction accuracy and enhance interface intuitiveness.
            Additionally, introducing contextual address intelligence—such as
            autofill suggestions based on nearby surroundings—can further
            elevate the user experience and boost conversion through the funnel.
          </p>
        </div>
      ),
    },
    {
      id: "Rider delivery distance",
      name: "Rider delivery distance",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            To reduce the dependency on Google Maps API for distance estimation
            by building an in-house system to predict user-to-restaurant
            distances with high accuracy. The goal was to display meaningful and
            accurate distance insights on the app, improving user trust and
            reducing operational costs.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            We leveraged historic delivery data to learn actual distances
            between user locations and restaurants using S2 Cell indexing. The
            idea was to cluster locations into geospatial cells and use known
            deliveries between these cells to estimate average travel distances.
            By training a model on these cell pairs along with Google-provided
            ground truth, we could generalize distance estimation across new and
            existing addresses. A caching layer was implemented to store
            predictions, especially for frequently queried or error-prone cell
            pairs, ensuring both speed and accuracy.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            We started by converting latitude-longitude coordinates into
            hierarchical S2 Cell identifiers for both user and restaurant
            locations. Using historic deliveries where Google distance was
            already fetched, we trained a model to estimate distances based on
            these cell pairs. To improve model performance, we built a
            post-processing caching system that handled edge cases and corrected
            under- or over-predictions. The final predicted distances were then
            surfaced on the user app interface to show the restaurant's
            proximity confidently.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Future improvements could involve training the model on alternative
            routing data and expanding coverage for newly onboarded locations
            can enhance accuracy. Implementing a real-time feedback loop—where
            prediction errors are corrected based on delivery outcomes—would
            also ensure continual model learning and increased trust in the
            system.
          </p>
        </div>
      ),
    },
    {
      id: "Rider entry points for Point of Interests",
      name: "Rider entry points for Point of Interests",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            To improve delivery efficiency and reduce delays at high-density
            Points of Interest (POIs) such as malls, tech parks, and gated
            communities by accurately identifying designated rider entry points.
            The goal was to eliminate routing issues caused by imprecise user
            coordinates and ambiguous building layouts, which often led to
            delivery partners reaching incorrect or inaccessible gates.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            Navigation via raw user coordinates often directs delivery partners
            to incorrect POI entrances due to GPS drift or misaligned mapping
            data on third-party navigation tools like Google Maps. These detours
            result in longer delivery times and poor user experience. To address
            this, we built a system that intelligently identifies the correct
            entry points for major POIs by analyzing historical delivery traces,
            building layouts, and delivery partner movement paths.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            We employed spatial algorithms and geometric heuristics to
            accurately map rider entry points. The core technique involved
            intersecting delivery partner approach paths with POI
            polygons—representing the building footprint—using advanced geometry
            checks. By analyzing where these paths typically intersected the
            polygon boundary, we were able to infer the most common and
            accessible gates for riders. This methodology enabled us to pinpoint
            and surface the correct entry gates for POIs responsible for over
            80% of the total POI-based orders across India.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Feedback loops from delivery partners and on-ground operations teams
            can further refine our approach. Over time, we aim to extend this
            system to automatically detect and learn entry points for newly
            onboarded POIs, keeping pace with evolving urban infrastructure.
          </p>
        </div>
      ),
    },
    {
      id: "Earning based gigs",
      name: "Earning based gigs",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            To build an intelligent recommendation system that suggests optimal
            shift packs to delivery partners based on their target daily
            earnings. The goal was to help riders achieve their earning goals
            efficiently while simultaneously ensuring adequate supply coverage
            across different time slots to meet system demand. This two-sided
            optimization improves rider satisfaction and platform operational
            efficiency.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            Riders input their target earnings for the day, and the system
            recommends a combination of shift slots that best matches their
            goal. First, we estimate predicted earnings for each available time
            slot using historical delivery data—analyzing factors such as order
            volume, peak hours, average delivery fees, tips, and incentives
            during that slot. Once earnings per slot are estimated, a Linear
            Programming (LP) solver is employed to find the optimal combination
            of slots that maximizes rider preference while staying within
            operational constraints. The objective function balances maximizing
            the rider's earning potential with system-level demand requirements,
            ensuring slots with high demand are adequately staffed. Constraints
            include shift duration limits, rest period requirements, and slot
            availability.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The development involved two key phases: earnings prediction and
            slot optimization. For earnings prediction, we built a regression
            model trained on historical rider earnings data, capturing patterns
            across different times of day, days of the week, locations, and
            seasonal trends. The model outputs expected earnings for each slot
            with a confidence interval. For the optimization phase, we
            formulated the problem as a Linear Programming task where decision
            variables represent whether a rider is assigned to a particular
            slot. The objective function maximizes total predicted earnings
            while incorporating rider preferences (e.g., preferred shift
            timings) and penalizes under-staffing in high-demand slots. The LP
            solver runs in real-time upon rider input, generating personalized
            shift pack recommendations instantly. Close collaboration with
            operations and rider experience teams ensured the recommendations
            were practical and aligned with ground realities.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Future enhancements include incorporating dynamic pricing and surge
            predictions into the earnings estimation model to provide more
            accurate forecasts. Expanding the optimization framework to support
            multi-day planning would help riders plan their weekly schedules
            more effectively.
          </p>
        </div>
      ),
    },
    {
      id: "User profiling for personalized app experience",
      name: "User profiling for personalized app experience",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            To build a scalable user segmentation framework that enables
            personalized experiences, improves user engagement, and optimizes
            recommendation strategies. By understanding user behaviors more
            deeply, we aimed to drive higher retention, better conversion, and
            tailored communication across the app ecosystem.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            We employed unsupervised machine learning, specifically K-Means
            clustering, to categorize users into 8 distinct clusters based on
            key behavioral signals like order intent, spending patterns
            (revenue), and discovery behavior (exploration). Silhouette scores
            were used to determine the optimal number of clusters, ensuring the
            segments were well-separated and meaningful. These clusters surfaced
            critical user personas such as “New to Restaurant” and “New to
            Dish,” which helped inform how we personalize recommendations and
            nudge journeys.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The feature engineering process involved extracting user-level
            metrics such as frequency of new restaurant discovery, average order
            value, and time between orders. These features were standardized and
            used to train the clustering model. Post-segmentation, we evaluated
            each cluster using engagement metrics and domain knowledge to label
            and interpret their behaviors. Close collaboration with product and
            marketing teams ensured the clusters were actionable. They were
            directly integrated into downstream systems—powering customized
            feeds, personalized banners, and lifecycle communication flows. The
            segments were validated continuously through A/B testing and
            business KPIs.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            As a next step, we plan to incorporate temporal patterns (e.g.,
            seasonal behavior) and contextual signals like location and cuisine
            preferences into the segmentation framework. Moving from static
            clustering to dynamic, real-time segmentation using streaming data
            could further enhance responsiveness. Integrating this segmentation
            more tightly with reinforcement learning-based recommendation
            systems would create a closed-loop personalization engine that
            adapts to evolving user behavior.
          </p>
        </div>
      ),
    },
    // {
    //   id: "Reverse Geocoder",
    //   name: "Reverse Geocoder",
    //   description: (
    //     <div class="container">
    //       <div class="topic_head">Objective</div>
    //       <p></p>
    //       <div class="topic_head">Working Mechanism</div>
    //       <p></p>
    //       <div class="topic_head">Development Process</div>
    //       <p></p>
    //       <div class="topic_head">Scope for Improvements</div>
    //       <p></p>
    //     </div>
    //   ),
    // },
  ];
  const brief = (
    <div>
      Joining Zomato as a Senior Data Scientist has been an incredible
      opportunity to work on diverse, high-impact projects spanning user
      acquisition, logistics optimization, personalization, and marketing
      analytics. From building pLTV models for Google Ads to optimizing rider
      earnings through intelligent shift recommendations, each project directly
      contributes to enhancing user experience and operational efficiency at
      scale. Working closely with stakeholders like{" "}
      <a
        href="https://in.linkedin.com/in/saurabh-kalia-1560a910"
        title="Saurabh Kalia"
        target="_blank"
      >
        Saurabh Kalia
      </a>{" "}
      and{" "}
      <a
        href="https://in.linkedin.com/in/shreyansjain-iitdhn"
        title="Shreyans Jain"
        target="_blank"
      >
        Shreyans Jain
      </a>{" "}
      has provided valuable insights into business priorities, enabling me to
      deliver solutions that are both technically robust and strategically
      aligned with company goals.
    </div>
  );
  return (
    <div className="container">
      <CompanyPage
        companyname="Zomato"
        designation="Senior Data Scientist"
        duration="February 2025 - Present"
        brief={brief}
        image={ecom_express_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default Zomato;
