import mongoose from "mongoose";

const User_User_Schema = new mongoose.Schema({

    User1_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    User2_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})
 
const User_User = mongoose.model("User_User", User_User_Schema);

export default User_User;


