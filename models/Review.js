import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    text:{
        type: String,
        required: "Text is required"
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Review = mongoose.model("Review", ReviewSchema);

export default Review;