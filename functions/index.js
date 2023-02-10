const functions = require("firebase-functions");
const express = require("express") ;
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")
('pk_test_51MZUqRSFsrqx0Nph09X0e8yhPgjO185BClhjoU37WCZKMJU3aIXgy6Z34QiCJl1XV9h671xMsGeBceojxAZj3uPQ00OaSiX1sz')

//Api


//App config
const app = express()


//Middleware
app.use(cors({origin:true}));
app.use(express.json());


//Api route
app.get('/', (request,response) => response.status(200).send('hiio'))

app.post('/payments/create', async (request,response) =>{
    const total= request.query.total;

    console.log('payment request recived ', total);
})
//Listen command
exports.api = functions.https.onRequest(app)



//example endpoint
 //http://127.0.0.1:5001/e-challenge-66492/us-central1/api