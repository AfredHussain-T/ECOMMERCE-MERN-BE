const mongoose = require("mongoose"); 
require('dotenv').config;
const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl);

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Error while connecting to DB'));

connection.once('open', ()=>{
    console.log("DB connection established successfully");
})

