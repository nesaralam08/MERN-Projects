const express = require('express')
const razorpay = require('razorpay')
const router = express.Router()
require('dotenv').config()
const razorpayInstance =  new razorpay({
    key_id:process.env.KEY_ID,
    key_secret:process.env.SECRET
})
router.get('/get-payment',(req,res)=>{
    res.json("Payment Details")
})

module.exports = router