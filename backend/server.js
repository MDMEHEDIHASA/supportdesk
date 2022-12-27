const express = require('express')
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req,res,next)=>{
    res.send("Hello")
})

app.use('/api/users',userRoutes)


app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))