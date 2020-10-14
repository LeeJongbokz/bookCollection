import "./db.js";
import "./models/User.js";

import app from "./app.js";

import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

function handleListening(){
    console.log("Listening to localhost:4000/");
}

app.listen(PORT, handleListening);