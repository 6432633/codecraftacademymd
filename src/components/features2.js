import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features2.css'
import { useLanguage } from '../context/LanguageContext'

const Features2 = (props) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{t.features2.title}</h2>
              <span className="thq-body-small" dangerouslySetInnerHTML={{ __html: t.features2.description }} />
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{t.features2.proHighlights}</h2>
              <span className="thq-body-small">
                1. {t.pricing.features.accessLessons}<br/>
                2. {t.pricing.features.liveSession}<br/>
                3. {t.pricing.features.mockInterviews}<br/>
                4. {t.pricing.features.cvAssistance}<br/>
                5. {t.pricing.features.individualPlan}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2">{t.features2.standardHighlights}</h2>
              <span className="thq-body-small">
                {t.features2.duration}<br/>
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src="/slider-asstes/laptop-2620118_1920.jpg"
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src="/slider-asstes/engineer-4904884_1280.jpg"
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src="/slider-asstes/ai-generated-8237711_1280.jpg"
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature1ImgAlt: 'feature 1',
  feature2ImgAlt: 'Illustration of comprehensive course content',
  feature3ImgAlt: 'image',
}

Features2.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features2
