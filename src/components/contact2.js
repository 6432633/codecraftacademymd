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

        <div className="contact2-row">
          <div className="contact2-content2">
            <img src='/other-images/logo/icons8-email.gif'/>
            <div className="contact2-contact-info1">
              <div className="contact2-content3">
                <h3 className="contact2-text13 thq-heading-3">Email</h3>

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
           <img src='/other-images/logo/icons8-telegram.gif'></img>
            <div className="contact2-contact-info3">
              <div className="contact2-content7">
                <div className="contact-contact-info3">
              <div className="contact-content7">
                <h3 className="contact-text8 thq-heading-3">Telegram</h3>
              </div>
              <a style={{marginTop:"1px"}}href="https://t.me/codecraftacademymoldova">Start chat</a>
            </div>
                
              </div>
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
