import mongoose from "mongoose";

const User_Post_Schema = new mongoose.Schema({

    User_ID:{
        type: String
    },
    Post_ID:{
        type: String
    },
    Post_Title:{
        type: String
    },
    Post_Content:{
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

const User_Post = mongoose.model("User_Post", User_Post_Schema);

export default User_Post;

