import React, { Fragment,useLayoutEffect } from 'react'

import { Helmet } from 'react-helmet'

import Navbar41 from '../components/navbar41'
import Contact2 from '../components/contact2'
import Logos1 from '../components/logos1'
import Stats2 from '../components/stats2'
import Footer from '../components/footer'
import './contact1.css'

const Contact1 = (props) => {
  useLayoutEffect(() => {window.scrollTo(0,0)})
  return (
    <div className="contact1-container">
      <Helmet>
        <title>Contact Us</title>
        <meta
          property="og:title"
          content="Contact Us"
        />
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
        link5={
          <Fragment>
            <span className="contact1-text11">Learn Now</span>
          </Fragment>
        }

      ></Navbar41>
      <Contact2
        content4={
          <Fragment>
            <span className="contact1-text17">
            We look forward to hearing from you on WhatsApp!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text18">
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
        }
        content3={
          <Fragment>
            <span className="contact1-text21">
            We look forward to hearing from you on WhatsApp!
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/37369207444">+1 (800) 290-1358</a >
          </Fragment>
        }
        email1={
          <Fragment>
            <a href="mailto:support@code-craft.academy">support@code-craft.academy</a>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact1-text24">
            We look forward to hearing from you on Skype!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text25">Contact Us</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text26">Get in touch with us today!</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <a style={{marginTop:"22px"}}href="skype:support@code-craft.academy?chat">Start chat</a>
          </Fragment>
        }
      ></Contact2>
      <Logos1
        heading1={
          <Fragment>
            <span className="contact1-text28">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
      ></Logos1>
      <Stats2
        stat1={
          <Fragment>
            <span className="contact1-text29">Comprehensive Courses</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text30">
              Engage in expert-led courses covering manual testing, automation
              testing, and performance testing.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text31">
              Enhance your skills and knowledge in software testing to advance
              your career.
            </span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="contact1-text32">Interactive Learning</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="contact1-text33">
              Interview Readiness and CV Assistance
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="contact1-text34">
              Choose from various pricing plans to suit your learning needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text35">
              Why Choose Our Software Testing Courses?
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="contact1-text36">
              Get ready for a real interview with our CV assitance and Mock Interviews
            </span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="contact1-text37">Flexible Pricing Plans</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="contact1-text38">
              Participate in interactive learning experiences to deepen your
              understanding.
            </span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="contact1-text39">
              Access our pro courses designed to provide a comprehensive
              learning experience.
            </span>
          </Fragment>
        }
      ></Stats2>
      <Footer
      ></Footer>
    </div>
  )
}

export default Contact1
