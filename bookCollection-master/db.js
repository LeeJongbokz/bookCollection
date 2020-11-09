import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb://heroku_z6b6wz7f:dmai4n5e7su77p32jl1a572b05@ds157298.mlab.com:57298/heroku_z6b6wz7f",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)
const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");

const handleError = error => console.log("Error on DB Connection:${error}");

db.once("open", handleOpen);

db.on("error", handleError);

