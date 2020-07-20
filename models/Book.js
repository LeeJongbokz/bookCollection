import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name: {type: String},
    author : {type: String}
})

 
const Book = mongoose.model("Book", BookSchema);

export default Book;

