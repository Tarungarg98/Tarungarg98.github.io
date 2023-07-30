import React from "react";
import aiisc_img from "./images/aiisc.png";
import CompanyPage from "./companypage_template";

const AIISC = () => {
  const projects = [
    {
      id: "Knowledge Graph Guided Semantic Evaluation of Language Models For User Trust",
      name: "Knowledge Graph Guided Semantic Evaluation of Language Models For User Trust ( Published : IEEE Conference on Artificial Intelligence )",
      description: (
        <div class="container">
          <a
            href="https://arxiv.org/abs/2305.04989"
            title="Paper Link"
            target="_blank"
          >
            Research Paper Link
          </a>
          <div class="topic_head">Objective</div>
          <p>
            We aim to evaluate semantics encoded in self-attention transformers
            using knowledge graph structures. Our goal is to measure
            reconstruction error by providing graph path sequences and
            reproducing them from transformer outputs. Additionally, we plan to
            create an augmented language understanding benchmark based on GLUE
            to assess concept understanding in language models effectively.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            We experiment with transformers to assess their ability to encode
            semantic graphs between input tokens. Quantitative analysis
            calculates %Top@5, the percentage of times correct tokens are within
            the top five predictions. Qualitative analysis inspects error paths
            to evaluate conceptual understanding.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            We extract masked graph paths from various knowledge graphs and feed
            them into language models like bert-base-uncased, bert-large,
            GPT-Neo small, medium, and large. %Top@5 measures the models'
            prediction accuracy. An augmented GLUE benchmark with knowledge
            graph associations is constructed and made public to evaluate model
            performance on accuracy, F1 score, precision, recall, and %Top@5.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Refining evaluation metrics for better concept understanding
            assessment is needed. Exploring higher-order paths and diverse
            knowledge sources can enhance model comprehension. Incorporating
            external context and commonsense reasoning can further improve model
            understanding and generate language aligned with real-world
            semantics.
          </p>
        </div>
      ),
    },
    {
      id: "Improving Information Extraction from health-related text using knowledge graphs",
      name: "Improving Information Extraction from health-related text using knowledge graphs",
      description: (
        <div class="container">
          <div class="topic_head">Objective</div>
          <p>
            Enhance health-related text information extraction using knowledge
            graphs from UMLS Metathesaurus. Integrating language models with the
            graph overcomes model limitations and improves information
            extraction.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            Building a knowledge graph with UMLS Metathesaurus, capturing
            semantic relationships between medical entities. Integrating
            Language models trained on annotated data with the knowledge graph
            to incorporate domain-specific information to improve the model's
            understanding of health-related text.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Future enhancements can focus on refining knowledge infusion
            techniques, exploring advanced methods for capturing semantic
            relationships, and expanding the coverage and accuracy of the UMLS
            Metathesaurus. Additionally, developing user-friendly interfaces and
            visualization tools will facilitate interaction with the system and
            enhance information interpretation.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      My year-long research internship with AIISC for my thesis exposed me to
      the world of knowledge graphs and deep exploration of algorithms.
      Together, we published a paper at the IEEE Conference on Artificial
      Intelligence in 2023.{" "}
      <a
        href="https://www.linkedin.com/in/amitsheth/"
        title="Dr Amit Sheth"
        target="_blank"
      >
        Dr. Amit Sheth
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/kaushik-roy-b8a323ab/"
        title="Kaushik Roy"
        target="_blank"
      >
        Kaushik Roy
      </a>{" "}
      and{" "}
      <a
        href="https://www.linkedin.com/in/manasgaur/"
        title="Manas Gaur"
        target="_blank"
      >
        Dr. Manas Gaur
      </a>{" "}
      provided unwavering support and guidance, shaping my research skills and
      understanding.
    </div>
  );
  return (
    <div className="container">
      <CompanyPage
        companyname="AIISC"
        designation="Research Intern"
        brief={brief}
        duration="July 2020 - April 2021"
        image={aiisc_img}
        projects={projects}
      ></CompanyPage>
    </div>
  );
};

export default AIISC;
