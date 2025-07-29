const express = require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
connectDB();


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})