import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './website-management.css'

const WebsiteManagement = (props) => {
  return (
    <div className="website-management-container">
      <Helmet>
        <title>Get Digital Business - Professional Website Management</title>
        <meta
          name="description"
          content="Your premier choice for website management services. Transparent pricing, full management, mobile-friendly, from £49/month."
        />
        <meta
          property="og:title"
          content="Get Digital Business - Professional Website Management"
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
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <section id="hero" className="website-management-banner">
        <h1 className="website-management-text">Website Management</h1>
        <span className="website-management-text01">
          Fully managed websites for Small Business, Trade and Services
        </span>
      </section>
      <div className="website-management-features">
        <h2 className="website-management-text02">
          <span>Explore our website management services</span>
          <br></br>
        </h2>
        <span className="website-management-text05">
          Welcome to Get Digital Business, where we take pride in providing
          premium website management services to propel your business forward.
          Whether you&apos;re a startup, small business, or tradesperson, our
          affordable solutions are designed to establish and enhance your online
          presence.
        </span>
        <div className="website-management-container1">
          <div className="website-management-feature-card">
            <svg viewBox="0 0 1024 1024" className="website-management-icon">
              <path d="M480 64c-265.096 0-480 214.904-480 480s214.904 480 480 480c265.098 0 480-214.902 480-480s-214.902-480-480-480zM480 928c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.074 0 384 171.922 384 384s-171.926 384-384 384z"></path>
              <path d="M608 704h-224v-128h96c17.672 0 32-14.326 32-32s-14.328-32-32-32h-96v-32c0-52.934 43.066-96 96-96 34.17 0 66.042 18.404 83.18 48.030 8.85 15.298 28.426 20.526 43.722 11.676 15.296-8.848 20.526-28.424 11.676-43.722-28.538-49.336-81.638-79.984-138.578-79.984-88.224 0-160 71.776-160 160v32h-32c-17.672 0-32 14.326-32 32s14.328 32 32 32h32v192h288c17.674 0 32-14.326 32-32s-14.326-32-32-32z"></path>
            </svg>
            <h2 className="website-management-text06">Affordable pricing</h2>
            <span className="website-management-text07">
              Starting at just £49 per month, our services offer exceptional
              value.
            </span>
            <span className="website-management-text08">SEE MORE</span>
          </div>
          <div className="website-management-feature-card1">
            <svg viewBox="0 0 1024 1024" className="website-management-icon3">
              <path d="M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z"></path>
            </svg>
            <h2 className="website-management-text09">Mobile optimised</h2>
            <span className="website-management-text10">
              Your website will seamlessly adapt to all devices, ensuring a
              positive user experience.
            </span>
            <span className="website-management-text11">SEE MORE</span>
          </div>
          <div className="website-management-feature-card2">
            <svg viewBox="0 0 1024 1024" className="website-management-icon5">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
            <h2 className="website-management-text12">Fully managed</h2>
            <span className="website-management-text13">
              We take care of building, hosting, and managing your website,
              allowing you to focus on your business.
            </span>
            <span className="website-management-text14">SEE MORE</span>
          </div>
          <div className="website-management-feature-card3">
            <svg viewBox="0 0 1024 1024" className="website-management-icon7">
              <path d="M554 426v-170h-84v170h84zM554 598v-86h-84v86h84zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
            </svg>
            <h2 className="website-management-text15">No Hidden Fees</h2>
            <span className="website-management-text16">
              We believe in transparency – no surprises, just a clear and honest
              pricing structure.
            </span>
            <span className="website-management-text17">SEE MORE</span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default WebsiteManagement
