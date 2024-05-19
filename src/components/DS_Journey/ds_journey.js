import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ds_journey.css";
import { AppContext } from "../../context/AppContext";

const DS_Journey = () => {
  const { dispatch } = useContext(AppContext);

  let navigate = useNavigate();
  const changeView = () => {
    navigate("/", { replace: false });
  };
  return (
    <div className="ds_journey" id="Blog_DS_Journey">
      <h1 align="center">Data Science Career Roadmap</h1>
      <br></br>
      <p>
        Hi, myself Tarun Garg, a 2021 graduate from BITS Pilani Hyderabad
        Campus, currently working as a Data Scientist @ Cars24. Like every other
        dualite, I joined BITS with the hope of getting CS as a dual degree.
        Since the beginning, I have been interested in the IT sector, having a
        strong base with Informatics Practices as my 5th Subject in 11/12.
      </p>
      <p>
        In 1st year I scored well in CP (10 grade point) but couldn’t perform
        well in other subjects. Unfortunately, grades do matter, and I wasn’t
        even close to getting CS as my dual. Not happy with it, unsure about the
        future, I spent my 2nd year relatively unproductively.
      </p>
      <h4>My journey in Data Science</h4>
      <p>
        During my PS1, I started with Python (not as a PS project), explored
        various libraries. The first thing I developed using python was a game
        (thanks to a friend who pushed me into this and made sure that I am
        learning something every day). It does work, if you have a friend/family
        member who can push you beyond your comfort zone, then don’t disappoint
        them, instead use it as the motivation to improve yourself.
      </p>
      <p>
        After designing that game, I kept on exploring python further and deep
        dived on various ML concepts with practical experience. I got an
        opportunity to work with a professor on-campus on an image processing
        project. It was my first hands-on project. After that, I managed to grab
        an off-campus SI in the NLP domain. There I worked on 2 awesome
        projects, which were my best among multiple internships. Next, I worked
        on another project with the college professor which is published in a
        Journal. I also worked as a Data Science Intern at Walmart Labs. By that
        time, I had decided that I want to pursue a career in Data Science.
        Further, I did a yearlong remote thesis at the AI Institute, University
        of South Carolina. I chose to do a thesis because I wanted to explore
        research, and I didn’t want to go for an SDE PS2. After having hard luck
        in placements for the DS job, I managed to grab an off-campus
        opportunity at Cars24 as a Junior Data Scientist.
      </p>
      <h4>Why I chose DS as my career option ?</h4>
      <p>
        With my limited experience, I was more fascinated by real-world
        applications and visualizing everything in detail. DS provided both. I
        can visualize the data, understand it and then make decisions according
        to it. Competitive coding was tough for me and I wasn’t fascinated by it
        either. Getting a career in DS is equally challenging, but it is about
        where your passion lies. I am enjoying my current work, and I see
        considerable growth potential for me in the Data Science field.
      </p>
      <h4>What is it like to work as a Data Scientist?</h4>
      <p>
        At 99 roomz, I worked on NER + docker + python + web dev. Initially, we
        did data cleaning, researched the model architecture, fine-tuned the
        data pipeline. After the model was trained with sufficient accuracy, we
        developed API using Flask. To host our model API, a website was designed
        using HTML, CSS and Javascript. The front-end and backend package was
        pushed into docker and is hosted over AWS EC2 Instance. This was my
        first formal work experience and I didn’t really knew any tech stack
        before joining. I managed to learn this all during my SI and delivered
        an excellent project.
      </p>
      <p>
        At Walmart Labs, I worked on Anomaly Detection in Power Consumption
        across various Walmart Stores. There, I conducted Time Series Analysis
        and then trained a Neural Network over it. The results were showcased as
        a POC designed using dash and plotly.
      </p>
      <p>
        At AIISC, I got a chance to deep dive into Knowledge Graphs and Natural
        Language Processing. I spent a reasonable amount of time reading about
        the ongoing research and their business use. I worked on a project using
        Knowledge Graphs and Language Models, which is published in IEEE
        conference.
      </p>
      <p>
        My work as a Data Scientist at Cars24 primarily revolved around Fraud
        Detection. In this project I worked on predicting fraudulent patterns in
        a transaction using historical data of dealers data, auction patters and
        seller - dealer collusion. This was my first experience working with
        large data, so optimizing the algorithms was essential. Currently I am
        working on Auction Efficiency. The tech stack revolves primarily around
        Python and SQL.
      </p>
      <p>
        Remember one thing, DS is not the same as ML/DL. In DS, we primarily
        work with data (using Dataframe, dictionaries and all), cleaning data,
        preparing pipeline, historical analysis, and ML models as a part. You
        might not always work on complex ML models. If you seek to work on the
        research side, then thesis / RAship / higher studies would be a better
        option. But don’t jump to conclusions directly, instead take the
        experience of both the business and research side through internships.
        <p>
          While working as a experienced professional, your job isn’t just about
          handling data and training models. Rather, you own projects, you talk
          with stakeholders, pitch your ideas, handle the pushbacks and deliver
          the optimized products. Inter-team and intra-team conversations, both
          play a crucial role as you grow in your career. To all Data Scientists
          in the initial stages of the career, I would highly recommended to
          take full ownership of your projects, be part of your project meetings
          with other stakeholders. After a couple of years of experience, try
          mentoring interns / freshers within your team, you can do so
          informally too. These exercises will help you grow as a true
          professional. Remember, to not be just a manager, but a leader, who
          empowers people around them.
        </p>
      </p>
      <h4>How to get DS projects/internships/jobs?</h4>
      <p>
        For on-campus projects, most of the departments need AI/ML at some
        places. So you can take up an informal project under such faculties or
        take a formal interdisciplinary project. I started my DS career with
        projects under a campus Professor. You need to have basic technical
        skills and should be able to draft an approach on how you can help them
        solve a particular problem.
      </p>
      <p>
        For internships, especially in DS, you are generally provided with an
        assignment followed by a round of interviews. During my time, there
        wasn’t many companies for DS on campus for Summer Internship. So my
        experiences are for off-campus opportunities. In the assignment and
        interviews, your approach matters more than your results. You may get
        90%+ accuracy with your results, but if you can’t explain the approach
        in-depth, the interviewer will not be impressed. They don’t care about
        your results, they want to gauge your aptitude skills. They want to know
        how analytical you can be from a business perspective. Don’t just try to
        tell your answer to the interviewer, rather continuously interact with
        them about your findings. They do provide valuable tips to solve the
        given problem. Suppose you are provided with a problem statement. You
        figured out an approach, but it is yielding only 60% accuracy. Don’t
        spend hours fine-tuning it. Instead, you can spend some time analysing
        why the accuracy is low. Then formulate 1-2 other approaches and then
        compare which one is best. The interviewer will be impressed that you
        tried to solve the problem in various ways and did not limit yourself to
        one approach. We do need to make some assumptions in DS, do mention them
        clearly along with the reasons.
      </p>
      <p>
        For thesis, having prior publications helps a lot, you can do so via
        on-campus projects. For an off-campus thesis, you have to mail profs of
        your interests through personalized emails. Mention clearly your
        research interests and how they align with the research area of the
        prof. Read a few of their papers and try to summarize them or at least
        talk about them in brief. Some prof provides funded thesis, especially
        in tech fields. But if you have a low profile and are unable to get
        funding, then thesis/ RAship at an Indian University might help. It will
        have less cost and you will require less time to adjust thus better
        exposure. If you already have a job offer through SI/Placements then I
        would definitely suggest you explore research by opting for a thesis. It
        takes effort to get a good thesis but it is worth the effort. You learn
        a lot during the application process and during the thesis.
      </p>
      <p>
        Try to get maximum exposure during college by doing internships,
        projects in various domains. It will help you in having a decent idea
        about which career path suits you the best.
      </p>
      <p>
        For jobs as a fresher, it’s tough as of now. For DS work, experience is
        required as your predictions highly influence the business outcomes.
        Thus, companies hesitate to assign such responsibilities to a fresher.
        But with increasing demand in DS, things might get better in future. In
        case you are finding it difficult to get a job in DS, you have 2
        options. Either start with an SDE role and switch later, or do DS
        internships even after graduation, if required. I would say to go for
        the former if you have the slightest inclination towards SDE, but if you
        are purely interested in DS, later will suit you well. At Cars24, I was
        referred by a friend. The interview process consisted of an assignment
        and 2 interviews.
      </p>
      <h4>How to prepare for a Data Science career ?</h4>
      <p>
        For DS, 2 things are quite important. Good technical depth at basic ML
        algorithms and good DS projects on your profile with technical depth
        over them. For ML research, have more focus on the research aspects,
        model architecture and all. For corporate, have more focus on business
        outcomes. They don’t care much about what you did. They want to you know
        that how vital asset were you to the organization. After that, they will
        deep dive into the technical depth of your projects. Interviewers used
        to ask me to choose any one of the projects mentioned in my resume. They
        would then go into the depth of it. So you should have at least one good
        project on your resume with end-to-end technical and business use case
        knowledge. Mention the summary of your results, the model accuracy and
        other parameters. Describe how your works helped the organization.
      </p>
      <p>
        Since my resume had many projects, most of my internship/job interviews
        revolved around my resume. I had excellent projects, which provided me
        with an advantage over other candidates. So do focus on getting good DS
        projects/internships.
      </p>
      <p>
        To sum up, a career in DS is not a cakewalk, neither is SDE or other
        jobs. It’s about your passion. Explore various things with hands-on
        projects before making any decision in your career. It’s not about what
        you are doing today or tomorrow. It about what you want to do in the
        next 5-10 years. Don’t take that decision with imperfect information. If
        you work hard, things will align your way, and no career option is
        difficult. Thanks for reading, good luck with your future.
      </p>
      <center>
        <button onClick={changeView}>Home</button>
      </center>
    </div>
  );
};

export default DS_Journey;
