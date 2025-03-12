import React, { useState, useEffect, useLayoutEffect } from "react";
import "../components/payment.css";
import Navbar41 from "../components/navbar41";
import Footer from "../components/footer";
import '../../src/style.css';
import { useParams } from "react-router-dom";
import PaymentProcessor from "../Payment/payment-processor";

const Payment = (props) => {
    const { courseId } = useParams();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        city: '',
        address: '',
        phone: '',
        course: courseId
    });
    const [isChecked, setIsChecked] = useState(false);
    const [payment, setPayment] = useState('')
    const [date, setDate] = useState('')
    const [key, setKey] = useState('')
    const [urlSuccess, setUrlSuccess] = useState('')
    const [urlFailed, setUrlFailed] = useState('')

    const getCourseDetails = () => {
        const courses = [
            { id: 1, name: 'Manual Testing Standard', price: 50 },
            { id: 2, name: 'Software Testing(Java)', price: 50 },
            { id: 3, name: 'Software Testing(Cypress)', price: 50 },
            { id: 4, name: 'Manual Testing Pro', price: 499 },
            { id: 5, name: 'Manual Testing Pro', price: 999 },
            { id: 6, name: 'Software Testing(Cypress) Pro', price: 999 }
        ];

        const course = courses.find(c => c.id === parseInt(courseId));
        if (course) {
            setFormData(prevState => ({
                ...prevState,
                courseName: course.name,
                price: course.price
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = () => {
        setIsChecked((prevState) => !prevState);
    };

    const handlePayment = async () => {
        if (!isChecked) {
            alert("Please accept the Terms and Conditions and Privacy Policy.");
            return;
        }

        try {
            const paymentDetails = await PaymentProcessor(formData);
            setPayment(paymentDetails.id)
            setDate(paymentDetails.date)
            setKey(paymentDetails.key)
            setUrlSuccess(paymentDetails.success)
            setUrlFailed(paymentDetails.failed)
            submitForm()
        } catch (error) {
            console.error("Payment failed:", error);
            alert("Payment failed. Please try again.");
        }
    };
    const submitForm = () => {
        const form = document.getElementById("payment-form");
        if (form) {
            
            form.submit();
        }
    };

    useEffect(() => {
        getCourseDetails();
    }, [courseId]);
    useLayoutEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <div>
            <Navbar41
                link1={<span className="contact1-text10">Home</span>}
                link2={<span className="contact1-text13">Courses</span>}
                link3={<span className="contact1-text15">Pricing</span>}
                link4={<span className="contact1-text11">Contact Us</span>}
                link5={<span className="contact1-text11">Learn Now</span>}
            />
            <div className="payment-container">
                <div className="payment-details">
                    <h1>Personal Details</h1>
                    <div className="payment-container-item">
                        <label className="payment-form-label">First Name</label>
                        <input type="text" className="payment-form-input" placeholder="John" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">Last Name</label>
                        <input type="text" className="payment-form-input" placeholder="Doe" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">Country</label>
                        <input type="text" className="payment-form-input" placeholder="USA" name="country" value={formData.country} onChange={handleInputChange} />
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">City</label>
                        <input type="text" className="payment-form-input" placeholder="New York" name="city" value={formData.city} onChange={handleInputChange} />
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">Address</label>
                        <input type="text" className="payment-form-input" placeholder="Address" name="address" value={formData.address} onChange={handleInputChange} />
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">E-mail</label>
                        <input type="email" className="payment-form-input" placeholder="your@email.com" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">Phone Number</label>
                        <input type="tel" className="payment-form-input" placeholder="+_-___-___-____" name="phone" value={formData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="payment-container-item">
                        <h2 style={{ textAlign: "center" }}>Course Price</h2>
                        <h3 style={{ textAlign: "center" }}>${formData.price}</h3>
                    </div>
                    <div className="payment-container-item">
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                id="termsandconditions"
                                name="termsandconditions"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="termsandconditions" style={{ paddingLeft: '5px' }}>
                                I accept the <a href="#/terms-and-conditions" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Terms and Conditions</a> and <a href="#/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Privacy Policy</a>
                            </label>
                        </div>
                    </div>
                    <div className="payment-container-item">
                        <button
                            className={isChecked ? "pricing-button14 thq-button-outline thq-button-animated" : "btn-disabled"}
                            onClick={handlePayment}
                            disabled={!isChecked}
                        >
                            <span className="thq-body-small">Buy</span>
                        </button>
                    </div>
                </div>
            </div>
            <form
                id="payment-form" // Add an ID to the form for easy access
                method="POST"
                action="https://paynet.md/acquiring/getecom"
                style={{ visibility: 'hidden' }}
            >
                <input type="text" name="operation" value={payment} readOnly />
                <br />
                <input
                    type="text"
                    name="LinkUrlSucces"
                    value={urlSuccess}
                    readOnly
                />
                <br />
                <input
                    type="text"
                    name="LinkUrlCancel"
                    value={urlFailed}
                    readOnly
                />
                <br />
                <input type="text" name="ExpiryDate" value={date} readOnly />
                <br />
                <input type="text" name="Signature" value={key} readOnly />
                <br />
                <input type="text" name="Lang" value="en-US" readOnly />
                <br />
                <input
                    type="submit"
                    value="Order confirmation"
                    id="button-confirm"
                    className="sp-button sp-button--blue sp-button--large d-block m-auto"
                />
            </form>
            <Footer />
        </div>
    );
};

export default Payment;