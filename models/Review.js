import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    
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


const Review = mongoose.model("Review", ReviewSchema);

export default Review;