import mongoose from "mongoose";

const User_Book_Review_Comment_Schema = new mongoose.Schema({

    User_ID:{
        type: String
    },
    Book_ID:{
        type: String
    },
    Review_ID:{
        type: String
    },
    Comment_ID:{
        type: String
    },
    Comment:{
        type: String
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
})
 
const User_Book_Review_Comment = mongoose.model("User_Book_Review_Comment", User_Book_Review_Comment_Schema);

export default User_Book_Review_Comment;
