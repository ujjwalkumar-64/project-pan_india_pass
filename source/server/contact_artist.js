const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contact = require('./models/contact');
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

 
app.post('/contact', async (req, res) => {
    try {
        const newcontact = await contact.create(req.body);
        console.log('contact stored:', newcontact);
        res.status(200).send('contact details stored successfully');
    } catch (err) {
        console.error('Error storing payment:', err);
        res.status(500).send('Error storing contact details');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
