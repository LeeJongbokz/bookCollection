import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {type: String},
    author : {type: String},
    starPoint: {type: Number}
})


const Book = mongoose.model("Book", BookSchema);

export default Book;

