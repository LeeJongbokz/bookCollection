import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {type: String},
    authors : [String]
})

 
const Book = mongoose.model("Book", BookSchema);

export default Book;

