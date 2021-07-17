import express from 'express'
import mongoose from 'mongoose'


//App config

const app=express();
const port=process.env.PORT || 8001
const connection_url='mongodb+srv://admin:rs.9897637879@cluster0.9sdtr.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middlewares

//DB config

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//API Endpoints

app.get('/',(req,res)=>{
    res.status(200).send('Hello from Rohans server!!')
})

//Listener

app.listen(port,()=>{
    console.log(`listening on port number : ${port}`)
})