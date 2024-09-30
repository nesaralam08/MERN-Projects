const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    order_id:{
        type:String,
        required:true
    },
    payment_id:{
        type:String,
        required:true
    },
    signature:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

module.exports = mongoose.model('razorpay_payment',paymentSchema)