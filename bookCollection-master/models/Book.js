import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {type: String},
    author : {type: String},
    starPoint: {type: Number},
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"

        }
    ],
    userNum: {type:Number,
              default: 0}
})


const Book = mongoose.model("Book", BookSchema);

export default Book;

