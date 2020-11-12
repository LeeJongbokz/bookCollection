import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb+srv://heroku_vdrx5zrp:skan4502!@cluster-vdrx5zrp.cp75p.mongodb.net/heroku_vdrx5zrp?retryWrites=true&w=majority",
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

