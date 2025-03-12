import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'
import { useLanguage } from '../context/LanguageContext'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  const { t } = useLanguage();
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="thq-img-ratio-1-1 stats2-image">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src="/other-images/laptop-2557466_1920.jpg"
              className="thq-img-ratio-1-1 stats2-image"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src="/other-images/programmer-1653351_1920.png"
              className="thq-img-ratio-1-1 stats2-image"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature2ImgAlt}
              src="/slider-asstes/engineer-4904884_1280.jpg"
              className="thq-img-ratio-1-1 stats2-image"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{t.features.feature1Title}</h2>
              <span className="thq-body-small">
                {t.features.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{t.features.feature2Title}</h2>
              <span className="thq-body-small">
                {t.features.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{t.features.feature3Title}</h2>
              <span className="thq-body-small">
                {t.features.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1ImgAlt: 'Software Testing Course Image',
  feature3Description:
    'Our Pro courses offer lessons, exercises, and tests individually, according your speed of learning. The mentor will help you to understand deeper every topic and will give you tasks simillar to real world tasks',
  feature3Title: 'Individual Learning Plan',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1593491205049-7f032d28cf5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1581094275452-f5df25d2556e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Engage in hands-on learning activities and real-world requirements to enhance your understanding of software testing concepts. Available in Pro Courses.',
  feature1Title: 'Comprehensive Software Testing Courses',
  feature3ImgAlt: 'Certification Image',
  feature1Description:
    'Learn the ins and outs of software testing with our comprehensive Pro courses designed to equip you with the necessary skills and knowledge.',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Interactive Learning Image',
  feature2Title: 'Interactive Learning Experience',
}

Features1.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features1
