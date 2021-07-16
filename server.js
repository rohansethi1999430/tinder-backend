import express from 'express'
import mongoose from 'mongoose'


//App config

const app=express();
const port=process.env.PORT || 8001

//Middlewares

//DB config

//API Endpoints

app.get('/',(req,res)=>{
    res.status(200).send('Hello from Rohans server!!')
})

//Listener

app.listen(port,()=>{
    console.log(`listening on port number : ${port}`)
})