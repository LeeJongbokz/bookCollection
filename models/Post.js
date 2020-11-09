import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({

    title: {type: String},
    contents: {type: String},
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },    
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    },
    comments:[{
        contents: {type: String},
        writer: {type: mongoose.Schema.Types.ObjectId,
                 ref: "User"        
        },
        created_at:{
            type: Date,
            default: Date.now
        }
    }
    ]

});

const Post = mongoose.model("Post", PostSchema);

export default Post;


