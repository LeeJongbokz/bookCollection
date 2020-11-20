import mongoose from "mongoose";

const User_Book_Schema = new mongoose.Schema({

    User_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Book_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }

})

const User_Book = mongoose.model("User_Book", User_Book_Schema);

export default User_Book;