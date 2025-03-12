import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact2.css'

const Contact2 = (props) => {
  return (
    <div className="contact2-contact20 thq-section-padding">
      <div className="contact2-max-width thq-section-max-width">
        <div className="contact2-section-title">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact2-text28">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact2-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact2-text27">Contact Us</span>
                </Fragment>
              )}
            </h2>
           
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src="/other-images/contactus/envelopes-6919301_1920.jpg"
          className="thq-img-ratio-16-9"
        />
        <div className="contact2-row">
          <div className="contact2-content2">
            <img src='/other-images/logo/icons8-email.gif'/>
            <div className="contact2-contact-info1">
              <div className="contact2-content3">
                <h3 className="contact2-text13 thq-heading-3">Email</h3>
                <p className="contact2-text14 thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact2-text23">
                        We are available non stop
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact2-email thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact2-text25">
                      info@softwaretestingacademy.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact2-content4">
            <img src='/other-images/logo/icons8-whatsapp.gif'></img>
            <div className="contact2-contact-info2">
              <div className="contact2-content5">
                <h3 className="contact2-text15 thq-heading-3">WhatsApp</h3>
                <p className="contact2-text16 thq-body-large">
                  {props.content4 ?? (
                    <Fragment>
                      <span className="contact2-text19">
                      We look forward to hearing from you on WhatsApp!
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact2-phone thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact2-text24">+1-234-567-8901</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact2-content6">
           <img src='/other-images/logo/icons8-skype.gif'></img>
            <div className="contact2-contact-info3">
              <div className="contact2-content7">
                <h3 className="contact2-text17 thq-heading-3">Skype</h3>
                <p className="contact2-text18 thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact2-text26">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact2-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact2-text29">
                      123 Software Testing Street, Online Academy City, 54321
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

Contact2.defaultProps = {
  content4: undefined,
  content1: undefined,
  content3: undefined,
  phone1: undefined,
  email1: undefined,
  content5: undefined,
  heading1: undefined,
  content2: undefined,
  address1: undefined,
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1709777858933-1b0133efc318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwNTcyMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Contact2.propTypes = {
  content4: PropTypes.element,
  content1: PropTypes.element,
  content3: PropTypes.element,
  phone1: PropTypes.element,
  email1: PropTypes.element,
  content5: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  address1: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Contact2
