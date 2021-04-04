import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <ul>
            <li>{JSON.stringify(skills, undefined, 2)}</li>
          </ul>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
