import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

import chatbotRoutes from './routes/chatbot_route.js'

const app= express();
dotenv.config();

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

//Database connectivity
mongoose.connect(process.env.MONGO_URL)
.then(()=>[
    console.log("Database connected")
]).catch((error)=>{
    console.log("Error connecting to database", error)
})

//Defining routes
app.use("/bot/v1/", chatbotRoutes)

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})