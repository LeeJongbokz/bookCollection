import mongoose from "mongoose";

const User_Book_Schema = new mongoose.Schema({

    User_ID:{
        type: String
    },
    Book_Title:{
        type: String
    },
    Book_Author:{
        type: String
    }

})

const User_Book = mongoose.model("User_Book", User_Book_Schema);

<<<<<<< HEAD
export default User_Book;
=======
export default User_Book;
>>>>>>> b26531f... project
