import React, { useState, useEffect, useLayoutEffect } from "react";
import "../components/payment.css";
import Navbar41 from "../components/navbar41";
import Footer from "../components/footer";
import '../../src/style.css';
import { useParams } from "react-router-dom";
import PaymentProcessor from "../Payment/payment-processor";
import { useLanguage } from '../context/LanguageContext'
import LoadingModal from '../components/LoadingModal';

const Payment = (props) => {
    const { t } = useLanguage()
    const { courseId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
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

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[\d\s-()]{10,}$/;
        return phoneRegex.test(phone);
    };

    const validateField = (name, value) => {
        let errorMessage = '';
        
        switch (name) {
            case 'firstName':
                if (!value) {
                    errorMessage = t.payment.validation.firstName.required;
                } else if (value.length < 2) {
                    errorMessage = t.payment.validation.firstName.minLength;
                }
                break;
            case 'lastName':
                if (!value) {
                    errorMessage = t.payment.validation.lastName.required;
                } else if (value.length < 2) {
                    errorMessage = t.payment.validation.lastName.minLength;
                }
                break;
            case 'email':
                if (!value) {
                    errorMessage = t.payment.validation.email.required;
                } else if (!validateEmail(value)) {
                    errorMessage = t.payment.validation.email.format;
                }
                break;
            case 'country':
                if (!value) {
                    errorMessage = t.payment.validation.country.required;
                } else if (value.length < 2) {
                    errorMessage = t.payment.validation.country.minLength;
                }
                break;
            case 'city':
                if (!value) {
                    errorMessage = t.payment.validation.city.required;
                } else if (value.length < 2) {
                    errorMessage = t.payment.validation.city.minLength;
                }
                break;
            case 'address':
                if (!value) {
                    errorMessage = t.payment.validation.address.required;
                } else if (value.length < 5) {
                    errorMessage = t.payment.validation.address.minLength;
                }
                break;
            case 'phone':
                if (!value) {
                    errorMessage = t.payment.validation.phone.required;
                } else if (!validatePhone(value)) {
                    errorMessage = t.payment.validation.phone.format;
                }
                break;
        }

        setErrors(prev => {
            const newErrors = { ...prev };
            if (errorMessage) {
                newErrors[name] = errorMessage;
            } else {
                delete newErrors[name];
            }
            return newErrors;
        });

        return !errorMessage;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        validateField(name, value);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleCheckboxChange = () => {
        setIsChecked((prevState) => !prevState);
    };

    const validateForm = () => {
        let isValid = true;
        Object.keys(formData).forEach(key => {
            if (key !== 'course' && key !== 'courseName' && key !== 'price') {
                if (!validateField(key, formData[key])) {
                    isValid = false;
                }
            }
        });
        return isValid;
    };

    const handlePayment = async () => {
        if (!isChecked) {
            alert("Please accept the Terms and Conditions and Privacy Policy.");
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
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
            setIsLoading(false);
        }
    };

    const submitForm = () => {
        const form = document.getElementById("payment-form");
        if (form) {
            form.submit();
        }
    };

    const getCourseDetails = () => {
        const courses = [
            { id: 7, name: t.courses.manualTestingStandard, price: 5000 },
            { id: 8, name: t.courses.softwareTestingJava, price: 15000 },
            { id: 9, name: t.courses.softwareTestingCypress, price: 15000 }
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

    useEffect(() => {
        getCourseDetails();
    }, [courseId]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Update the useEffect for language changes
    useEffect(() => {
        // Only update error messages for fields that have errors
        const fieldsWithErrors = Object.keys(errors);
        fieldsWithErrors.forEach(field => {
            validateField(field, formData[field]);
        });
    }, [t]); // Only depend on translations

    return (
        <div>
            <Navbar41
                link1={<span className="contact1-text10">Home</span>}
                link2={<span className="contact1-text13">Courses</span>}
                link4={<span className="contact1-text11">Contact Us</span>}
            />
            <LoadingModal isOpen={isLoading} />
            <div className="payment-container">
                <div className="payment-details">
                    <h1>{t.payment.labels.personalDetails}</h1>
                    <div className="payment-container-item">
                        <label className="payment-form-label">{t.payment.labels.firstName}</label>
                        <input 
                            type="text" 
                            className={`payment-form-input ${errors.firstName ? 'error' : ''}`}
                            placeholder={t.payment.placeholders.firstName}
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">{t.payment.labels.lastName}</label>
                        <input 
                            type="text" 
                            className={`payment-form-input ${errors.lastName ? 'error' : ''}`}
                            placeholder={t.payment.placeholders.lastName}
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">{t.payment.labels.country}</label>
                        <input 
                            type="text" 
                            className={`payment-form-input ${errors.country ? 'error' : ''}`}
                            placeholder={t.payment.placeholders.country}
                            name="country" 
                            value={formData.country} 
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {errors.country && <span className="error-message">{errors.country}</span>}
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">{t.payment.labels.city}</label>
                        <input 
                            type="text" 
                            className={`payment-form-input ${errors.city ? 'error' : ''}`}
                            placeholder={t.payment.placeholders.city}
                            name="city" 
                            value={formData.city} 
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {errors.city && <span className="error-message">{errors.city}</span>}
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">{t.payment.labels.address}</label>
                        <input 
                            type="text" 
                            className={`payment-form-input ${errors.address ? 'error' : ''}`}
                            placeholder={t.payment.placeholders.address}
                            name="address" 
                            value={formData.address} 
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {errors.address && <span className="error-message">{errors.address}</span>}
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">{t.payment.labels.email}</label>
                        <input 
                            type="email" 
                            className={`payment-form-input ${errors.email ? 'error' : ''}`}
                            placeholder={t.payment.placeholders.email}
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="payment-container-item">
                        <label className="payment-form-label">{t.payment.labels.phone}</label>
                        <input 
                            type="tel" 
                            className={`payment-form-input ${errors.phone ? 'error' : ''}`}
                            placeholder={t.payment.placeholders.phone}
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                    <div className="payment-container-item">
                        <h2 style={{ textAlign: "center" }}>{t.payment.labels.coursePrice}</h2>
                        <h3 style={{ textAlign: "center" }}>{formData.price} MDL</h3>
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
                                {t.payment.labels.termsAndConditions}
                            </label>
                        </div>
                    </div>
                    <div className="payment-container-item">
                        <button
                            className={isChecked ? "pricing-button14 thq-button-outline thq-button-animated" : "btn-disabled"}
                            onClick={handlePayment}
                            disabled={!isChecked}
                        >
                            <span className="thq-body-small">{t.payment.labels.buy}</span>
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