import mongoose from "mongoose";

const User_Post_Schema = new mongoose.Schema({

    User_ID:{
        type: String
    },
    Post_ID:{
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

});

const User_Post_Comment = mongoose.model("User_Post_Comment", User_Post_Comment_Schema);

export default User_Post_Comment;