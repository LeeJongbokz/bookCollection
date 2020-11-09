import mongoose from "mongoose";


const CommentSchema = new mongoose.Schema({

    contents:{
        type: String
    },
    writer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    created_at:{
        type: Date,
        default: Date.now()
    }

})

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
