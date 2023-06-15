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
            The objective of our study is to evaluate the semantics encoded in
            self-attention transformers by leveraging explicit knowledge graph
            structures. We aim to measure the reconstruction error when
            providing graph path sequences from a knowledge graph and trying to
            reproduce the same from the outputs of the self-attention
            transformer models. Additionally, we aim to construct an augmented
            language understanding benchmark based on the General Language
            Understanding Evaluation (GLUE) benchmark to enable robust
            evaluation of concept understanding by language models.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            We perform experiments to assess whether transformers can encode
            semantic graphs between input sequence tokens. We feed various graph
            path sequence inputs to transformers and attempt to reconstruct the
            input graph from the transformer outputs. Through quantitative
            analysis, we calculate the percentage of times the language models
            assign the correct token within the top five prediction ranks. We
            refer to this metric as %Top@5. We also conduct qualitative analysis
            by inspecting the paths on which the model makes errors to evaluate
            its conceptual understanding capabilities.
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            In our study, we followed a systematic development process to
            evaluate the semantics encoded in self-attention transformers using
            knowledge graph structures. First, we extracted masked graph paths
            from various knowledge graphs, such as DBPedia, ConceptNet,
            Wiktionary, WordNet, and OpenCyc Ontology. These graph paths were
            then fed as inputs to different language models, including
            bert-base-uncased, bert-large, GPT-Neo small, medium, and large. We
            measured the models' ability to predict the masked tokens in the
            graph paths by calculating the percentage of times the correct token
            was within the top five prediction ranks (%Top@5). Additionally, we
            qualitatively analyzed the paths on which the models made errors to
            assess their conceptual understanding capabilities. Furthermore, to
            enable robust evaluation of concept understanding by language
            models, we constructed and made public an augmented language
            understanding benchmark built on the General Language Understanding
            Evaluation (GLUE) benchmark. This process involved augmenting the
            existing GLUE tasks, such as Natural Language Inference (NLI) and
            Textual Similarity (TS), with knowledge graph associations extracted
            from curated knowledge sources. These augmented datasets were used
            to evaluate the models' performance in terms of accuracy, F1 score,
            precision, recall, and %Top@5.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            While our study sheds light on the limitations of language models in
            capturing object and concept-level meaning and semantics, there are
            several areas that offer scope for further improvements. Firstly,
            the evaluation metrics for concept understanding need to be refined
            to provide more comprehensive and reliable assessments of language
            models. The %Top@5 metric, although useful, may not capture the
            nuances of semantic understanding adequately. Developing additional
            evaluation metrics that measure the models' ability to grasp complex
            relationships and higher-order paths in knowledge graphs would
            enhance the evaluation process. Secondly, the augmented language
            understanding benchmark can be expanded to incorporate higher-order
            paths beyond two-hop associations. This would allow for a more
            extensive evaluation of the models' conceptual understanding
            capabilities and help identify areas where they struggle to
            comprehend complex semantic relationships. Additionally, exploring
            other types of knowledge sources, such as domain-specific ontologies
            or scientific literature, could provide richer and more diverse
            semantic knowledge for evaluation. Finally, incorporating external
            context and commonsense reasoning into language models can further
            enhance their ability to understand and generate language that
            aligns with real-world concepts and semantics. By addressing these
            areas of improvement, we can foster the development of more
            trustworthy and explainable language models with stronger
            concept-level understanding.
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
            This project aims to enhance information extraction from
            health-related text by leveraging knowledge graphs. The UMLS
            Metathesaurus, a comprehensive medical knowledge base, provides
            structured information from various sources like SNOMED-CT, NCBI
            taxonomy, and MeSH. The project integrates knowledge graphs with
            language models trained on annotated data to overcome the
            limitations of existing models. Various methods for infusing domain
            knowledge were explored to improve information extraction
            capabilities.
          </p>
          <div class="topic_head">Working Mechanism</div>
          <p>
            The project builds a knowledge graph using the UMLS Metathesaurus,
            capturing semantic relationships between medical entities. Language
            models trained on annotated data are then integrated with the
            knowledge graph to incorporate domain-specific information. This
            integration improves the models' understanding of health-related
            text, enhancing information extraction.{" "}
          </p>
          <div class="topic_head">Development Process</div>
          <p>
            The project builds a knowledge graph using the UMLS Metathesaurus,
            capturing semantic relationships between medical entities. Language
            models trained on annotated data are then integrated with the
            knowledge graph to incorporate domain-specific information. This
            integration improves the models' understanding of health-related
            text, enhancing information The project involves building a
            knowledge graph from the UMLS Metathesaurus and training language
            models on annotated data. The knowledge graph is integrated into the
            models using various techniques. Iterative development and
            experimentation optimize the integration process for improved
            performance.
          </p>
          <div class="topic_head">Scope for Improvements</div>
          <p>
            Future enhancements can focus on refining knowledge infusion
            techniques, exploring advanced methods for semantic relationship
            capture, and expanding the coverage and accuracy of the UMLS
            Metathesaurus. User-friendly interfaces and visualization tools can
            also be developed to facilitate interaction with the system and
            enhance information interpretation.
          </p>
        </div>
      ),
    },
  ];
  const brief = (
    <div>
      My year-long research internship with AIISC for my thesis has provided me
      with an invaluable exposure to the world of research. During this time, I
      had the opportunity to delve into the fascinating realm of knowledge
      graphs and explore various algorithms in depth. I am proud to share that
      our collective efforts resulted in the publication of a paper at the
      prestigious IEEE Conference on Artificial Intelligence in 2023. I am
      immensely grateful for the unwavering support and guidance provided by my
      mentors,{" "}
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
      </a>
      , throughout this rewarding journey. Their expertise and encouragement
      have been instrumental in shaping my research skills and broadening my
      understanding of the field.
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
