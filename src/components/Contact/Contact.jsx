import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact, about } = useContext(PortfolioContext);
  const { fullname, email } = contact;
  const { resume } = about;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {fullname}
            </p>
            <p className="contact-wrapper__link">
              <a href={`mailto:${email}`}>
              <i className="fa fa-envelope fa-md"></i>{' '}{email}
              </a>
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={resume}
              >
              Resume
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
