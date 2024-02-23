import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './packages.css'

const Packages = (props) => {
  return (
    <div className="packages-container">
      <Helmet>
        <title>
          Packages - Get Digital Business - Professional Website Management
          Services
        </title>
        <meta
          name="description"
          content="Your premier choice for website management services. Transparent pricing, full management, mobile-friendly, from £49/month."
        />
        <meta
          property="og:title"
          content="Packages - Get Digital Business - Professional Website Management Services"
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
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <section id="hero" className="packages-banner darken-image">
        <h1 className="packages-text cover-text">Our Packages</h1>
        <span className="packages-text01">
          Fully managed websites for Small Business, Trade and Services
        </span>
      </section>
      <div className="packages-pricing">
        <div className="packages-container1">
          <div className="packages-features">
            <h1 className="packages-text02">
              <span>Explore our packages</span>
              <br></br>
            </h1>
            <span className="packages-text05">
              Whether you&apos;re just starting out or growing your online
              presence, we have a plan for you. All of our packages come with
              the following features:
            </span>
            <div className="packages-container2">
              <div className="packages-feature-card">
                <svg viewBox="0 0 1024 1024" className="packages-icon">
                  <path d="M384 0l-384 512h384l-256 512 896-640h-512l384-384z"></path>
                </svg>
                <h2 className="packages-text06">Lightning fast</h2>
                <span className="packages-text07">
                  Our lightning-fast hosting ensures a superior user experience.
                </span>
                <span className="packages-text08">SEE MORE</span>
              </div>
              <div className="packages-feature-card1">
                <svg viewBox="0 0 1024 1024" className="packages-icon02">
                  <path d="M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z"></path>
                </svg>
                <h2 className="packages-text09">Fully responsive</h2>
                <span className="packages-text10">
                  Captivate your audience on any device – our websites are
                  flawlessly responsive.
                </span>
                <span className="packages-text11">SEE MORE</span>
              </div>
              <div className="packages-feature-card2">
                <svg viewBox="0 0 1024 1024" className="packages-icon04">
                  <path d="M512 256q-34 0-60-26t-26-60 26-59 60-25 60 25 26 59-26 60-60 26zM874 256l22 86q-100 28-256 42v554h-86v-256h-84v256h-86v-554q-156-14-256-42l22-86q156 42 362 42t362-42z"></path>
                </svg>
                <h2 className="packages-text12">Accessible to all</h2>
                <span className="packages-text13">
                  Reach everyone. Our designs prioritise accessibility for an
                  inclusive online presence.
                </span>
                <span className="packages-text14">SEE MORE</span>
              </div>
              <div className="packages-feature-card3">
                <svg viewBox="0 0 1024 1024" className="packages-icon06">
                  <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
                <h2 className="packages-text15">SEO friendly</h2>
                <span className="packages-text16">
                  Climb search engine ranks effortlessly with our SEO-friendly
                  website designs.
                </span>
                <span className="packages-text17">SEE MORE</span>
              </div>
              <div className="packages-feature-card4">
                <svg
                  viewBox="0 0 658.2857142857142 1024"
                  className="packages-icon08"
                >
                  <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
                </svg>
                <h2 className="packages-text18">Secure</h2>
                <span className="packages-text19">
                  Our websites are fortified with robust security measures for a
                  safe and secure user experience.
                </span>
                <span className="packages-text20">SEE MORE</span>
              </div>
              <div className="packages-feature-card5">
                <svg viewBox="0 0 1024 1024" className="packages-icon10">
                  <path d="M402.286 182.857v438.857c0 20-16.571 36.571-36.571 36.571v0 329.143c0 20-16.571 36.571-36.571 36.571h-292.571c-20 0-36.571-16.571-36.571-36.571v-292.571l142.286-498.857c2.286-8 9.714-13.143 17.714-13.143h242.286zM585.143 182.857v402.286h-146.286v-402.286h146.286zM1024 694.857v292.571c0 20-16.571 36.571-36.571 36.571h-292.571c-20 0-36.571-16.571-36.571-36.571v-329.143c-20 0-36.571-16.571-36.571-36.571v-438.857h242.286c8 0 15.429 5.143 17.714 13.143zM420.571 18.286v128h-201.143v-128c0-10.286 8-18.286 18.286-18.286h164.571c10.286 0 18.286 8 18.286 18.286zM804.571 18.286v128h-201.143v-128c0-10.286 8-18.286 18.286-18.286h164.571c10.286 0 18.286 8 18.286 18.286z"></path>
                </svg>
                <h2 className="packages-text21">Monitoring</h2>
                <span className="packages-text22">
                  Stay ahead with peace of mind. We&apos;ll proactively monitor
                  your website, ensuring issues are caught before they impact
                  your online presence.
                </span>
                <span className="packages-text23">SEE MORE</span>
              </div>
            </div>
          </div>
          <div className="packages-container3">
            <div className="packages-container4">
              <div className="packages-container5">
                <span className="packages-text24">Starter</span>
                <span className="packages-text25">£49</span>
                <span className="packages-text26">No Setup Costs</span>
                <span className="packages-text27">
                  1-5 Pages
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="packages-text28">SSL Certificate</span>
                <button className="packages-button button">Learn More</button>
              </div>
              <div className="packages-container6">
                <span className="packages-text29">Growth</span>
                <span className="packages-text30">£169</span>
                <span className="packages-text31">upto 10 page website</span>
                <span className="packages-text32">Domain Name</span>
                <span className="packages-text33">Security</span>
                <button className="packages-button1 button">Learn More</button>
              </div>
            </div>
          </div>
          <div className="packages-container7">
            <span>Prices exclude VAT</span>
          </div>
        </div>
      </div>
      <div className="packages-footer-container">
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default Packages
