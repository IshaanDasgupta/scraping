const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const scrapingRoute = require('./routes/scraping');
const mongoose = require('mongoose');

dotenv.config();

const connect = async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB database");
    }
    catch(err){
        throw err;
    }
}

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/scrap" , scrapingRoute);

app.listen(process.env.PORT || 8800 , () => {
    connect();
    console.log(`server running on ${process.env.PORT || 8800}`);
})