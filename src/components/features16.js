import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features16.css'

const Features16 = (props) => {
  return (
    <div className="features16-layout300 thq-section-padding">
      <div className="features16-max-width thq-section-max-width">
        <div className="features16-section-title">
      
          <div className="features16-content1">
            <h2 className="features16-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features16-text15">
                    Key Features of Our Software Testing Courses
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features16-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="features16-text16">
                    Explore the top features that make our courses stand out
                    from the rest.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features16-content2">
          <div className="features16-row thq-flex-row">
            <div className="features16-feature1">
              <img
                alt={props.feature1ImageAlt}
                src="/other-images/pricing/computer-2557299_1280.jpg"
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content3">
                <h3 className="features16-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features16-text19">
                        Interactive Learning Experiences
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features16-text14">
                        Engage in hands-on activities and interactive modules to
                        enhance your understanding. This is availablein Pro courses.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature2">
              <img
                alt={props.feature2ImageAlt}
                src="/other-images/pricing/macbook-926558_1280.jpg"
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features16-text17">
                        Individual Learning Plan
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features16-text18">
                        Our Pro courses are led by an experienced mentor which will make a individual learning plan.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature3">
              <img
                alt={props.feature3ImageAlt}
                src="/other-images/pricing/programming-2115930_1280.jpg"
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features16-text13">
                        Flexible Pricing Plans
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features16-text20">
                        Choose from a variety of pricing options to suit your
                        budget and learning goals.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features16.defaultProps = {
  feature3Title: undefined,
  feature1Description: undefined,
  feature2ImageAlt: 'Certifications',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1560235030-d8778da779df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwNTQ5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  content1: undefined,
  feature3ImageAlt: 'Pricing Plans',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1512101147095-d05249ea9a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwNTQ5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature2Description: undefined,
  feature1Title: undefined,
  feature1ImageAlt: 'Interactive Learning',
  feature3Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwNTQ5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  slogan1: undefined,
}

Features16.propTypes = {
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  slogan1: PropTypes.element,
}

export default Features16
