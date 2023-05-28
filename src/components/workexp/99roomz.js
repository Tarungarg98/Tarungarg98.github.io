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
          <h3>What is it about?</h3>
          <p>
            While booking any hotel, people generally spend a lot of time going
            through reviews to decide which hotel to choose from. Having lot of
            reviews with varying sentiments makes it very tedious to pick
            amenities of hotel along with sentiment associated with it. In this
            project, we designed a model which will extract the positive and
            negative amenities given the hotel reviews. It predicts and displays
            the amenities and overall rating of the hotel based on reviews.
          </p>
          <h3>How it works?</h3>
          <p>
            Initially, a CSV file with hotel reviews is provided. Hotels with
            reviews less than 10 are removed to have an unbiased prediction.
            Reviews are split using PunktSentenceTokenizer and are converted
            into lower case. Each sentence is then tested for sentiment using
            SentimentIntensityAnalyzer. The words for each sentence are
            tokenized and lemmatized. If the word is a amenity, it is stored in
            positive or negative amenities for the hotel based on sentiment
            polarity. For checking the amenity, the words are tagged using a
            pre-trained model. For each hotel, the frequency of positive and
            negative amenity is stored as amenity scores. The words common in
            both were removed from one by updating the frequency in other with
            the difference between two. After that, amenities with an average
            frequency of less than 0.2 or greater than 0.95 are removed to avoid
            bias. The remaining words are then returned as positive or negative
            amenities.
          </p>
          <h3>How we made it?</h3>
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
            A dataset with reviews of various hotels was provided with a total
            of 188969 reviews. The language of the reviews was detected using a
            spacy language detector, and the reviews which were not in English
            were removed. The spelling was corrected using TextBlob. Each review
            was then split using PunktSentenceTokenizer and nltk word tokenizer.
            The words were tagged using nltk Part of Speech tagger. If the word
            is a noun, it is stemmatized, lemmatized and added to features
            vocabulary else, it was added to the non-features dictionary.
            Reviews with only feature words were then passed to TfidfVectorizer.
            The tf-idf score for each word was cumulated, and the top 5% words
            were categorized as amenities and rest as non-amenities. The words
            are then stored in a file to train the model. The tags were verified
            manually for good accuracy. It was decided to go ahead with
            Stanford-ner-tagger to create our custom Part of Speech tagging. The
            model was trained on 1140478 words with 2 labels, namely, features
            and others. It was then used to label any new word as amenity or
            non-amenity. We achieved an accuracy of 94% with this model.
          </p>
          <h3>Scope for improvements?</h3>
          <p>
            There is definitely a vast scope for future improvements with
            accurate data-tagging. Several new NLP algorithms have come and the
            accuracy if the model can be improved by trying out other Machine
            Learning Algorithms.
          </p>
          <h3>Team</h3>
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
          <h3>What is it about?</h3>
          <p>
            Addresses often provide a significant amount of intelligence about
            the buying and spending habits of a consumer. In most cases, this
            intelligence cannot be determined from the address as most of the
            addresses are free-flowing text and are not easily parsed. Faced
            with these challenges, we have created an address parser exclusively
            for Indian addresses. Lokly the Indian address parser helps you
            parse an address contained in a free-flowing string. Divide a single
            address (as string) into separate component parts: house number,
            street type (bd, street, ..), street name, unit (apt, batiment,
            ...), zip code, state, country, city etc. Soon intelligence around
            the neighbourhoods will be added to help you determine the economic
            value of the addresses.
          </p>
          <h3>How it works?</h3>
          <p>
            Just go to lokly, and enter the address. The website is hosted on
            AWS EC2 instance. The request will be passed as an API to the
            backend where the predictions are made. The results are then
            returned back to the front-end in the JSON format. You can create an
            account to have access to more number of searches.
          </p>
          <h3>How we made it?</h3>
          <div className="row number" align="center">
            <div className="col-sm">
              <strong>13000</strong>
              <br></br>
              Addresses Tagged
            </div>
            <div className="col-sm">
              <strong>102082</strong>
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
            A dataset with just Indian Addresses was provided. It was decided to
            go ahead with Stanford-ner-tagger to create our custom Part of
            Speech tagging. We started with pre-processing the data, removed the
            punctuations, converted all words to lowercase. We then tagged the
            words with the corresponding labels and trained the model using
            Stanford-ner-tagger. Data was tagged in a semi-supervised way. We
            started with tagging a few words, and trained the model over it. The
            we made predictions over new data, corrected the labels and then
            retrained the model. Front-end was designed using Flask, HTML and
            CSS. Files are packaged to a docker container and it is deployed
            over AWS EC2 cloud storage. We trained 102082 words in total, which
            sums up to around 13000 addresses with an average of 8 words per
            address. We achieved an accuracy of 83% with this model.
          </p>
          <h3>Scope for improvements?</h3>
          <p>
            There is definitely a vast scope for future improvements with
            accurate data-tagging. Several new NLP algorithms have come, and the
            accuracy of the model can be improved by trying out other Machine
            Learning Algorithms.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="container">
      <CompanyPage
        companyname="99Roomz"
        designation="Data Science Intern"
        duration="May 2019 - July 2019"
        brief="My first internship in Data Science proved to be a transformative experience, with a primary focus on Natural Language Processing (NLP). During this period, I successfully developed and implemented NLP models utilizing the Stanford NER Tagger. These models effectively extracted essential components from raw text, enabling their utilization in subsequent processes. Collaborating closely with Arpit Jadiya on this project, we benefited greatly from the invaluable mentorship provided by Manish Sharma and Spandan Singh. Their guidance and expertise were instrumental in refining our skills and ensuring the success of our NLP endeavors."
        image={si_99_roomz_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default SI_99ROOMZ;
