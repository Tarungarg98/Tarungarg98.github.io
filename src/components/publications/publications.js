import React from "react";
import "./publications.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Publications = () => {
  return (
    <div className="publications" id="publications">
      <h1> Research Papers</h1>
      <hr></hr>

      <div className="row">
        <div className="col-md-6 paper">
          <h3>
            <a
              href="https://arxiv.org/abs/2305.04989"
              title="Paper Link"
              target="_blank"
            >
              Roy, K., Garg, T., Palit, V., Zi, Y., Narayanan, V., & Sheth, A.
              (2023). Knowledge Graph Guided Semantic Evaluation of Language
              Models For User Trust. arXiv preprint arXiv:2305.04989.
            </a>
          </h3>
          <p className="abstract">
            A fundamental question in natural language processing is - what kind
            of language structure and semantics is the language model capturing?
            Graph formats such as knowledge graphs are easy to evaluate as they
            explicitly express language semantics and structure. This study
            evaluates the semantics encoded in the self-attention transformers
            by leveraging explicit knowledge graph structures. We propose novel
            metrics to measure the reconstruction error when providing graph
            path sequences from a knowledge graph and trying to
            reproduce/reconstruct the same from the outputs of the
            self-attention transformer models. The opacity of language models
            has an immense bearing on societal issues of trust and explainable
            decision outcomes. Our findings suggest that language models are
            models of stochastic control processes for plausible language
            pattern generation. However, they do not ascribe object and
            concept-level meaning and semantics to the learned stochastic
            patterns such as those described in knowledge graphs. Furthermore,
            to enable robust evaluation of concept understanding by language
            models, we construct and make public an augmented language
            understanding benchmark built on the General Language Understanding
            Evaluation (GLUE) benchmark. This has significant application-level
            user trust implications as stochastic patterns without a strong
            sense of meaning cannot be trusted in high-stakes applications.
          </p>
        </div>
        <div className="col-md-6 paper">
          <h3>
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S2352710221011141"
              title="Paper Link"
              target="_blank"
            >
              V. V. Rao, T. Garg, S. P. Datta, Predictive assessment from ANN
              and MLR models to optimize the ideal evaporative / hybrid cooler
              based on experimental observations, Journal of Building
              Engineering
            </a>
          </h3>
          <p className="abstract">
            Single-stage evaporative coolers like a direct evaporative cooler
            (DEC) and indirect evaporative cooler (IEC) are not versatile in
            their applicability in diverse climatic conditions due to their
            dependency on local climatic variation. To overcome this, an
            indigenously designed three-stage cooling system capable of
            operating in single-stage modes like DEC, IEC, and direct expansion
            (DX), and multi-stage modes like IEC-DEC, DEC-DX, and IEC-DEC-DX is
            developed. Detailed energetic and exergetic investigations are
            conducted based on experimental data acquired from 20th-26th of each
            month from April to July 2019. The thermodynamic analyses lead to
            optimizing the ideal cooling system for tropical climate through the
            development and comparison of artificial neural network (ANN) and
            multiple linear regression (MLR) models by predicting the wet-bulb
            effectiveness (ε), coefficient of performance (COP), and exergy
            efficiency (ηex). The input parameters for the predictive models
            include ambient temperature, ambient relative humidity, conditioned
            air temperature, and corresponding relative humidity. Based on the
            predictions, it can be concluded that the ANN is superior to the MLR
            method for performance prediction, with a minimum mean square error.
            Although the IEC-DEC is observed ideal for tropical climate due to
            higher cooling capacity and COP in extreme summer, the efficacy of
            IEC-DEC-DX cannot be ignored for its all-weather competency. The ANN
            models predict thermodynamic performance parameters of proposed
            coolers within the error limit of ±10%.
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Publications;
