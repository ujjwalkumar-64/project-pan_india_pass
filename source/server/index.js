const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Payment = require('./models/payment');
const contact = require('./models/contact');
const cors=require("cors")


const app = express();
const PORT = process.env.PORT || 5500;

 
const connect = mongoose.connect('mongodb://localhost:27017/panindiapass', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection error:", err);
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    cors({
      credentials: true,
      origin: ["http://127.0.0.1:5500"],  
    })
);

app.use(express.static('source'));



 
app.post('/sign_up', async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const newUser = new User({ name, username, email, password });
        await newUser.save();
        res.send('User registered successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

 
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            res.send('Login successful!');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

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
    console.log(`Server running on port ${PORT}`);
});