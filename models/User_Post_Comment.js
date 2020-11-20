import mongoose from "mongoose";

const User_Post_Comment_Schema = new mongoose.Schema({

    User_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Post_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    Comment_ID:{
        
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }
});

const User_Post_Comment = mongoose.model("User_Post_Comment", User_Post_Comment_Schema);

export default User_Post_Comment;