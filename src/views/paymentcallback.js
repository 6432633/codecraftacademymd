import React, { useEffect, useState, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar41 from "../components/navbar41";
import Footer from "../components/footer";

const PaymentCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [paymentStatus, setPaymentStatus] = useState("processing");
    const [transactionId, setTransactionId] = useState("");
    const [amount, setAmount] = useState("");
    const [courseId, setCourseId] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const status = queryParams.get("status");
        const txId = Number(queryParams.get("transaction_id"));
        const amt = queryParams.get("amount");
        const cId = Number(queryParams.get("course_id"));

        // Check if the page has already been refreshed
        const hasRefreshed = sessionStorage.getItem("hasRefreshed");

        if (status === "success" && !hasRefreshed) {
            sessionStorage.setItem("hasRefreshed", "true"); // Mark as refreshed
            setTimeout(() => {
                window.location.reload();
            }, 10000);
        } else {
            checkPayment(status, txId, amt, cId);
        }
    }, [location.search]);

    const checkPayment = async (status, txId, amt, cId) => {
        if (status === "success") {
            try {
                const requestBody = {
                    invoiceId: txId,
                    amount: amt,
                    courseId: cId
                };

                const paymentStatusResponse = await fetch("https://api.code-craft.academy/api/payment/check/status", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(requestBody),
                });

                if (!paymentStatusResponse.ok) {
                    throw new Error("Network response was not ok");
                }

                const payment = await paymentStatusResponse.json();
                setPaymentStatus("success");
                setTransactionId(payment.invoiceId || "N/A");
                setAmount(payment.amount || "0.00");
                setCourseId(payment.courseName || "N/A");
                setPassword(payment.coursePassword);
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            setPaymentStatus("failed");
        }
    };

    const handleGoBack = () => {
        navigate("/learning");
    };

    const handleGoPricing = () => {
        navigate("/pricing");
    };

    return (
        <div>
            <Navbar41
                link1={<Fragment><span className="contact1-text10">Home</span></Fragment>}
                link2={<Fragment><span className="contact1-text13">Courses</span></Fragment>}
                link3={<Fragment><span className="contact1-text15">Pricing</span></Fragment>}
                link4={<Fragment><span className="contact1-text11">Contact Us</span></Fragment>}
                link5={<Fragment><span className="contact1-text11">Learn Now</span></Fragment>}
            />
            <div style={styles.container}>
                {paymentStatus === "processing" && (
                    <div style={styles.message}>
                        <h2>Processing your payment...</h2>
                        <p className="paragraph">Please wait while we confirm your transaction.</p>
                    </div>
                )}
                {paymentStatus === "success" && (
                    <div style={styles.message}>
                        <h2 style={styles.paragraph}>Payment Successful!</h2>
                        <p style={styles.paragraph}><b>Thank you for your purchase.</b></p>
                        <p style={styles.paragraph}><b>Transaction ID:</b> {transactionId}</p>
                        <p style={styles.paragraph}><b>Amount Paid:</b> ${amount}</p>
                        <p style={styles.paragraph}><b>Course:</b> {courseId}</p>
                        <p style={styles.paragraph}><b>Password:</b> {password}</p>
                        <p style={styles.paragraph}><b>Use this password to access course materials.</b></p>
                        <button onClick={handleGoBack} className="thq-button-outline hero-button2">
                            <span className="thq-body-small">Start Learning</span>
                        </button>
                    </div>
                )}
                {paymentStatus === "failed" && (
                    <div style={styles.message}>
                        <h2>Payment Failed</h2>
                        <p style={styles.paragraph}>There was an issue processing your payment. Please try again.</p>
                        <button onClick={handleGoPricing} className="thq-button-outline hero-button2">
                            <span className="thq-body-small">Try Again</span>
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

// Styles
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "STIX Two Text"
    },
    message: {
        textAlign: "left",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    button: {
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    paragraph: {
        marginBottom: "20px"
    }
};

export default PaymentCallback;
