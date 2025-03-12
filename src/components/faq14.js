import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq14.css'

const FAQ14 = (props) => {
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <div className="faq14faq8 thq-section-padding">
      <div className="faq14-max-width thq-section-max-width">
        <div className="faq14-container10 thq-flex-column">
          <div className="faq14-section-title thq-flex-column">
            <h2 className="faq14-text10 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="faq14-text31">FAQs</span>
                </Fragment>
              )}
            </h2>

            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="faq14-text21">Contact Us</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="faq14-list thq-flex-column">
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq14-trigger1"
              >
                <p className="faq14-faq1-question1 thq-body-large">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="faq14-text32">
                        What is software testing?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon10">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon12">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq14-container13">
                  <span className="thq-body-small">
                  Software Testing is the process of evaluating a software application or system to identify any defects, errors, or gaps in functionality, ensuring it meets the specified requirements and works as intended. It involves executing the software under controlled conditions to verify its quality, reliability, performance, and security.

A Software Tester is a professional responsible for designing and executing test cases, identifying bugs, and reporting issues to developers. They ensure the software is free of defects and meets user expectations by using manual or automated testing techniques. Their role is critical in delivering a high-quality, user-friendly product.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq14-trigger2"
              >
                <p className="faq14-faq2-question1 thq-body-large">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="faq14-text27">
                        What are the benefits of taking software testing
                        courses?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon14">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon16">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq14-container16">
                  <span className="thq-body-small">
                  Taking software testing courses, especially our Pro Courses, offers significant benefits for career growth in the tech industry. These courses provide expert-led training, hands-on experience with real-world projects, and up-to-date knowledge of tools and methodologies like Selenium and Agile. By gaining certifications and practical skills, you enhance your employability, stay competitive, and validate your expertise in software testing. Pro Courses also offer flexible learning options, making it easier to balance professional development with other commitments.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq14-trigger3"
              >
                <p className="faq14-faq2-question2 thq-body-large">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="faq14-text29">
                        Are the certifications offered by the academy recognized
                        in the industry?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon18">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon20">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq14-container19">
                  <span className="thq-body-small">
                  Yes, the academy offers certifications that can add value to your profile. However, in the software testing industry, practical knowledge and hands-on experience are often prioritized over certificates. Employers typically look for candidates who demonstrate strong skills, problem-solving abilities, and familiarity with tools and methodologies. While our certifications can help showcase your commitment to learning, the real focus should be on gaining in-depth knowledge and practical expertise to excel in your career.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq14-trigger4"
              >
                <p className="faq14-faq2-question3 thq-body-large">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="faq14-text26">
                        How can I choose the right pricing plan for me?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon22">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon24">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq14-container22">
                  <span className="thq-body-small">
                  To choose the right pricing plan, consider your learning goals and career needs. We offer two types of courses: Standard and Pro. The Standard plan provides access to video lessons, ideal for self-paced learners. The Pro plan, on the other hand, offers a comprehensive package, including an individual learning plan, mentorship, interview readiness preparation, extensive practice opportunities, CV assistance, and mentor-led sessions. If you're looking for a more personalized and career-focused approach with hands-on support, the Pro plan is the best choice. Evaluate your requirements and select the plan that aligns with your aspirations.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq14-trigger5"
              >
                <p className="faq14-faq1-question2 thq-body-large">
                  {props.faq5Question ?? (
                    <Fragment>
                      <span className="faq14-text22">
                        Can I interact with instructors during the courses?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container5">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon26">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon28">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq14-container25">
                  <span className="thq-body-small">
                    Only Pro Courses offer live sessions with instructors.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="faq14-content1 thq-flex-column">
          <div className="faq14-content2">
            <h2 className="faq14-text18 thq-heading-2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq14-text30">Still have a question?</span>
                </Fragment>
              )}
            </h2>
            <span className="faq14-text19 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="faq14-text23">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="faq14-text28">Email us</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

FAQ14.defaultProps = {
  action1: undefined,
  faq5Question: undefined,
  content2: undefined,
  faq4Question: undefined,
  faq2Question: undefined,
  action2: undefined,
  faq3Question: undefined,
  heading2: undefined,
  heading1: undefined,
  faq1Question: undefined,
  content1: undefined,
}

FAQ14.propTypes = {
  action1: PropTypes.element,
  faq5Question: PropTypes.element,
  content2: PropTypes.element,
  faq4Question: PropTypes.element,
  faq2Question: PropTypes.element,
  action2: PropTypes.element,
  faq3Question: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  faq1Question: PropTypes.element,
  content1: PropTypes.element,
}

export default FAQ14
