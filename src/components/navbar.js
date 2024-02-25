import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <div className="navbar-navbar">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <div className="navbar-branding">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              loading="eager"
              className="navbar-logo"
            />
          </div>
          <div className="navbar-items">
            <div className="navbar-links">
              <a
                href="https://getdigitalbusiness.co.uk/#hero"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link nav-link"
              >
                {props.text}
              </a>
              <a href="#our-services" className="navbar-link1 nav-link">
                {props.text1}
              </a>
              <a href="#about-us" className="navbar-link2 nav-link">
                {props.text21}
              </a>
              <a
                href="https://getdigitalbusiness.co.uk/#contact-us"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link3 nav-link"
              >
                {props.text3}
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <button className="navbar-button button">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navbar-image"
              />
              <span className="navbar-text">{props.text4}</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-nav"
            >
              <div className="navbar-top">
                <div className="navbar-branding1">
                  <img
                    alt={props.logoAlt1}
                    src={props.logoSrc1}
                    className="navbar-logo1"
                  />
                </div>
                <div data-thq="thq-close-menu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon">
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="navbar-items1">
                <div className="navbar-links1">
                  <span className="navbar-text1 nav-link">{props.text2}</span>
                  <a href="#our-services" className="navbar-link4 nav-link">
                    {props.text5}
                  </a>
                  <a href="#about-us" className="navbar-link5 nav-link">
                    {props.text6}
                  </a>
                  <a href="#contact-us" className="navbar-link6 nav-link">
                    {props.text7}
                  </a>
                </div>
                <button className="navbar-button1 start-button button">
                  <span className="navbar-text2">{props.text8}</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  logoSrc: '/cropped-logo-no-background-2-1500w.webp',
  rootClassName: '',
  imageSrc: '/hamburger.svg',
  text1: 'Our Services',
  text7: 'Contact',
  text8: 'Start a project',
  logoSrc1: '/cropped-logo-no-background-2-1500w.webp',
  text6: 'About',
  logoAlt1: 'image',
  text: 'Home',
  imageAlt: 'image',
  text2: 'Home',
  text3: 'Contact',
  logoAlt: 'image',
  text5: 'Our Services',
  text21: 'About',
  text4: 'Start a project',
}

Navbar.propTypes = {
  logoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  logoSrc1: PropTypes.string,
  text6: PropTypes.string,
  logoAlt1: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  logoAlt: PropTypes.string,
  text5: PropTypes.string,
  text21: PropTypes.string,
  text4: PropTypes.string,
}

export default Navbar
