require('dotenv').config()
const express = require('express')
const router = require('./routes/routes')
const app = express()
const Connectdb = require('./db/db')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("", router)
app.set('view engine', 'ejs');





Connectdb().then(()=>{
    app.listen(process.env.PORT, (req,res)=>{
        console.log(`sever Running on port ${process.env.PORT}`)
    })
})