import mongoose from "mongoose";

const User_Book_Review_Schema = new mongoose.Schema({

    User_ID:{
        type: String
    },
    Book_ID:{
        type: String
    },
    Book_Title:{
        type: String
    },
    Book_Author:{
        type: String
    },
    Review_ID:{
        type: String
    },
    Review_Title:{
        type: String
    },
    Review_Content:{
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
 
const User_Book_Review = mongoose.model("User_Book_Review", User_Book_Review_Schema);

export default User_Book_Review;


