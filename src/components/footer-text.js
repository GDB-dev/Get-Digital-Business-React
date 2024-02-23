import React from 'react'

import PropTypes from 'prop-types'

import './footer-text.css'

const FooterText = (props) => {
  return (
    <div className={`footer-text-footer-text ${props.rootClassName} `}>
      <span className="footer-text-text">
        <span className="footer-text-text1">
          Get Digital Business is a trading name of a Private Limited Company
          Registered in England and Wales.
        </span>
        <br className="footer-text-text2"></br>
        <span className="footer-text-text3">
          Agile Delivery Consulting Ltd.Company Registration No.
        </span>
        <br></br>
        <br></br>
      </span>
    </div>
  )
}

FooterText.defaultProps = {
  rootClassName: '',
}

FooterText.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterText
