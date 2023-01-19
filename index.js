const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const scrapingRoute = require('./routes/scraping');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/scrap" , scrapingRoute);

app.listen(process.env.PORT || 8800 , () => {
    console.log("server running");
})


