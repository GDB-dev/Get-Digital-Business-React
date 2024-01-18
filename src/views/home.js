import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Service from '../components/service'
import Author from '../components/author'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Get Digital Business</title>
        <meta property="og:title" content="Get Digital Business" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <img
              alt="image"
              src="/cropped-logo-no-background-2-1500w.png"
              loading="eager"
              className="home-logo"
            />
          </div>
          <div className="home-items">
            <div className="home-links">
              <span className="home-text nav-link">Home</span>
              <a href="#our-services" className="home-link nav-link">
                Our Services
              </a>
              <a href="#about-us" className="home-link1 nav-link">
                About
              </a>
              <a href="#contact-us" className="home-link2 nav-link">
                Contact
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button button">
              <img alt="image" src="/hamburger.svg" className="home-image" />
              <span className="home-text01">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <img
                    alt="image"
                    src="/cropped-logo-no-background-2-1500w.png"
                    className="home-logo1"
                  />
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links1">
                  <span className="home-text02 nav-link">Home</span>
                  <a href="#our-services" className="home-link3 nav-link">
                    Our Services
                  </a>
                  <a href="#about-us" className="home-link4 nav-link">
                    About
                  </a>
                  <a href="#contact-us" className="home-link5 nav-link">
                    Contact
                  </a>
                </div>
                <button className="home-button1 start-button button">
                  <span className="home-text03">Start a project</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-header">
          <h1 className="home-title">get digital business</h1>
          <p className="home-description">
            We get digital business, so you can focus on yours
          </p>
          <div className="home-container1">
            <button type="button" className="button">
              <span className="home-text04 start-button button">
                <span>See our packages</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </header>
      <div className="home-services">
        <div className="home-header1">
          <h2 id="our-services" className="heading">
            OUR SERVICES
          </h2>
        </div>
        <div className="home-grid">
          <Service
            Title="Web Hosting"
            Description="Power your digital success with our premium web hosting services. Lightning-fast, secure, and fully customizable solutions to keep your online presence running seamlessly."
            rootClassName="service-root-class-name"
          ></Service>
          <Service
            Title="Email"
            Description="Say goodbye to technical headaches. We configure and optimise your email services, ensuring a hassle-free experience."
            rootClassName="service-root-class-name1"
          ></Service>
          <Service
            Title="Domains"
            Description="Find and register your ideal domain effortlessly. We take care of DNS management, ensuring a seamless online presence."
            rootClassName="service-root-class-name5"
          ></Service>
        </div>
      </div>
      <div className="home-about">
        <div className="home-header2">
          <h2 id="about-us" className="home-company">
            About Us
          </h2>
          <span className="home-description1">
            At Get Digital Business, we believe that a strong online presence is
            the key to success in today&apos;s digital world. We understand that
            managing a website can be a daunting task, especially for business
            owners who are already juggling numerous responsibilities.
            That&apos;s why we are here to simplify the process and take care of
            all your website maintenance and hosting needs.
          </span>
          <Author
            Author="Giles Hyatt"
            Avatar="/giles-hyatt-200h.jpeg"
            Mention="- Founder"
          ></Author>
        </div>
      </div>
      <div className="home-clients">
        <div className="home-header3">
          <h2 className="home-title2 heading">Our Clients</h2>
        </div>
        <div className="home-grid1">
          <img
            alt="image"
            src="https://s3.eu-west-1.amazonaws.com/www.corporategainers.com/img/CG-logo-blue.svg"
            loading="lazy"
            className="home-image1"
          />
        </div>
      </div>
      <footer className="home-contact-us">
        <div id="contact-us" className="home-information">
          <div className="home-details">
            <div className="home-header4">
              <div className="home-branding2">
                <img
                  alt="get digital business logo"
                  src="/cropped-logo-no-background-2-1500w.png"
                  loading="lazy"
                  className="home-logo2"
                />
              </div>
              <div className="home-location"></div>
            </div>
            <div className="home-location1">
              <span className="home-caption">Let&apos;s talk</span>
              <a
                href="mailto:hello@getdigitalbusiness.co.uk?subject=Website Enquiry"
                className="home-value"
              >
                hello@getdigitalbusiness.co.uk
              </a>
            </div>
            <button className="home-button3 start-button button">
              <span className="home-text07">Start a project</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHdlYnNpdGV8ZW58MHx8fHwxNjk5NzMxOTcxfDA&amp;ixlib=rb-4.0.3&amp;w=800"
          loading="lazy"
          className="home-image2"
        />
      </footer>
      <div className="home-feature-flag-test">
        <span id="contactForm">
          <span>Feature Flag on!</span>
          <br></br>
          <br></br>
        </span>
        <div>
          <div className="home-container3">
            <Script
              html={`<script>

  const manifestPath = '/manifest.json';

    fetch(manifestPath)
    .then(response => response.json())
    .then(data => {
        const manifest = data;
        // Now you can use the manifest object in your code
    })
    .catch(error => console.error('Error fetching manifest.json:', error));

  const isContactFormEnabled = manifest.featureGroups[0].features[0].values.some(value => {
    return (
      value.environmentName === "Production" &&
      value.optionId === "on"
    );
  });
  console.log (isContactFormEnabled)
  const myElement = document.getElementById("contactForm");

  if (isContactFormEnabled) {
    myElement.style.display = "block";
  } else {
    myElement.style.display = "none";
  }
  console.log (isContactFormEnabled)
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <div className="home-footer-text">
        <span className="home-text12">
          <span className="home-text13">
            Get Digital Business is a trading name of a Private Limited Company
            Registered in England and Wales.
          </span>
          <br className="home-text14"></br>
          <span className="home-text15">
            Agile Delivery Consulting Ltd.Company Registration No.
          </span>
          <br></br>
          <br></br>
        </span>
      </div>
      <div id="cookie-banner" className="home-cookie-banner cookie-banner">
        <div className="home-content">
          <span className="home-text18">
            We use cookies to give you the best experience
          </span>
        </div>
        <div className="home-accept-button start-button button">
          <button id="accept-cookies" type="button" className="button">
            Accept
          </button>
        </div>
        <div>
          <div className="home-container5">
            <Script
              html={`<script>
    document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');

  if (getCookie('cookie-consent')) {
    cookieBanner.style.display = 'none';
  }

  acceptButton.addEventListener('click', function () {
    setCookie('cookie-consent', 'accepted', 365); // Set a cookie that expires in 365 days
    cookieBanner.style.display = 'none';
  });
});

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires + '; path=/';
}

function getCookie(name) {
  const cookieName = name + '=';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
}
</script>`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
