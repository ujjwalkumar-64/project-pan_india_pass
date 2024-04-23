const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Payment = require('./models/payment');
const cors=require("cors")

const app = express();
const PORT = process.env.PORT || 5500;
const MONGODB_URI = 'mongodb://localhost:27017/panindiapass';


mongoose.connect(MONGODB_URI, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true 
    })

    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use(
        cors({
          credentials: true,
          origin: ["http://127.0.0.1:5500"], 
        })
    );

 
app.post('/process_payment', async (req, res) => {
    try {
        const newPayment = await Payment.create(req.body);
        console.log('Payment stored:', newPayment);
        res.status(200).send('Payment stored successfully');
    } catch (err) {
        console.error('Error storing payment:', err);
        res.status(500).send('Error storing payment');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
