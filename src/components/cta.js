import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const CTA = (props) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{t.cta.title}</span>
                <p className="thq-body-large">{t.cta.description}</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="thq-button-filled cta-button" onClick={() => {navigate('/courses')}}>
                  {t.cta.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  heading: undefined,
  description: undefined,
  buttonText: undefined,
  learnMore: undefined
}

CTA.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  learnMore: PropTypes.string
}

export default CTA
