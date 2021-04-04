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
        <Title title="Education" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          {schools && schools.map((school, i) => {
            return (
              <div key={`school-${i}`}>
                <h3>{school.name}</h3>
                <p>{school.description} • {school.year}</p>
              </div>
            )
          })}
          {/* <pre>{JSON.stringify(schools, undefined, 2)}</pre> */}
        </Fade>
        <Title title="Certifcations" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          {certifications && certifications.map((cert, i) => {
            return (
              <div key={`cert-${i}`}>
                <h3>{cert.name}</h3>
                <p>{cert.description} • {cert.year}</p>
              </div>
            )
          })}
          {/* <pre>{JSON.stringify(certifications, undefined, 2)}</pre> */}
        </Fade>
      </Container>
    </section>
  );
};

export default Education;
