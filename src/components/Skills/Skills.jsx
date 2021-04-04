import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import "devicon/devicon.min.css"

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div>
            {skills.map((skill) => {
              const { id, icon, name } = skill;
              return (
                <OverlayTrigger
                  key={id}
                  placement="bottom"
                  overlay={
                    <Tooltip id={`skills-tooltip-${id}`}>
                      {name}
                    </Tooltip>
                  }>
                    <i className={`devicon-${icon}-plain skills-icon`} />
                </OverlayTrigger>
              )
            })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
