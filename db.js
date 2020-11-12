import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb+srv://bookcollection1:skan4502!@cluster-vdrx5zrp.cp75p.mongodb.net/sample_bookcollection?retryWrites=true&w=majority",
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

