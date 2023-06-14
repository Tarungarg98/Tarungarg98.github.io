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
            The project focused on designing a model to extract positive and
            negative amenities from hotel reviews and provide an overall rating
            based on the reviews. When booking a hotel, people often spend a
            significant amount of time reading through reviews to make an
            informed decision. However, the abundance of reviews with varying
            sentiments can make it tedious to identify specific amenities and
            their associated sentiment. The goal of the project was to develop a
            model that would analyze hotel reviews, extract the mentioned
            amenities, classify them as positive or negative, and generate an
            overall rating for the hotel based on the reviews.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The project followed a multi-step process to achieve its objectives.
            Initially, a CSV file containing hotel reviews was provided. To
            ensure unbiased predictions, hotels with fewer than 10 reviews were
            removed from the dataset. The reviews were then preprocessed by
            splitting them into sentences using PunktSentenceTokenizer and
            converting the text to lowercase. Each sentence was analyzed for
            sentiment using the SentimentIntensityAnalyzer. The words in each
            sentence were tokenized and lemmatized. If a word was identified as
            an amenity, it was stored as a positive or negative amenity for the
            hotel based on the sentiment polarity. To identify amenities, the
            words were tagged using a pre-trained model. For each hotel, the
            frequency of positive and negative amenities was calculated and
            stored as amenity scores. Overlapping words between positive and
            negative amenities were updated with the frequency difference.
            Amenities with an average frequency below 0.2 or above 0.95 were
            removed to avoid bias. The remaining words were categorized as
            positive or negative amenities.
          </p>
          <div class="topic_head">Development Process</div>
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
          <p>
            The project utilized a dataset consisting of reviews for various
            hotels, totaling 188,969 reviews. To ensure that only English
            reviews were considered, a language detector based on SpaCy was used
            to filter out non-English reviews. TextBlob was employed to correct
            any spelling errors in the reviews. Each review was then split into
            sentences using PunktSentenceTokenizer and tokenized using NLTK's
            word tokenizer. The words were further tagged using NLTK's Part of
            Speech tagger, and if a word was identified as a noun, it was
            stemmed, lemmatized, and added to the features vocabulary.
            Otherwise, it was added to the non-features dictionary. Only reviews
            containing feature words were passed through TfidfVectorizer. The
            tf-idf scores for each word were accumulated, and the top 5% of
            words were categorized as amenities, while the rest were labeled as
            non-amenities. These words were then stored in a file for model
            training. The model employed Stanford-ner-tagger to create a custom
            Part of Speech tagging system. It was trained on 1,140,478 words
            with two labels, namely features and others. This model was then
            used to label new words as amenities or non-amenities, achieving an
            accuracy of 94%.
          </p>
          <div class="topic_head">Scope for improvements</div>
          <p>
            There is significant potential for future improvements, particularly
            with more accurate data tagging. Exploring and experimenting with
            other machine learning algorithms and newer NLP algorithms can
            potentially improve the model's accuracy and performance.
            Additionally, incorporating user feedback and integrating it into
            the model training process can enhance the model's effectiveness in
            capturing user preferences and sentiments. As new NLP techniques and
            algorithms emerge, it would be beneficial to evaluate their
            applicability to further enhance the project's capabilities.
            Continuous updates and improvements to the model can ensure its
            relevance and effectiveness in the ever-evolving domain of hotel
            reviews analysis.
          </p>
          <div class="topic_head">Team</div>
          <p>
            This project was designed during my Summer Internship at 99 roomz in
            2019 along with Arpit Jadiya, Manish Sharma and Spandan Singh.
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
            Lokly - Indian Address Parser is a project specifically designed to
            address the challenges of parsing Indian addresses, which often
            contain valuable information about consumer buying and spending
            habits. The project aims to provide an effective solution for
            parsing free-flowing Indian address strings and extracting relevant
            address components such as house number, street type, street name,
            unit, zip code, state, country, city, and more. Additionally, Lokly
            aims to incorporate neighborhood intelligence to offer insights into
            the economic value associated with addresses.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            To utilize Lokly - Indian Address Parser, users can visit the Lokly
            website where they can input the address they wish to parse. The
            website is hosted on an AWS EC2 instance and provides a
            user-friendly interface. The address parsing functionality is
            implemented in the backend, where the input address is processed
            using an API. The backend system leverages machine learning
            algorithms and natural language processing techniques to analyze the
            address and extract its individual components. The parsed address
            components are then returned to the user in a JSON format through
            the frontend interface.
          </p>
          <div class="topic_head">Development Process</div>
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
          <p>
            The development of Lokly - Indian Address Parser involved several
            key steps. A dataset comprising Indian addresses was collected and
            used for training and testing the system. The project utilized the
            Stanford-ner-tagger, a powerful tool for Part of Speech tagging, to
            develop a custom tagging model specifically tailored for Indian
            addresses. The data preprocessing phase involved removing
            punctuation and converting all words to lowercase to ensure
            consistency. The addresses were then tagged with relevant labels
            using the trained model. The front-end of the Lokly website was
            built using Flask, HTML, and CSS to create an intuitive user
            interface. The entire system was deployed on an AWS EC2 cloud
            storage platform for accessibility and scalability.
          </p>
          <p>
            During the development process, a total of 102,082 words were
            tagged, covering approximately 13,000 Indian addresses. The accuracy
            achieved by the Lokly - Indian Address Parser model was 83%,
            reflecting its effectiveness in extracting address components from
            free-flowing address strings.
          </p>
          <div class="topic_head">Scope for improvements?</div>
          <p>
            There is immense potential for further improvements in Lokly -
            Indian Address Parser. Enhancing the accuracy of data tagging
            through more comprehensive training datasets and advanced machine
            learning algorithms can significantly improve the system's
            performance. Additionally, exploring newer NLP techniques and
            algorithms can help address complex address parsing scenarios and
            handle a wider range of address formats and variations. By
            continually refining the model and incorporating cutting-edge
            approaches, Lokly - Indian Address Parser can provide even more
            accurate and reliable results, facilitating various applications
            that rely on parsed Indian addresses.
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
