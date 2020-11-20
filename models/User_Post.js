import mongoose from "mongoose";

const User_Post_Schema = new mongoose.Schema({

    User_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Post_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }

});

const User_Post = mongoose.model("User_Post", User_Post_Schema);

export default User_Post;

