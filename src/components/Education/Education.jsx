import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Education = () => {
  const { education } = useContext(PortfolioContext);
  const { schools, certifications } = education;

  return (
    <section id="education">
      <Container>
        <section id="education-school">
          <Title title="Education" />
          <Fade bottom duration={1000} delay={800} distance="30px">
            {schools && schools.map((school, i) => {
              return (
                <div key={`school-${i}`}>
                  <h3><a href={school.url}>{school.name}</a></h3>
                  <p>{school.description} • {school.year}</p>
                </div>
              )
            })}
          </Fade>
        </section>

        <section id="education-certifications">
          <Title title="Certifications" />
          <Fade bottom duration={1000} delay={800} distance="30px">
            {certifications && certifications.map((cert, i) => {
              return (
                <div key={`cert-${i}`}>
                  <h3><a href={cert.url}>{cert.name}</a></h3>
                  <p>{cert.description} • {cert.year}</p>
                </div>
              )
            })}
          </Fade>
        </section>
      </Container>
    </section>
  );
};

export default Education;
