import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'
import { useLanguage } from '../context/LanguageContext'
import Navbar41 from '../components/navbar41'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing14 from '../components/pricing14'
import Steps from '../components/steps'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'
import { useNavigate } from "react-router";

const Home = (props) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="home-container">
      <Helmet>
        <title>Code-Craft Academy</title>
      </Helmet>
      <Navbar41
        link1={
          <Fragment>
            <span className="contact1-text10">Home</span>
          </Fragment>
        }

        link2={
          <Fragment>
            <span className="contact1-text13">Courses</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact1-text15">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact1-text11">Contact Us</span>
          </Fragment>
        }

      ></Navbar41>
      <Hero></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2></Features2>
      <Pricing14></Pricing14>
      <Steps></Steps>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
