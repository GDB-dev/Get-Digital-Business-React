import React from 'react'

import { Helmet } from 'react-helmet'

import './page-not-found.css'

const PageNotFound = (props) => {
  return (
    <div className="page-not-found-container">
      <Helmet>
        <title>
          Page-Not-Found - Get Digital Business - Professional Website
          Management Services
        </title>
        <meta
          name="description"
          content="Your premier choice for website management services. Transparent pricing, full management, mobile-friendly, from £49/month."
        />
        <meta
          property="og:title"
          content="Page-Not-Found - Get Digital Business - Professional Website Management Services"
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
      <div className="page-not-found-container1">
        <h1 className="page-not-found-text">
          <span>
            Oops! Looks like you&apos;ve ventured into the digital wilderness
          </span>
          <br></br>
        </h1>
        <span className="page-not-found-text3">
          <span>
            Seems like you&apos;ve stumbled upon a digital rabbit hole. No
            worries, even the best explorers get lost. Let&apos;s get you back
            on track! Follow the breadcrumbs to the homepage and let the digital
            adventure continue!
          </span>
          <br></br>
          <br></br>
        </span>
        <a
          href="/"
          target="_blank"
          rel="noreferrer noopener"
          className="page-not-found-link button"
        >
          Take me home
        </a>
      </div>
    </div>
  )
}

export default PageNotFound
