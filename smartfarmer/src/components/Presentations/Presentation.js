import React from "react";
import Icon1 from "../../images/undraw_presentation_re_sxof.svg";
import {
  ServicesH1,
  ServicesH2,
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  Servicesp,
} from "./PresentationElements.js";
import { Button } from "../ButtonElements";

const Presentations = () => {
  return (
    <ServicesContainer id="presentation">
      <ServicesH1>Presentations</ServicesH1>
      <ServicesWrapper>
        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <div style={{height:'40px',  marginBottom:'30px'}}>
          <ServicesH2>Project Proposal</ServicesH2></div>
          
            <Button
              to="signup"
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              View
            </Button>
    
        </ServicesCard>

        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <div style={{height:'40px',  marginBottom:'30px'}}>
          <ServicesH2>Progress Presentation I</ServicesH2></div>
          <Button
            to="signup"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            View
          </Button>
        </ServicesCard>

        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <div style={{height:'40px',  marginBottom:'30px'}}>
          <ServicesH2>Progress Presentation II</ServicesH2></div>
          <Button
            to="signup"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            View
          </Button>
        </ServicesCard>

        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <div style={{height:'40px',  marginBottom:'30px'}}>
          <ServicesH2>Final Presentation</ServicesH2>
     </div>
            <Button
              to="signup"
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              View
            </Button>
        
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Presentations;
