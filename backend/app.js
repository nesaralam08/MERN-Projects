const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const cors = require('cors')
const DB = require('./database/db')
const payment = require('./routes/payment')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

DB(process.env.MONGO_URL)
app.get('/alam',(req,res)=>{
    res.status(200).json({"ok":"Nesar Alam"})
})
app.use('/api/payment',payment)

app.listen(PORT,()=>console.log(`server is runnint AT : http://localhost:${PORT}`))