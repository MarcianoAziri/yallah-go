const express = require('express');
const { createMollieClient } = require('@mollie/api-client');

const mollieClient = createMollieClient({ apiKey: 'test_cKmkmcaFfJPQQxAhTuEE7pqEc7dmxe' });
const app = express();

app.post('/finish', (req, res) => {
    console.log('FINISHED IN POST');
});

app.get('/finish', (req, res) => {
    console.log('FINISHED IN GET');
});

app.post('/payment', async (req, res) => {

    const payment = await mollieClient.payments.create({
        amount: {
            value: '10.00',
            currency: 'EUR'
        },
        description: 'Test',
        redirectUrl: 'https://creative-mandazi-c9292b.netlify.app/home/',
        webhookUrl: 'https://creative-mandazi-c9292b.netlify.app/finish/'
    });
    console.log(payment);

    let url = payment.getCheckoutUrl();
    console.log(url);
    res.send(url);
});

app.listen(3000, function() {
    console.log('listening');
});