import React, { Fragment, useLayoutEffect } from 'react'

import { Helmet } from 'react-helmet'

import Navbar41 from '../components/navbar41'
import Pricing14 from '../components/pricing14'
import Logos1 from '../components/logos1'
import Features16 from '../components/features16'
import FAQ14 from '../components/faq14'
import Footer from '../components/footer'
import './pricing1.css'
import { useNavigate } from "react-router";

const Pricing1 = (props) => {
  const navigate = useNavigate()
  useLayoutEffect(() => {window.scrollTo(0,0)})
  return (
    <div className="pricing1-container">
      <Helmet>
        <title>Pricing - Best Prices In The Industry</title>
        <meta
          property="og:title"
          content="Pricing - Best Prices In The Industry<"
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
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="pricing1-text107">$50</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="pricing1-text108" onClick={() => navigate('/enroll/3')}>Enroll Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="pricing1-text109">Manual Testing Pro</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="pricing1-text110" onClick={() => navigate('/enroll/1')}>Enroll Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="pricing1-text111">Software Testing(Cypress) Pro</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="pricing1-text112">Practice</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="pricing1-text113">
              Collection of practical exercises
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="pricing1-text114">Live instructor-led sessions</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="pricing1-text115">Individual Learning Plan</span>
          </Fragment>
        }
        plan2Feature51={
          <Fragment>
            <span className="pricing1-text116">Individual Learning Plan</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="pricing1-text117">
              Collection of practical exercises
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="pricing1-text118">Mock Interviews</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="pricing1-text120">$1499</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="pricing1-text121" onClick={() => navigate('/enroll/4')}>Enroll Now</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="pricing1-text122" onClick={() => navigate('/enroll/2')}>Enroll Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="pricing1-text123">
              Access video lessons
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="pricing1-text124">Books and other materials</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="pricing1-text125">$50</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="pricing1-text126">Software Testing(Java)</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="pricing1-text127">Mock Interviews</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="pricing1-text128" onClick={() => navigate('/enroll/5')}>Enroll Now</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="pricing1-text129">
              Collection of practical exercises
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="pricing1-text130">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="pricing1-text131">
              Access video lessons
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing1-text132">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="pricing1-text133">CV Assistance</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="pricing1-text134">Manual Testing Standard</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="pricing1-text135">Software Testing(Java) Pro</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="pricing1-text136">Live instructor-led sessions</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="pricing1-text137">Mock Interviews</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="pricing1-text140">$50</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="pricing1-text142">CV Assistance</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="pricing1-text143">Live instructor-led sessions</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="pricing1-text145">$499</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="pricing1-text148">$999</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="pricing1-text149">CV Assistance</span>
          </Fragment>
        }
        plan1Feature41={
          <Fragment>
            <span className="pricing1-text149">Individual Learning Plan</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="pricing1-text150">Books and other materials</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="pricing1-text152">
              Access video lessons
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="pricing1-text153">
              Books and other materials
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="pricing1-text154">
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
        plan3Action1={
          <Fragment>
            <span className="pricing1-text157" onClick={() => navigate('/enroll/6')}>Enroll Now</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="pricing1-text158">$50</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="pricing1-text159">Software Testing(Cypress)</span>
          </Fragment>
        }
      ></Pricing14>
      <Logos1
        heading1={
          <Fragment>
            <span className="pricing1-text160">
              Enhance Your Software Testing Skills with Our Courses
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="pricing1-text161">
              Choose from a variety of comprehensive software testing courses
              designed to help you advance your knowledge and expertise in the
              field. Our hands-on learning experiences and industry-recognized
              certifications will equip you with the skills needed to succeed.
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features16
        feature3Title={
          <Fragment>
            <span className="pricing1-text162">Flexible Pricing Plans</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="pricing1-text163">
            Engage in hands-on activities and interactive modules to
            enhance your understanding. This is availablein Pro courses.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing1-text164">
              Key Features of Our Software Testing Courses
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="pricing1-text165">
              Explore the top features that make our courses stand out from the
              rest.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="pricing1-text166">
              Individual Learning Plan
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="pricing1-text167">
            Our Pro courses are led by an experienced mentor which will make a individual learning plan.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="pricing1-text168">
              Interactive Learning Experiences
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="pricing1-text169">
              Choose from a variety of pricing options to suit your budget and
              learning goals.
            </span>
          </Fragment>
        }

      ></Features16>
      <FAQ14
        action1={
          <Fragment>
            <span className="pricing1-text171" onClick={() => navigate('/contact')}>Contact</span>
          </Fragment>
        }
        faq5Question={
          <Fragment>
            <span className="pricing1-text172">
              Can I interact with instructors during the courses?
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="pricing1-text173">
              <span>
                Contact us with any of availables channels on our platform.
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
        faq4Question={
          <Fragment>
            <span className="pricing1-text176">
              How can I choose the right pricing plan for me?
            </span>
          </Fragment>
        }
        faq2Question={
          <Fragment>
            <span className="pricing1-text177">
              What are the benefits of taking software testing courses?
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="pricing1-text178" onClick={() => { navigate('/contact') }}>Email us</span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="pricing1-text179">
              Are the certifications offered by the academy recognized in the
              industry?
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="pricing1-text180">Still have a question?</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing1-text181">FAQs</span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <span className="pricing1-text182">What is software testing?</span>
          </Fragment>
        }
      ></FAQ14>
      <Footer></Footer>
    </div>
  )
}

export default Pricing1
