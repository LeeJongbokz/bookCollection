import mongoose from "mongoose";

const Friend_Schema = new mongoose.Schema({

    User1_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    User2_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
 
const Friend = mongoose.model("Friend", Friend_Schema);

export default Friend;


