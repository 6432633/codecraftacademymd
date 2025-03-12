import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './logos8.css'

const Logos8 = (props) => {
  return (
    <div className="logos8-container1 thq-section-padding">
      <div className="logos8-max-width thq-section-max-width">
        <div className="logos8-container2">
          <h2 className="thq-heading-2 logos8-text1">
            {props.heading1 ?? (
              <Fragment>
                <span className="logos8-text3">
                  Enhance Your Software Testing Skills with Our Courses
                </span>
              </Fragment>
            )}
          </h2>
          <p className="logos8-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="logos8-text4">
                  Choose from a variety of comprehensive software testing
                  courses designed to help you advance your knowledge and
                  expertise in the field. Our hands-on learning experiences and
                  industry-recognized certifications will equip you with the
                  skills needed to succeed.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="logos8-container3 thq-grid-2">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos8-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos8-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos8-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos8-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos8-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos8-logo6 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo7Alt}
            src={props.logo7Src}
            className="logos8-logo7 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo8Alt}
            src={props.logo8Src}
            className="logos8-logo8 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos8.defaultProps = {
  logo7Alt: 'Expertise Demonstration Logo',
  logo3Alt: 'Hands-On Learning Logo',
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Alt: 'Wide Range of Topics Logo',
  logo2Alt: 'Certification Courses Logo',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  heading1: undefined,
  content1: undefined,
  logo8Alt: 'Online Learning Experience Logo',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'Software Testing Academy Logo',
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo6Alt: 'Flexible Pricing Plans Logo',
  logo4Alt: 'Industry-Recognized Certifications Logo',
}

Logos8.propTypes = {
  logo7Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo8Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  logo8Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo6Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo7Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
}

export default Logos8
