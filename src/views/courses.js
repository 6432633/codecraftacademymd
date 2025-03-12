import React, { Fragment, useLayoutEffect, useState } from "react";
import Navbar41 from "../components/navbar41";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import './courses.css'
const Courses = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('RO')
    useLayoutEffect(() => {
        window.scroll(0,0)
    })
    return (
        <div>
            <Navbar41
                link1={
                    <Fragment>
                        <span className="contact1-text10">Acasa</span>
                    </Fragment>
                }

                link2={
                    <Fragment>
                        <span className="contact1-text13">Cursuri</span>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span className="contact1-text15">Preturi</span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="contact1-text11">Contacte</span>
                    </Fragment>
                }
    

            ></Navbar41>
         
            <div class="course-container">
                <div class="course-card">
                    <img src="/other-images/courses/8058227.jpg" alt="Course Image" class="course-image" />
                    <div class="course-content">
                        <h3 class="course-title">Manual Testing Standard</h3>
                        <p class="course-description">
                            This course covers the basics of software testing, SQL basics and API testing basics.
                            Within this course you will learn what is testing, testing levels, testing techniques,
                            how to write a test case, and how to write a bug report.
                            No mentorship, CV assistance or Mock Interviews are available on it.
                            Additionally, to lessons you will receive a set of conspects and practical exercises.
                        </p>
                        <p class="course-duration">Duration: 1 month</p>
                        <p class="course-price">Price: $50</p>
                        <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/1')}>
                            <span className="thq-body-small">Enroll Now</span>
                        </button>
                    </div>
                </div>
                <div class="course-card">
                    <img src="/other-images/courses/20943620.jpg" alt="Advanced Testing" class="course-image" />
                    <div class="course-content">
                        <h3 class="course-title">Software Testing(Java)</h3>
                        <p class="course-description">
                            This course covers basics of Java programming language, basics of SQL, basics of API testing , and basics of manual testing.
                            Also, the course covers some aspects of automation testing using Cucumber and Selenium.
                            No mentorship, CV assistance or Mock Interviews are available on it.
                            Additionally, to lessons you will receive a set of conspects and practical exercises.
                        </p>
                        <p class="course-duration">Duration: 1 month</p>
                        <p class="course-price">Price: $50</p>
                        <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/2')}>
                            <span className="thq-body-small">Enroll Now</span>
                        </button>
                    </div>
                </div>
                <div class="course-card">
                    <img src="/other-images/courses/20945582.jpg" alt="Advanced Testing" class="course-image" />
                    <div class="course-content">
                        <h3 class="course-title">Software Testing(Cypress)</h3>
                        <p class="course-description">
                            This course covers basics of TypeScript programming language, basics of SQL, basics of API testing , and basics of manual testing.
                            Also, the course covers some aspects of automation testing using Cypress.
                            No mentorship, CV assistance or Mock Interviews are available on it.
                            Additionally, to lessons you will receive a set of conspects and practical exercises.
                        </p>
                        <p class="course-duration">Duration: 1 month</p>
                        <p class="course-price">Price: $50</p>
                        <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/3')}>
                            <span className="thq-body-small">Enroll Now</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="course-container">
                <div class="course-card">
                    <img src="/other-images/courses/3463986.jpg" alt="Course Image" class="course-image" />
                    <div class="course-content">
                        <h3 class="course-title">Manual Testing Pro</h3>
                        <p class="course-description">
                        This course provides comprehensive training in software testing, covering both fundamental and advanced concepts. It includes in-depth knowledge of manual testing, SQL, and API testing, along with hands-on experience in testing techniques. The program features live mentor-led sessions, interview preparation, and CV assistance to ensure career readiness.
                        </p>
                        <p class="course-duration">Duration: 2 months</p>
                        <p class="course-price">Price: $499</p>
                        <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/4')}>
                            <span className="thq-body-small">Enroll Now</span>
                        </button>
                    </div>
                </div>
                <div class="course-card">
                    <img src="/other-images/courses/20945836.jpg" alt="Advanced Testing" class="course-image" />
                    <div class="course-content">
                        <h3 class="course-title">Software Testing(Java) Pro</h3>
                        <p class="course-description">
                        This course provides comprehensive training in software testing, covering both fundamental and advanced concepts of automation testing using Java, and Selenium based framework.Also, covers knowledge in  manual testing and deep understandign of API testing. The program features live mentor-led sessions, interview preparation, and CV assistance to ensure career readiness.
                        </p>
                        <p class="course-duration">Duration: 6 months</p>
                        <p class="course-price">Price: $999</p>
                        <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/5')}>
                            <span className="thq-body-small">Enroll Now</span>
                        </button>
                    </div>
                </div>
                <div class="course-card">
                    <img src="/other-images/courses/7903569.jpg" alt="Advanced Testing" class="course-image" />
                    <div class="course-content">
                        <h3 class="course-title">Software Testing(Cypress) Pro</h3>
                        <p class="course-description">
                        This course provides comprehensive training in software testing, covering both fundamental and advanced concepts of automation testing using Cypress.Also, covers knowledge in  manual testing and deep understandign of API testing. The program features live mentor-led sessions, interview preparation, and CV assistance to ensure career readiness.
                        </p>
                        <p class="course-duration">Duration: 6 months</p>
                        <p class="course-price">Price: $999</p>
                        <button className="pricing-button14 thq-button-outline thq-button-animated" onClick={() => navigate('/enroll/6')}>
                            <span className="thq-body-small">Enroll Now</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Courses