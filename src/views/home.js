import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Service from '../components/service'
import Author from '../components/author'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          Get Digital Business - Professional Website Management Services
        </title>
        <meta
          name="description"
          content="Your premier choice for website management services. Transparent pricing, full management, mobile-friendly, from £49/month."
        />
        <meta
          property="og:title"
          content="Get Digital Business - Professional Website Management Services"
        />
        <meta
          property="og:description"
          content="Your premier choice for website management services. Transparent pricing, full management, mobile-friendly, from £49/month."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/63ea9228-afd7-4f78-8d27-760be4eec4b4/f78269f1-ae5b-4511-9934-e8779e2e8eda?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <header className="home-hero">
        <div className="home-header">
          <h1 className="home-title">get digital business</h1>
          <p className="home-description">
            We get digital business, so you can focus on yours
          </p>
          <div className="home-container1">
            <button type="button" className="button">
              <Link to="/packages" className="home-navlink">
                <span>See our packages</span>
                <br></br>
              </Link>
            </button>
            <div className="home-container2">
              <div className="home-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="home-text2">5.0 rating on Google</span>
            </div>
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
            title="Web Hosting"
            description="Power your digital success with our premium web hosting services. Lightning-fast, secure, and fully customizable solutions to keep your online presence running seamlessly."
            rootClassName="service-root-class-name"
          ></Service>
          <Service
            title="Email"
            description="Say goodbye to technical headaches. We configure and optimise your email services, ensuring a hassle-free experience."
            rootClassName="service-root-class-name1"
          ></Service>
          <Service
            title="Domains"
            description="Find and register your ideal domain effortlessly. We take care of DNS management, ensuring a seamless online presence."
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
            all your website management, maintenance and hosting needs.
          </span>
          <Author
            author="Giles Hyatt"
            avatar="/giles-hyatt-200h.webp"
            mention="- Founder"
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
            className="home-image"
          />
        </div>
      </div>
      <section id="contact-us" className="home-contact-us">
        <div className="home-contact-us-container">
          <h2 className="home-text3 heading2">Contact us</h2>
          <form
            name="contact-form"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            action="https://prod-27.uksouth.logic.azure.com:443/workflows/444bd66b21f7414999e296e377e7d3d5/triggers/manual/paths/invoke?api-version=2016-10-01&amp;sp=%2Ftriggers%2Fmanual%2Frun&amp;sv=1.0&amp;sig=TrCFgwfAwlCSGMT1CjAOXlk22un14iCyjxOQWngirm4"
            className="home-form"
          >
            <label className="home-text4">Your Name</label>
            <input
              type="text"
              name="Name"
              required
              placeholder="Your Name"
              className="home-textinput input"
            />
            <label className="home-text5">Your Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="home-textinput1 input"
            />
            <label className="home-text6">Subject</label>
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              className="home-textinput2 input"
            />
            <label className="home-text7">Message</label>
            <textarea
              name="Message"
              placeholder="Your Message"
              className="home-textarea textarea"
            ></textarea>
            <button
              name="form-submit"
              type="submit"
              className="home-button1 button"
            >
              Send your message
            </button>
          </form>
        </div>
      </section>
      <div className="home-footer-container">
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </div>
  )
}

export default Home
