import mongoose from "mongoose";

const User_Book_Review_Schema = new mongoose.Schema({

    User_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Book_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    },
    Review_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }
})
 
const User_Book_Review = mongoose.model("User_Book_Review", User_Book_Review_Schema);

export default User_Book_Review;


