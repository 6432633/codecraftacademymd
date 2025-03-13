import React, { Fragment, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Navbar41 from '../components/navbar41'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet'
import './courses.css'

const Courses = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {window.scrollTo(0,0)})
  const { t } = useLanguage()
  const [imageError, setImageError] = useState({})

  const handleImageError = (id) => {
    setImageError(prev => ({...prev, [id]: true}))
    console.error(`Failed to load image for course ${id}`)
  }

  return (
    <div>
      <Helmet>
        <title>{t.courses.pageTitle}</title>
        <meta
          property="og:title"
          content={t.courses.pageTitle}
        />
        <meta
          property="og:description"
          content={t.courses.pageDescription}
        />
      </Helmet>
      <Navbar41
        link1={
          <Fragment>
            <span className="contact1-text10">{t.navigation.home}</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact1-text13">{t.navigation.courses}</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact1-text15">{t.pricing.title}</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact1-text11">{t.navigation.contacts}</span>
          </Fragment>
        }
      ></Navbar41>

      <div className="course-container">
        <div className="course-card">
          <img 
            src="/other-images/courses/3463986.jpg" 
            alt={t.courses.manualTestingPro} 
            className="course-image"
            onError={() => handleImageError(1)}
            style={{ display: imageError[1] ? 'none' : 'block' }}
          />
          <div className="course-content">
            <h3 className="course-title">{t.courses.manualTestingPro}</h3>
            <p className="course-description">
              1. {t.courses.manualTestingCourse_1}<br/>
              2. {t.courses.manualTestingCourse_2}<br/>
              3. {t.courses.manualTestingCourse_3}<br/>
              4. {t.courses.manualTestingCourse_4}<br/>
              5. {t.courses.manualTestingCourse_5}<br/>
            </p>
            <p className="course-duration">{t.courses.courseDuration}: {t.courses.timeManual} {t.courses.months}</p>
            <p className="course-price">{t.courses.priceStartsAt}: {t.courses.manualPrice} {t.courses.currency}</p>
            <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/7')}>
              <span className="thq-body-small">{t.courses.enrollNow}</span>
            </button>
          </div>
        </div>

        <div className="course-card">
          <img 
            src="/other-images/courses/20945836.jpg" 
            alt={t.courses.softwareTestingJavaPro} 
            className="course-image"
            onError={() => handleImageError(2)}
            style={{ display: imageError[2] ? 'none' : 'block' }}
          />
          <div className="course-content">
            <h3 className="course-title">{t.courses.softwareTestingJavaPro}</h3>
            <p className="course-description">
              1. {t.courses.autoJavaTestingCourse_1}<br/>
              2. {t.courses.autoJavaTestingCourse_2}<br/>
              3. {t.courses.autoJavaTestingCourse_3}<br/>
              4. {t.courses.autoJavaTestingCourse_4}<br/>
              5. {t.courses.autoJavaTestingCourse_5}<br/>
            </p>
            <p className="course-duration">{t.courses.courseDuration}: {t.courses.time} {t.courses.months}</p>
            <p className="course-price">{t.courses.priceStartsAt}: {t.courses.autoPrice} {t.courses.currency}</p>
            <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/8')}>
              <span className="thq-body-small">{t.courses.enrollNow}</span>
            </button>
          </div>
        </div>

        <div className="course-card">
          <img 
            src="/other-images/courses/7903569.jpg" 
            alt={t.courses.softwareTestingCypressPro} 
            className="course-image"
            onError={() => handleImageError(3)}
            style={{ display: imageError[3] ? 'none' : 'block' }}
          />
          <div className="course-content">
            <h3 className="course-title">{t.courses.softwareTestingCypressPro}</h3>
            <p className="course-description">
              1. {t.courses.autoCypressTestingCourse_1}<br/>
              2. {t.courses.autoCypressTestingCourse_2}<br/>
              3. {t.courses.autoCypressTestingCourse_3}<br/>
              4. {t.courses.autoCypressTestingCourse_4}<br/>
              5. {t.courses.autoCypressTestingCourse_5}<br/>
            </p>
            <p className="course-duration">{t.courses.courseDuration}: {t.courses.time} {t.courses.months}</p>
            <p className="course-price">{t.courses.priceStartsAt}: {t.courses.autoPrice} {t.courses.currency}</p>
            <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/9')}>
              <span className="thq-body-small">{t.courses.enrollNow}</span>
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Courses