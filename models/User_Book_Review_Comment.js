import mongoose from "mongoose";

const User_Book_Review_Comment_Schema = new mongoose.Schema({

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
    },
    Comment_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }
})
 
const User_Book_Review_Comment = mongoose.model("User_Book_Review_Comment", User_Book_Review_Comment_Schema);

export default User_Book_Review_Comment;
