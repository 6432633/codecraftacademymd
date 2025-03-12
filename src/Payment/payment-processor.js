
const PaymentProcessor = async (data) => {
    const sendPaymentEndpoint = 'https://api.code-craft.academy/api/payment/create'

    try {
        
        const requestBody = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "country": data.country,
            "city": data.city,
            "address": data.address,
            "email": data.email,
            "phoneNumber": data.phone,
            "courseId": data.course
          }
          
        
        console.log(JSON.stringify(requestBody))
        let payment = '';
        try {
            const paymentResponse = await fetch(sendPaymentEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
            });

            if (!paymentResponse.ok) {
                throw new Error('Network response was not ok');
            }

            payment = await paymentResponse.json();
            console.log('Success:', JSON.stringify(payment));
            var paymentId = payment.paymentId;
            const receivedSignature = payment.signature;
            console.log(paymentId)
            console.log(receivedSignature)
            var d = payment.expiryDate
            var key = receivedSignature
            var urlSuccess = payment.linkUrlSuccess
            var urlFailed = payment.linkUrlCancel
            
        } catch (error) {
            console.error('Error:', error);
        }
    } catch (error) {
        console.log(error)
    }

    const p = {id: paymentId, date: d, key: key, success: urlSuccess, failed: urlFailed}
    
    return  p;
}
export default PaymentProcessor