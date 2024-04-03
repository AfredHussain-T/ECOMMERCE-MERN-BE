const app = require(".");
require('dotenv').config;
const PORT = process.env.PORT;

const dbConnection = require("./config/db");

app.listen(PORT, function(err){
    if(err){
        console.log("Error is:", err);
    }

    console.log(`App is running on Port: ${PORT}` );
})