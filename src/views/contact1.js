import React, { Fragment, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLanguage } from '../context/LanguageContext'
import Navbar41 from '../components/navbar41'
import Contact2 from '../components/contact2'
import Logos1 from '../components/logos1'
import Footer from '../components/footer'
import './contact1.css'

const Contact1 = (props) => {
  useLayoutEffect(() => {window.scrollTo(0,0)})
  const { t } = useLanguage();
  return (
    <div className="contact1-container">
      <Helmet>
        <title>{t.contact.title}</title>
        <meta
          property="og:title"
          content={t.contact.title}
        />
      </Helmet>
      <Navbar41></Navbar41>
      <Contact2
        content4={
          <Fragment>
            <span className="contact1-text17">
              {t.contact.content4}
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text18">
              {t.contact.content1}
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact1-text21">
              {t.contact.content3}
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/37369207444">{t.contact.phone1}</a>
          </Fragment>
        }
        email1={
          <Fragment>
            <a href="mailto:support@code-craft.academy">{t.contact.email1}</a>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact1-text24">
              {t.contact.content5}
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text25">{t.contact.heading1}</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text26">{t.contact.content2}</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <a style={{marginTop:"22px"}} href="https://t.me/codecraftacademy">{t.contact.address1}</a>
          </Fragment>
        }
      ></Contact2>
      <Logos1
        heading1={
          <Fragment>
            <span className="contact1-text28">
              {t.contact.heading2}
            </span>
          </Fragment>
        }
      ></Logos1>

      <Footer
      ></Footer>
    </div>
  )
}

export default Contact1
