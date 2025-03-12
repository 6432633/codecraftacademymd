import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src="/other-images/contactus/student-849821_1920.jpg"
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text22">
                  Engage in expert-led courses covering manual testing,
                  automation testing, and performance testing.
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text27">
                  Why Choose Our Software Testing Courses?
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text23">
                  Enhance your skills and knowledge in software testing to
                  advance your career.
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text21">Comprehensive Courses</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text31">
                      Access a wide range of courses designed to provide a
                      comprehensive learning experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text29">
                      Flexible Pricing Plans
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text26">
                      Choose from various pricing plans to suit your learning
                      needs.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text24">Interactive Learning</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text30">
                      Participate in interactive learning experiences to deepen
                      your understanding.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text25">
                      Industry-Recognized Certifications
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text28">
                      Earn certifications that are recognized by industry
                      professionals and employers.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat1: undefined,
  content1: undefined,
  content2: undefined,
  image1Alt: 'Software Testing Courses',
  stat3: undefined,
  stat4: undefined,
  stat2Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1646290671187-f02266954283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwNTcyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  stat4Description: undefined,
  stat2: undefined,
  stat3Description: undefined,
  stat1Description: undefined,
}

Stats2.propTypes = {
  stat1: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3: PropTypes.element,
  stat4: PropTypes.element,
  stat2Description: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  stat4Description: PropTypes.element,
  stat2: PropTypes.element,
  stat3Description: PropTypes.element,
  stat1Description: PropTypes.element,
}

export default Stats2
