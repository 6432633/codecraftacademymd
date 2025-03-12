import React, { Fragment,useLayoutEffect } from "react";
import { Helmet } from 'react-helmet'
import Navbar41 from "../components/navbar41";
import Footer from "../components/footer";
import './legal.css'
const TermsAndConditions = () => {
    useLayoutEffect(() => {window.scrollTo(0,0)})
    return (
        <div className="legal-container">
            <Helmet>
                <title>Terms And Conditions</title>
                <meta property="og:title" content="Terms And Conditions" />
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
            <div className="terms-and-conditions">
                <h1>Terms And Conditions</h1>
                <p className="legal-text">
                    <b>1.1 </b>These Terms and Conditions (hereinafter may be referred to as: “Terms of use”, “Terms of Service”,
                </p><br />
                <p className="legal-text">“Terms”, “Agreement”) govern your usage of our Codecraft Academy website, software product, and/or</p><br />
                <p className="legal-text">other related products, as specified in these Terms and Conditions, unless otherwise provided.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.2</b> As used throughout these Terms and Conditions, in their current form, and as may be amended by</p><br />
                <p className="legal-text">Codecraft Academy, these Terms represent a binding agreement between you, as a Customer (defined</p><br />
                <p className="legal-text">below), and Codecraft Academy SRL, a Moldovan company with registration number 1025600001283, registered</p><br />
                <p className="legal-text">at A.Doga 32/2 office 5 Chisinau, Republic of Moldova. By purchasing our courses or registering on the</p><br />
                <p className="legal-text">Website, you agree to abide by these Terms and Conditions and to use the Service in accordance with these Terms.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.3 </b>We offer online services through our website https://www.code-craft.academy/ (the “Website”) and social media accounts (the “Service”). </p><br />
                <p className="legal-text">The Service is provided by Codecraft Academy and includes educational courses that you may purchase on the Website.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.4</b> As used in this Agreement, the following terms shall have the following meanings:</p><br />
                <ul className="legal-text">
                    <li style={{marginLeft:"50px"}}>The terms “us”, “we”, “our”, Codecraft Academy” refer to Codecraft Academy.</li>
                    <li style={{marginLeft:"50px"}}>The terms “Customer”, “you” refer to an individual who has reached the age of consent under the law of the respective country where he/she is located and who has the legal capacity to enter into a contract with us.</li>
                    <li style={{marginLeft:"50px"}}>“Course” means the educational service provided by Codecraft Academy as described on the Website.</li>
                    <li style={{marginLeft:"50px"}}>“Agreement” refers to these Terms and Conditions, including the refund policy and privacy policy.</li>
                </ul>
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.5 </b>The prices of our education courses are listed on the princing page. All payments are made through our authorized payment processor.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.6</b> You agree to pay the price associated with your selected course,and you will access lesson materials through our platform on the page <a href="/learning">Learn Now</a>.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.7</b> After payment each customer will receive on the payment success notification page a password which will be used to access on-line lessons on our Platform. The customer is responsible to keep this password safely and will not share it with other people.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.8</b> All content included as part of the Service, such as texts, educational programs, graphics, and logos are owned by Codecraft Academy and are protected by copyright laws.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.9</b> You are granted a limited, non-transferable, non-exclusive license to use the content provided as part of the Service solely for personal, non-commercial purposes.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.10</b> You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or content obtained from the Service.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.11</b> You are specifically restricted from all of the following:</p><br />
                <ul className="legal-text">
                    <li style={{marginLeft:"50px"}}>Assigning any rights or delegating your duties under this Agreement;</li>
                    <li style={{marginLeft:"50px"}}>Publicly performing and/or showing any Service material;</li>
                    <li style={{marginLeft:"50px"}}>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to our Service;</li>
                    <li style={{marginLeft:"50px"}}>Using the Service in any way that is or may be damaging to Codecraft Academy;</li>
                    <li style={{marginLeft:"50px"}}>Using the Service contrary to applicable laws and regulations.</li>
                </ul>
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.12</b> Unless stated in these Terms, we are not liable to the Customer or to anyone else, directly or indirectly, for any loss or damage, whether arising from contract, tort, or otherwise, even if foreseeable.</p><br />
                <p className="legal-text"><b>1.13</b> If the Customer fails to comply with the terms of the Agreement, Codecraft Academy may suspend or terminate the Customer’s access to the Service without notice.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.14</b>  The Customer will indemnify Codecraft Academy from any claims, damages, or losses incurred as a result of their violation of these Terms.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.15</b> This Agreement will be governed by and construed in accordance with Moldovan law. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of Republic of Moldova.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.16</b> Refunds may be provided to Customers under the law of the Republic of Moldova and applicable legislation. If the Customer wants to refund, then it must notify within 14 day after course aquisition through channels mentioned on <a href="#/contact">Contact Us</a></p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.17</b> Codecraft Academy reserves the right to modify these Terms and Conditions at any time. Any modifications will be effective upon posting on the Website.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.18 </b> If any provision of this Agreement is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p><br />
                <p className="legal-text"></p><br />
                <p className="legal-text"><b>1.19</b> If you have any questions about these Terms, please contact us through channels from <a href="#/contact">Contact Us</a> page.</p><br />
            </div>
            <Footer></Footer>
        </div>
    )
}
export default TermsAndConditions