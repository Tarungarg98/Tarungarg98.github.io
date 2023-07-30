import React from "react";
import "./companypage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import accordion_styles from "./accordion_styles.module.css";
import chevronDown from "./chevron-down.svg";
/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
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

const CompanyPage = (props) => {
  return (
    <div className="companypage">
      <div className="row">
        <div className="col-md-3">
          <div>
            <img src={props.image}></img>
          </div>
        </div>
        <div className="col-md-9 details">
          <h3 className="designation">{props.designation}</h3>
          <h4 className="duration">{props.duration}</h4>
          <div className="brief">{props.brief}</div>
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

export default CompanyPage;
