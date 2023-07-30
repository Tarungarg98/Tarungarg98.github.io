import React from "react";
import si_99_roomz_img from "./images/99roomz.png";
import CompanyPage from "./companypage_template";
import "bootstrap/dist/css/bootstrap.min.css";

const SI_99ROOMZ = () => {
  const projects = [
    {
      id: "Feature extraction from hotel reviews",
      name: "Feature extraction from hotel reviews",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            The project aimed to develop a model that extracts positive and
            negative amenities from hotel reviews and generates an overall
            rating based on these reviews. By analyzing the sentiments expressed
            in reviews, the model assists users in making informed decisions
            while booking hotels.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The project follows a multi-step process to analyze hotel reviews. A
            CSV file containing hotel reviews is provided, and to ensure
            unbiased predictions, hotels with fewer than 10 reviews are excluded
            from the dataset.The reviews undergo preprocessing, involving
            sentence splitting with PunktSentenceTokenizer and converting the
            text to lowercase. Sentiment analysis is then performed on each
            sentence using the SentimentIntensityAnalyzer. The words are
            tokenized and lemmatized, and amenities are identified using a
            pre-trained model. The entities are tagged as positive or negative
            based on the sentiment polarity. The frequency of positive and
            negative amenities for each hotel is calculated, resulting in
            amenity scores. Overlapping words between positive and negative
            amenities are updated with the frequency difference. To avoid bias,
            amenities with an average frequency below 0.2 or above 0.95 are
            removed, leaving behind positively and negatively categorized
            amenities.
          </p>
          <div className="row number" align="center">
            <div className="col-sm">
              <strong>188969</strong>
              <br></br>
              Reviews Tagged
            </div>
            <div className="col-sm">
              <strong>1140478</strong>
              <br></br>
              Words Tagged
            </div>
            <div className="col-sm">
              <strong>94%</strong>
              <br></br>
              Accuracy
            </div>
          </div>
          <div class="topic_head">Development Process</div>
          <p>
            The project began by curating a dataset of hotel reviews, totaling
            188,969 entries. To ensure language consistency, a language detector
            based on SpaCy was utilized to exclude non-English reviews, TextBlob
            was used to correct any spelling errors present in the reviews. The
            reviews were then segmented into sentences and tokenized using
            NLTK's tools. Employing NLTK's Part of Speech tagger, nouns were
            identified, stemmed, and lemmatized to form the features vocabulary.
            Non-feature words were categorized separately. Utilizing
            TfidfVectorizer, only reviews containing feature words were
            processed, and tf-idf scores were accumulated. The top 5% of words
            were labeled as amenities, while the rest were designated as
            non-amenities. The model was further improved with the use of
            Stanford-ner-tagger, creating a custom Part of Speech tagging
            system. This model achieved an impressive 94% accuracy in labeling
            new words as amenities or non-amenities, ultimately enhancing the
            project's performance and impact.
          </p>
          <div class="topic_head">Scope for improvements</div>
          <p>
            Future improvements hold tremendous promise, refining data tagging
            for enhanced accuracy, delving into alternative machine learning
            algorithms and cutting-edge NLP techniques can potentially boost the
            model's performance. Introducing user feedback and incorporating it
            into the model training process can better capture model, we can
            ensure its relevance and efficacy in the dynamic realm of hotel
            reviews analysis.
          </p>
        </div>
      ),
    },
    {
      id: "Lokly - Indian Adress Parser",
      name: "Lokly - Indian Adress Parser",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            Lokly is an Indian Address Parser project tailored to tackle the
            complexities of parsing Indian addresses. It efficiently extracts
            crucial address components like house number, street name, zip code,
            state, country, and more from free-flowing address strings. Beyond
            parsing, Lokly aims to incorporate neighborhood intelligence,
            revealing insights into the economic value of addresses, and
            providing valuable information about consumer buying and spending
            habits.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            Users can easily utilize Lokly by visiting the website (soon to be
            integrated here), which offers a user-friendly interface. The
            backend system utilizizing powerful machine learning algorithms and
            natural language processing techniques to analyze the address and
            extract its relevant components is hosted using flask API, with
            HTML, CSS for front-end. The parsed address components are then
            efficiently delivered to the user in a convenient JSON format
            through the frontend interface.
          </p>
          <div className="row number" align="center">
            <div className="col-sm">
              <strong>13,000</strong>
              <br></br>
              Addresses Tagged
            </div>
            <div className="col-sm">
              <strong>102,082</strong>
              <br></br>
              Words Tagged
            </div>
            <div className="col-sm">
              <strong>83%</strong>
              <br></br>
              Accuracy
            </div>
          </div>
          <div class="topic_head">Development Process</div>
          <p>
            The development of Lokly involved several key steps. A dataset
            comprising Indian addresses was provided, data preprocessing
            involved removing punctuation and converting all words to lowercase
            for consistency. To develop a custom tagging model specifically
            tailored for Indian addresses, the project utilized the powerful
            Stanford-ner-tagger for Part of Speech tagging. Throughout the
            development process, a total of 102,082 words were tagged, covering
            approximately 13,000 Indian addresses. Impressively, the Lokly -
            Indian Address Parser model achieved an accuracy of 83%, showcasing
            its effectiveness in extracting address components from free-flowing
            address strings.
          </p>
          <div class="topic_head">Scope for improvements?</div>
          <p>
            Lokly has vast potential for improvements. Enhancing data tagging
            accuracy with better datasets and advanced algorithms can boost
            performance. Exploring newer NLP techniques can handle diverse
            address formats. Continuous refinement will make Lokly more valuable
            for businesses and users, meeting evolving needs in data analysis.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      My first internship in Data Science proved to be a transformative
      experience, with a primary focus on Natural Language Processing (NLP).
      During this period, I successfully developed and implemented NLP models
      utilizing the Stanford NER Tagger. These models effectively extracted
      essential components from raw text, enabling their utilization in
      subsequent processes. Collaborating closely with{" "}
      <a
        href="https://www.linkedin.com/in/arpit-jadiya-013312180/"
        title="Arpit Jadiya"
        target="_blank"
      >
        Arpit Jadiya
      </a>{" "}
      on this project, we benefited greatly from the invaluable mentorship
      provided by{" "}
      <a
        href="https://www.linkedin.com/in/manishsh/"
        title="Manish Sharma"
        target="_blank"
      >
        {" "}
        Manish Sharma
      </a>{" "}
      and{" "}
      <a
        href="https://www.linkedin.com/in/spandan-singh-960396a3/"
        title="Spandan Singh"
        target="_blank"
      >
        Spandan Singh
      </a>
      . Their guidance and expertise were instrumental in refining our skills
      and ensuring the success of our NLP endeavors.
    </div>
  );
  return (
    <div className="container">
      <CompanyPage
        companyname="99Roomz"
        designation="Data Science Intern"
        duration="May 2019 - July 2019"
        brief={brief}
        image={si_99_roomz_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default SI_99ROOMZ;
