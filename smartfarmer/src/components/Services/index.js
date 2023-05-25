import React from 'react';
import Icon1 from '../../images/undraw_google_docs_re_evm3.svg'
import {
         ServicesH1,
         ServicesH2,
         ServicesContainer,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         Servicesp
} from './ServiceElements';
import { Button } from '../ButtonElements';

const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesH1>Documents</ServicesH1>
        <ServicesWrapper>
          <ServicesCard data-aos="fade-up">
            <ServicesIcon src={Icon1} />
            <ServicesH2>Topic Assessment</ServicesH2>

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
            <ServicesH2>Project Charter</ServicesH2>
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
            <ServicesH2>Project Proposal</ServicesH2>
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
            <ServicesH2>Status Document I</ServicesH2>
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
            <ServicesH2>Status Document II</ServicesH2>
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
            <ServicesH2>Research Paper</ServicesH2>
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
            <ServicesH2>Final Report</ServicesH2>
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
            <ServicesH2>Poster</ServicesH2>
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
}

export default Services
