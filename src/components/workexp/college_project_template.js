import React from "react";
import "./college_project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import accordion_styles from "./accordion_styles.module.css";
import chevronDown from "./chevron-down.svg";
// ### Add GA4 for click
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img
          className={accordion_styles.chevron}
          src={chevronDown}
          alt="Chevron Down"
        />
      </>
    }
    className={accordion_styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${accordion_styles.itemBtn} ${
          isEnter && accordion_styles.itemBtnExpanded
        }`,
    }}
    contentProps={{ className: accordion_styles.itemContent }}
    panelProps={{ className: accordion_styles.itemPanel }}
  />
);
const CollegeProjects = (props) => {
  return (
    <div className="college_project">
      <div className="row">
        <div className="col-md-3">
          <div>
            <h3 className="prof_name">{props.prof_name}</h3>
            <h4 className="duration">{props.duration}</h4>
            {/* <div className="brief">{props.brief}</div> */}
          </div>
        </div>
        <div className="col-md-9 details">
          <br></br>
          <div className="description">
            <div className={accordion_styles.accordion}>
              <Accordion>
                {props.projects.map((project) => (
                  <AccordionItem header={project.name}>
                    {project.description}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeProjects;
