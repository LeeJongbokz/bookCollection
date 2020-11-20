import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    
    title:{
        type: String
    },
    content:{
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


const Post = mongoose.model("Post", PostSchema);

export default Post;

