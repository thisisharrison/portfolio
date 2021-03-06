import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero, footer } = useContext(PortfolioContext);
  const { title, name, subtitle } = hero;
  const { networks } = footer

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title} <span className="text-color-main">{name}</span>
            <br />
            <span className="subtitle">{subtitle}</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                if (url === '') return
                return (
                  <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                    <i className={`fa fa-${name} fa-lg`} />
                  </a>
                );
              })}
            </span>
            </p>
        </Fade>
        <Fade bottom={true} duration={1000} delay={1000} distance="30px">
          <span className="down-to-about">
            <Link to="about" smooth duration={1000}>
              <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
            </Link>
          </span>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
