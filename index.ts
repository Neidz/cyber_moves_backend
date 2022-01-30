require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// connecting to database
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("db connection up");
    })
    .catch((err: string) => {
        console.log(err);
    });

// changing all requests to json
app.use(express.json());

// adding cors
app.use(cors());

// endpoints

app.listen(process.env.PORT || 8080, () => {
    console.log("running");
});
