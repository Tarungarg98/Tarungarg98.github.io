import React from "react";
import aiisc_img from "./images/aiisc.png";
import CompanyPage from "./companypage_template";

const AIISC = () => {
  const projects = [
    {
      id: "Improving Information Extraction from health-related text using knowledge graphs",
      name: "Improving Information Extraction from health-related text using knowledge graphs",
      description: (
        <div class="container">
          <h3>What is it about?</h3>
          <p>
            The medical domain contains massive data regarding the symptoms,
            diseases and medication. Dataset being vast, it's beyond the human
            capacity to analyse the past records. UMLS metathesaurus is the
            largest source of structured information for the medical domain. It
            contains vocabularies from various sources like SNOMED-CT, NCBI
            taxonomy, MeSH etc.
          </p>

          <p>
            Knowledge graphs are widely used in the domain of NLP to preserve
            the relationship present in the text. The primitive models are
            dependent on the sentence and document structure of the input
            clinical documents and fall short when there is an input of
            templates, mostly containing the nonlinguistic sentences and
            fragments. Knowledge graphs are widely used to integrate semantics
            in language models. We aim to integrate the Knowledge Base with the
            model trained on annotated data to resolve the underlying
            shortcomings of the model. Various knowledge-infusion methods were
            studied to incorporate the domain Knowledge into the exisiting
            Language models.
          </p>
          <h3>Team</h3>
          <p>
            The project is being worked as my research internship under the
            guidance of Prof Amit Sheth and his PhD and Post-Doc students.
          </p>
        </div>
      ),
    },
    {
      id: "Knowledge Graph Guided Semantic Evaluation of Language Models For User Trust",
      name: "Knowledge Graph Guided Semantic Evaluation of Language Models For User Trust",
      description: (
        <div class="container">
          <h3>What is it about?</h3>
          <p>
            The medical domain contains massive data regarding the symptoms,
            diseases and medication. Dataset being vast, it's beyond the human
            capacity to analyse the past records. UMLS metathesaurus is the
            largest source of structured information for the medical domain. It
            contains vocabularies from various sources like SNOMED-CT, NCBI
            taxonomy, MeSH etc.
          </p>

          <p>
            Knowledge graphs are widely used in the domain of NLP to preserve
            the relationship present in the text. The primitive models are
            dependent on the sentence and document structure of the input
            clinical documents and fall short when there is an input of
            templates, mostly containing the nonlinguistic sentences and
            fragments. Knowledge graphs are widely used to integrate semantics
            in language models. We aim to integrate the Knowledge Base with the
            model trained on annotated data to resolve the underlying
            shortcomings of the model. Various knowledge-infusion methods were
            studied to incorporate the domain Knowledge into the exisiting
            Language models.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="container">
      <CompanyPage
        companyname="AIISC"
        designation="Research Intern"
        brief="My year-long research internship with AIISC for my thesis has provided me with an invaluable exposure to the world of research. During this time, I had the opportunity to delve into the fascinating realm of knowledge graphs and explore various algorithms in depth. I am proud to share that our collective efforts resulted in the publication of a paper at the prestigious IEEE Conference on Artificial Intelligence in 2023. I am immensely grateful for the unwavering support and guidance provided by my mentors, Dr. Amit Sheth, Kaushik Roy and Dr. Manas Gaur, throughout this rewarding journey. Their expertise and encouragement have been instrumental in shaping my research skills and broadening my understanding of the field."
        duration="July 2020 - April 2021"
        image={aiisc_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default AIISC;
