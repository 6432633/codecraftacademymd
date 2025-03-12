import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Steps = (props) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              {t.steps.title}
            </h2>
            <p className="thq-body-large">
            {t.steps.description}
            </p>
            <div className="steps-actions">
              <button className="thq-button-animated thq-button-filled steps-button" onClick={() => navigate('/pricing')}>
                  <span className="thq-body-small" >{t.steps.buttonText}</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{t.steps.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {t.steps.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3">1</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{t.steps.step2Title}</h2>
              <span className="steps-text17 thq-body-small">
                {t.steps.step2Description}
              </span>
              <label className="steps-text18 thq-heading-3">2</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{t.steps.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {t.steps.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3">3</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{t.steps.step4Title}</h2>
              <span className="steps-text23 thq-body-small">
                {t.steps.step4Description}
              </span>
              <label className="steps-text24 thq-heading-3">4</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step1Description:
    'Browse through our selection of software testing courses and choose the one that best fits your needs.',
  step3Description:
    'Access course materials, watch video lectures, and practice your skills through hands-on exercises.',
  step2Title: 'Enroll in the Course',
  step2Description:
    'Enroll in the course of your choice by completing the purchase process  and visit Learn Now page on our platform.',
  step1Title: 'Choose Your Course',
  step3Title: 'Learn and Practice',
  step4Description:
    'Upon successful completion of the any Pro Course, you will demonstrate your software testing expertise.',
  step4Title: 'Get Ready for Interview',
  buttonText: "Începe acum",  // Means "Start now"
  title: "Как начать",  // Means "How to start"
  description: "Следуйте этим простым шагам, чтобы начать свой путь в IT"  // Means "Follow these simple steps to start your IT journey"
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
  buttonText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Steps
