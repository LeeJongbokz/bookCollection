import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    
    email: {type: String, 'default': ''},
<<<<<<< HEAD
    avatarUrl: {type: Strin,
    friends:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    books:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }

    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
=======
    avatarUrl: {type: String}
>>>>>>> b26531f... project

})

UserSchema.plugin(passportLocalMongoose, { usernameField: "email"});
 
const User = mongoose.model("User", UserSchema);

export default User;


